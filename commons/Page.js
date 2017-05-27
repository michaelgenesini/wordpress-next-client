import React, { Children } from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const style = `
	body {
		background: #fff;
		font: 16px menlo;
		color: #4c4c4c;
	}
	a {
		color: #e54b4b
	}
`

const Page = (props) => {
  return (
    <section className="container">
      <Head>
        <title>
          {props.name} - {props.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
          <style>{style}</style>
      </Head>

			{props.children}

    </section>
  )
}

export default Page
