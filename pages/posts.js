import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import api from '../libs/api'

import Page from '../commons/Page'
import WPPost from '../components/wp-Post'


class PostsPage extends Component {
  static async getInitialProps(context) {
    const [
      site,
      posts
    ] = await Promise.all([
      api.wpSite.getInfo(),
      api.wpPosts.getList()
    ])

    return {
      site,
      posts
    }
  }

  render() {
    return (
      <Page name={this.props.site.name} title={this.props.site.title}>
        <ul>
					<li><Link href="/"><a>Home</a></Link></li>
					<li><Link href="/pages"><a>Pages</a></Link></li>
					<li><Link href="/posts"><a>Posts</a></Link></li>
					<li><Link href="/me"><a>Author</a></Link></li>
				</ul>

				{ this.props.posts.map(post => <WPPost key={post.id} {...post} /> ) }

      </Page>
    )
  }
}


export default PostsPage
