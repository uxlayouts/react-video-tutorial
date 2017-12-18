import React from 'react'

const Display = ({title,body,postsCount}) => (
  <div className="">
    <h2>{title}</h2>
    <p>{body}</p>
    <em>Post Count: {postsCount}</em>
  </div>
)

export default Display
