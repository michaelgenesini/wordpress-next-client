import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import api from '../libs/api'

import Page from '../components/Page'
import Post from '../components/Post'


class PostPage extends Component {
  static async getInitialProps(context) {
    const [
      site,
      post,
    ] = await Promise.all([
      api.site.getInfo(),
      api.posts.getSingle(context.query.id)
    ])

    return {
      site,
      post,
    }
  }

  render() {
    return (
      <Page name={this.props.site.name} title={this.props.site.title}>
        <ul>
					<li><Link href="/"><a>Home</a></Link></li>
					<li><Link href="/pages"><a>Pages</a></Link></li>
					<li><Link href="/posts"><a>Posts</a></Link></li>
				</ul>

				<Post {...this.props.post} full />

      </Page>
    )
  }
}


export default PostPage
