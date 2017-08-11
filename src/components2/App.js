import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
  state = {
    postList: [
      {
        id: 0,
        title: "Hello, How Are You?",
        body: "There was a dog and it was brown.",
        postsCount: 17,
      },
      {
        id: 1,
        title: "A Great Long Title",
        body: "With much redundancy the man spoke.",
        postsCount: 9,
      },
      {
        id: 2,
        title: "Sample Business Cards",
        body: "The best time to buy things is tomorrow.",
        postsCount: 21,
      },
    ],
  }

  vote = (id,voteType) => {
    const updatedPostList = this.state.postList.map((post => {
      if(post.id !== id) return post;

      const updatedPostCount = voteType === 'up' ? post.postsCount +1 : post.postsCount -1

      return({
        ...post,
        postsCount: updatedPostCount,
      });
    }));
    this.setState({
      postList: updatedPostList,
    });
    //console.log(updatedPostList);
  }

  render() {
    return (
      <div className="">
        <h2>Container Component</h2>
        <br />
        <Display
          posts={this.state.postList}
          vote={this.vote}
        />
      </div>
    );
  }
}

export default App;
