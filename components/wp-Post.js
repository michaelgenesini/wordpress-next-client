import React from 'react'
import Link from 'next/link'

const WPPost = (props) => (
	<article>
    <header>
      <h2
				dangerouslySetInnerHTML={{
          __html: props.title.rendered
        }}
				></h2>
    </header>
    <div
      dangerouslySetInnerHTML={{
        __html: props.full ? props.content.rendered.replace('https://wordpress.michaelgenesini.com/', '/') : props.excerpt.rendered.replace('https://wordpress.michaelgenesini.com/', '/')
      }}
    />
    { props.full || (
      <div>
        <Link prefetch as={`/post/${props.slug}`} href={`/post?id=${props.id}`} >
					<a
						dangerouslySetInnerHTML={{
		          __html: props.title.rendered
		        }}
						></a>
        </Link>
      </div>
    ) }
  </article>
)


export default WPPost
