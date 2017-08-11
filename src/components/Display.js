import React from 'react'

const Display = (state,upVote,downVote) => (
  <div className="">
    {state.postList.map(({id, title, body, postsCount }) => (
      <div className="" key={id}>
        <h4>{title}</h4>
        <p>{body}</p>
        <small>Likes: {postsCount}</small> <button onClick={ () => upVote(id) }>+1</button><button onClick={ (e) => downVote() }>-1</button>
        <br /><br />
      </div>
    ))}
  </div>
)

export default Display;
