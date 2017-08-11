import React from 'react'

const Display = ({ posts,vote }) => (
  <div className="">
    {posts.map(({id, title, body, postsCount }) => (
      <div className="" key={id}>
        <h4>{title}</h4>
        <em><strong>Likes:</strong> {postsCount}</em> <button onClick={() => vote(id,'up')}>+1</button> <button onClick={() => vote(id, 'down')}>-1</button>
        <br /><br />
      </div>
    ))}
  </div>
)

export default Display
