import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import api from '../libs/api'

import Page from '../commons/Page'
import WPPage from '../components/wp-Page'

class Pages extends Component {
	static async getInitialProps(context) {
		const [
			pages
		] = await Promise.all([
			api.wpPages.getList()
		])

		return {
			pages
		}
	}

	render() {
		return (
			<Page name="Pages" title="Titles">
				<ul>
					<li><Link href="/"><a>Home</a></Link></li>
					<li><Link href="/pages"><a>Pages</a></Link></li>
					<li><Link href="/posts"><a>Posts</a></Link></li>
				</ul>

				{ this.props.pages.map(page => <WPPage key={page.id} {...page} /> ) }

			</Page>
		)
	}
}


export default Pages
