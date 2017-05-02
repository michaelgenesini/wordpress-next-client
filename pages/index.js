import React from 'react'
import API from '../libs/api'
import Link from 'next/link'

export default class extends React.Component {
  render () {
    return <div>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/pages"><a>Pages</a></Link></li>
        <li><Link href="/posts"><a>Posts</a></Link></li>
      </ul>
      <br/>
      <h1>Hello Next Wordpress Client</h1>
    </div>
  }
}
