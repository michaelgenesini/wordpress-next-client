import React from 'react'
import Link from 'next/link'

const WPPage = (props) => {
  return (
    <article>
      <header>
        <img style={{width: 50,height: 50,borderRadius:25}} src={props.avatar_url}></img>
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
        <strong>{props.location}</strong>
      </header>
    </article>
  )
}

export default WPPage
