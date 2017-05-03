import React from 'react'
import Link from 'next/link'

const WPPage = (props) => {
  return (
    <article>
      <header>
        <h1
  				dangerouslySetInnerHTML={{
            __html: props.title.rendered
          }}
  				></h1>
      </header>
      <div
        dangerouslySetInnerHTML={{
          __html: props.full ? props.content.rendered : props.excerpt.rendered
        }}
      />
      { props.full || (
        <div>
          <Link prefetch as={props.slug} href={`/page?id=${props.id}`} >
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
}

export default WPPage
