import React from 'react';
import Link from 'next/link';

const Post = (props) => (
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
        __html: props.full ? props.content.rendered : props.excerpt.rendered
      }}
    />
    { props.full || (
      <div>
        <Link prefetch as={props.slug} href={`/post?id=${props.id}`} >
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


export default Post
