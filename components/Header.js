import React, { Component } from 'react';
import Link from 'next/link';

import api from '../libs/api';

class Header extends Component {
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
			<header>
				<ul>
				{ this.props.pages.map(page => <li key={page.id}><Link as={page.slug} href={`/page?id=${page.id}`}><a>{ page.title.rendered }</a></Link></li> ) }
				</ul>
			</header>
		)
	}
}

export default Header
