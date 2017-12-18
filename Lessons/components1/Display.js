import React from 'react'

const Display = ({title,body,postsCount,upVote,downVote}) => (
  <div className="">
    <h2>{title}</h2>
    <p>{body}</p>
    <em>Post Count: {postsCount}</em>
    <button onClick={() => upVote()}>+1</button><button onClick={() => downVote()}>-1</button>
  </div>
)

export default Display
