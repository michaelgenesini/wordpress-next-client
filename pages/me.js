import React, { Component } from 'react';
import Link from 'next/link';
import api from '../libs/api';

import Page from '../commons/Page'
import GithubUser from '../components/github-User'

class SinglePage extends Component {
	static async getInitialProps(context) {
		const [
			user
		] = await Promise.all([
			api.githubUsers.getSingle('michaelgenesini')
		])

		return {
			user
		}
	}

	render() {
		return (
			<Page>
				<ul>
					<li><Link href="/"><a>Home</a></Link></li>
					<li><Link href="/pages"><a>Pages</a></Link></li>
					<li><Link href="/posts"><a>Posts</a></Link></li>
					<li><Link href="/me"><a>Author</a></Link></li>
				</ul>

				<GithubUser {...this.props.user} full />

			</Page>
		)
	}
}


export default SinglePage;
