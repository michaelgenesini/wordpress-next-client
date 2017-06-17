require('isomorphic-fetch')

module.exports = {

    generateWpPages: function (tree) {
        const api = '//wordpress.michaelgenesini.com/wp-json/wp/v2/pages'
        fetch(api)
            .then(function (response) { return response.json() })
            .then(function(data) {
                for (var i = 0; i < data.length; i++) {
                    tree[data[i].slug] = {}
                    tree[data[i].slug]['id'] = data[i].id
                    tree[data[i].slug]['generatedType'] = 'page'
                }
                console.info('GENERATED TREE PAGES', tree)
            })
    },

    generateWpPosts: function (tree) {
        const api = '//wordpress.michaelgenesini.com/wp-json/wp/v2/posts'
        fetch(api)
            .then(function (response) { return response.json() })
            .then(function(data) {
                for (var i = 0; i < data.length; i++) {
                     tree[data[i].slug] = {}
                    tree[data[i].slug]['id'] = data[i].id
                    tree[data[i].slug]['generatedType'] = 'post'
                }
                console.info('GENERATED TREE POSTS', tree)
            })
    }
}