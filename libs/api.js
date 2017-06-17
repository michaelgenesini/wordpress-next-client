import 'isomorphic-fetch'

const wpBaseUrl = `//wordpress.michaelgenesini.com/wp-json`
const wpAPI = `/wp/v2`
const acfAPI = `/acf/v3`
const githubBaseUrl = `https://api.github.com`

const api = {
  wpSite: {
    async getInfo() {
      // const response = await fetch(`${wpBaseUrl}/settings`, {
      //   headers: {
      //
      //   }
      // })
      // const data = await response.json()
      // return data
      return { title: 'TEST', name: 'NAME'}
    }
  },
  wpPages: {
    async getList() {
      const response = await fetch(`${wpBaseUrl + wpAPI }/pages`)
      const data = await response.json()
      return data
    },
    async getSingle(id) {
      const response = await fetch(`${wpBaseUrl + wpAPI }/pages/${id}`)
      const data = await response.json()
      return data
    }
  },
  wpPosts: {
    async getList() {
      const response = await fetch(`${wpBaseUrl + wpAPI }/posts`)
      const data = await response.json()
      return data
    },
    async getSingle(id) {
      const response = await fetch(`${wpBaseUrl + wpAPI }/posts/${id}`)
      const data = await response.json()
      return data
    }
  },
  githubUsers: {
    async getSingle(id) {
      const response = await fetch(`${githubBaseUrl}/users/${id}`)
      const data = await response.json()
      return data
    }
  }
}


export default api
