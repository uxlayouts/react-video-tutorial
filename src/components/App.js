import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
  state = {
    postList: [
      {
        id: 1,
        title: "Hello, How Are You?",
        body: "There was a dog and it was brown.",
        postsCount: 17,
      },
      {
        id: 2,
        title: "A Great Long Title",
        body: "With much redundancy the man spoke.",
        postsCount: 9,
      },
      {
        id: 3,
        title: "Sample Business Cards",
        body: "The best time to buy things is tomorrow.",
        postsCount: 21,
      },
    ]
  }

  // updateCurrentStoryContent = (e) => {
  //   const { id } = e.target
  //   this.setState({
  //     postList.: {
  //       ...this.state.currentStory,
  //       [id]: value
  //     }
  //   });
  //   // Get info from inputs and set state
  // }
  //
  // array.map(function(album,index){
  //   return <div onClick={this.handleClick}/>
  // })
  //
  // handleClick(e){
  //   console.log(e.target);
  //   e.target.className = 'active';
  //   ...
  // }

upVote = (clickedId) => {
  this.state.postList.map(({id}) => (
    if (id === clickedId) {

    }
  )}
  const { id, value } = e.target
  // console.log(e.target);
  // console.log(e.target.id);
  this.setState({
    postList.e: {
      [id]: value +1
    }
  });
  // Get info from inputs and set state
}

update(id) {
//find and update your item, you can do it since you have an 'id'
//follow link: http://codereview.stackexchange.com/questions/43438/writing-a-function-to-add-or-modify-an-existing-object-inside-an-array
    // this.setState({
    //   data:
    // })

  }
const Links = (props) => {
  return (
    <li>
      <p>{props.data.name}</p>
      <p>{props.data.vote}</p>
      <button onClick={() => props.update(props.id)}>Up</button>
    </li>
  );
};

  // upVote = (e) => {
  //
  //   console.log(e);
  //       // postList: this.state.postList.map(post => post.id === this.id ?
  //       //     // transform the one with a matching id
  //       //     { ...post, postsCount: post.postsCount +1 } :
  //       //     // otherwise return original todo
  //       //     post
  //       // )
  //   // let = votedItem = e.target;
  //   // this.setState({
  //   //   postsCount.votedItem: this.state.postsCount +1,
  //   // })
  // }
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
          {...this.state}
          upVote={this.upVote}
          downVote={this.downVote}
        />
      </div>
    );
  }
}

export default App;
