import 'isomorphic-fetch'
import Link from 'next/link'

const Page = ({ title, content }) => <div>
	<Link href="/">
		<a>Index Page</a>
	</Link>
	<h1>{title}</h1>
	<div dangerouslySetInnerHTML={{__html: content}}></div>
</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://wordpress.michaelgenesini.com/wp-json/wp/v2/pages/2')
  const json = await res.json()
  return {
		title: json.title.rendered,
		content: json.content.rendered
	}
}

export default Page
