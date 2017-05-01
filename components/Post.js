import React from 'react';
import Link from 'next/link';


function Post(props) {
	console.log('TEST: ', props);
  return (
    <article className="panel panel-info">
      <header className="panel-heading">
        <h2 className="panel-title"
					dangerouslySetInnerHTML={{
	          __html: props.title.rendered
	        }}
					></h2>
      </header>
      <div
        className="panel-body"
        dangerouslySetInnerHTML={{
          __html: props.full ? props.content.rendered : props.excerpt.rendered
        }}
      />
      {props.full || (
        <div className="panel-footer">
          <Link
						prefetch
            as={`/p/${props.id}/${props.slug}`}
            href={`/post?id=${props.id}`}
          >
						<a
							dangerouslySetInnerHTML={{
			          __html: props.title.rendered
			        }}
							></a>
          </Link>
        </div>
      )}
    </article>
  );
}


export default Post;
