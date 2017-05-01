import React from 'react'
import API from '../libs/api'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
		// const [
		// 	site,
		// 	pages,
		// 	page,
		// 	posts,
		// 	post
		// ] = await Promise.all([
    //   API.site.getInfo(),
		// 	API.pages.getList(),
		// 	API.pages.getSingle(3),
		// 	API.posts.getList(),
		// 	API.papostsges.getSingle(),
    // ]);
		// console.log('TEST: ', site,pages,page,posts,post);
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return <div>
      Hello World {this.props.userAgent}
			<br/>
			<Link href="/home">
	      <a>Home Page</a>
	    </Link>
    </div>
  }
}
