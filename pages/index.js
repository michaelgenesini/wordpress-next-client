import React from 'react'
import Link from 'next/link'

import Page from '../components/Page';

export default class extends React.Component {
  render () {
    return <Page name="HOME" title="TITLE">
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/pages"><a>Pages</a></Link></li>
        <li><Link href="/posts"><a>Posts</a></Link></li>
      </ul>
      <br/>
      <h1>Hello Next Wordpress Client</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Page>
  }
}
