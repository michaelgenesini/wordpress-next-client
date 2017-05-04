import 'isomorphic-fetch'

const wpBaseUrl = `http://wordpress.michaelgenesini.com/wp-json/wp/v2`
const githubBaseUrl = `https://api.github.com`
const PUBLIC = `P0OqPFF2DBrq`

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
      const response = await fetch(`${wpBaseUrl}/pages`)
      const data = await response.json()
      return data
    },
    async getSingle(id) {
      const response = await fetch(`${wpBaseUrl}/pages/${id}`)
      const data = await response.json()
      return data
    }
  },
  wpPosts: {
    async getList() {
      const response = await fetch(`${wpBaseUrl}/posts`)
      const data = await response.json()
      return data
    },
    async getSingle(id) {
      const response = await fetch(`${wpBaseUrl}/posts/${id}`)
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
