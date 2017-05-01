import 'isomorphic-fetch'

const baseUrl = `http://wordpress.michaelgenesini.com/wp-json/wp/v2`

const api = {
  site: {
    async getInfo() {
      const response = await fetch(baseUrl)
      const data = await response.json()
      // return data
			return { title: 'TEST', name: 'NAME'}
    }
  },
	pages: {
    async getList() {
      const response = await fetch(`${baseUrl}/pages`)
      const data = await response.json()
      return data
    },
    async getSingle(id) {
      const response = await fetch(`${baseUrl}/pages/${id}`)
      const data = await response.json()
      return data
    }
  },
  posts: {
    async getList() {
      const response = await fetch(`${baseUrl}/posts`)
      const data = await response.json()
      return data
    },
    async getSingle(id) {
      const response = await fetch(`${baseUrl}/posts/${id}`)
      const data = await response.json()
      return data
    }
  }
}


export default api
