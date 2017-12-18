import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
  state = {
    title: "Hello, How Are You?",
    body: "There was a dog and it was brown.",
    postsCount: 17,
  }

  upVote = () => {
    this.setState({
      postsCount: this.state.postsCount +1,
    })
  }
  downVote = () => {
    this.setState({
      postsCount: this.state.postsCount -1,
    })
  }

  render() {
    return (
      <div className="">
        <h2>Container Component</h2>
        <br />
        <Display
          title={this.state.title}
          body={this.state.body}
          postsCount={this.state.postsCount}
          upVote={this.upVote}
          downVote={this.downVote}
        />
      </div>
    );
  }
}

export default App;
