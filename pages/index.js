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
    </Page>
  }
}
