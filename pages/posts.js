import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import api from '../libs/api';

import Page from '../components/Page';
import Post from '../components/Post';


class PostPage extends Component {
  static async getInitialProps(context) {
    const [
      site,
      posts,
    ] = await Promise.all([
      api.site.getInfo(),
      api.posts.getList(),
    ]);

    return {
      site,
      posts,
    }
  }

  render() {
		console.log(this.props);
    return (
      <Page name={this.props.site.name} title={this.props.site.title}>
        <ol className="breadcrumb">
          <li><Link href="/"><a>Home</a></Link></li>
        </ol>

				{ this.props.posts.map(post => <Post key={post.id} {...post} /> )}

      </Page>
    );
  }
}


export default PostPage;
