import React, { Component } from 'react';
import Link from 'next/link';
import api from '../libs/api';

import Page from '../components/Page';
import Header from '../components/Header';

class SinglePage extends Component {
	static async getInitialProps(context) {
		const [
			page
		] = await Promise.all([
			api.pages.getSingle(context.query.id)
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

				<h1>{ this.props.page.title.rendered }</h1>
				<div dangerouslySetInnerHTML={{__html: this.props.page.content.rendered }}></div>

			</Page>
		)
	}
}


export default SinglePage;
