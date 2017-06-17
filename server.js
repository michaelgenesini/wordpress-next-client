const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
require('es6-promise').polyfill()
require('isomorphic-fetch')

const port = process.env.PORT ? process.env.PORT : 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const tree = {}

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
})

function generateWpPages() {
  const api = 'http://wordpress.michaelgenesini.com/wp-json/wp/v2/pages'
  fetch(api)
    .then(function (response) { return response.json() })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        tree[data[i].slug] = data[i]
        tree[data[i].slug]['generatedType'] = 'page'
      }
      console.info('GENERATED TREE PAGES')
    })
}

function generateWpPosts() {
  const api = 'http://wordpress.michaelgenesini.com/wp-json/wp/v2/posts'
  fetch(api)
    .then(function (response) { return response.json() })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        tree[data[i].slug] = data[i]
        tree[data[i].slug]['generatedType'] = 'post'
      }
      console.info('GENERATED TREE POSTS')
    })
}

function generateStaticTree() {
  generateWpPages()
  generateWpPosts()
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

    server.get('/:slug/', (req, res) => {
      const generated = getElementBySlug(req.params.slug)
      if (!generated) {
        return handle(req, res)
      }
      req.params.slug = generated.generatedType
      req.params.id = generated.id
      const type = '/' + generated.generatedType
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
      console.log('> Ready on http://localhost:' + port)
    })
  })
  .catch(error => {
    console.error(error)
    process.exit(0)
  })
