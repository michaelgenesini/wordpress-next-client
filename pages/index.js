import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
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
