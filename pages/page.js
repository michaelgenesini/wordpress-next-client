import React, { Component } from 'react';
import Link from 'next/link';
import api from '../libs/api';

import Page from '../commons/Page'
import WPPage from '../components/wp-Page'

class SinglePage extends Component {
	static async getInitialProps(context) {
		const [
			page
		] = await Promise.all([
			api.wpPages.getSingle(context.query.id)
		])

		return {
			page
		}
	}

	render() {
		return (
			<Page name={ this.props.page.name } title={ this.props.page.title.rendered }>
				<ul>
					<li><Link href="/"><a>Home</a></Link></li>
					<li><Link href="/pages"><a>Pages</a></Link></li>
					<li><Link href="/posts"><a>Posts</a></Link></li>
				</ul>

				<WPPage {...this.props.page} full />

			</Page>
		)
	}
}


export default SinglePage;
