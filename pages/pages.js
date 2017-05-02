import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import api from '../libs/api';

import Page from '../components/Page';

class Pages extends Component {
	static async getInitialProps(context) {
		const [
			pages
		] = await Promise.all([
			api.pages.getList()
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

				<ul>
				{ this.props.pages.map(page => <li key={page.id}><Link href={`/page?id=${page.id}`}><a>{ page.title.rendered }</a></Link></li> ) }
				</ul>

			</Page>
		)
	}
}


export default Pages
