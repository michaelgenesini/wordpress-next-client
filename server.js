const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const wpTree = require('./wpTree')
require('es6-promise').polyfill()

const port = process.env.PORT ? process.env.PORT : 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const tree = {}

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60
})

function generateStaticTree() {
  wpTree.generateWpPages(tree)
  wpTree.generateWpPosts(tree)
}
// FIRST CALL
generateStaticTree()

function getElementBySlug(slug) {
  return tree[slug] ? tree[slug] : null
}

function renderAndCache(req, res, pagePath, queryParams) {
  console.log('renderAndCache: ', pagePath, queryParams)
  if (ssrCache.has(req.url)) {
    console.log(`CACHE HIT: ${req.url}`)
    res.send(ssrCache.get(req.url))
    return
  }

  app.renderToHTML(req, res, pagePath, queryParams)
  .then((html) => {
    console.log(`CACHE MISS: ${req.url}`)
    ssrCache.set(req.url, html)

    res.send(html)
  })
  .catch((err) => {
    app.renderError(err, req, res, pagePath, queryParams)
  })
}

app.prepare()
.then(() => {
  const server = express()
  server.get('/generate-static-tree', (req, res) => {
    console.log('GENERATING PAGES...');
    return generateStaticTree()
  })

  server.get('/:slug/:single?', (req, res) => {
    const generated = getElementBySlug(req.params.single ? req.params.single : req.params.slug)
    console.log('generated: ', generated)
    if (!generated) {
      return handle(req, res)
    }
    req.params.slug = generated.generatedType
    req.params.id = generated.id
    const type = '/'+generated.generatedType
    return renderAndCache(req, res, type, Object.assign(
      req.query,
      req.params
    ))
  })

  server.get('/', (req, res) => {
    return renderAndCache(req, res, '/', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+port)
  })
})
.catch(error => {
  console.error(error)
  process.exit(0)
})
