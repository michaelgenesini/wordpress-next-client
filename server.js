const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
require('es6-promise').polyfill()
require('isomorphic-fetch')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const pageTree = {}

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
})

function generateStaticTree() {
  const api = 'http://wordpress.michaelgenesini.com/wp-json/wp/v2/pages'
  fetch(api)
    .then(function (response) { return response.json() })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        pageTree[data[i].slug] = data[i]
      }
      console.info('GENERATED TREE PAGES')
    })
}

function getElementBySlug(slug) {
  return pageTree[slug] ? pageTree[slug] : null
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

  server.get('/:slug/', (req, res) => {
    const page = getElementBySlug(req.params.slug)
    if (!page) {
      res.statusCode = 404
      res.end('Not found')
      return
    }
    req.params.slug = 'page'
    req.params.id = page.id
    return renderAndCache(req, res, '/page', Object.assign(
      req.query,
      req.params
    ))
  })

  server.get('/p/:id/:slug', (req, res) => {
    return renderAndCache(req, res, '/post', Object.assign(
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

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch(error => {
  console.error(error)
  process.exit(0)
})
