import React from 'react';
import './App.css';
import SearchComponent from './components/searchComponent';
import DisplayData from './components/displayData';

class App extends React.Component {
  constructor(){
    super();
    this.getTweets=this.getTweets.bind(this);
    
    this.state={
      tweets: []
    }
  }
  getTweets(receivedtweets){
this.setState({
  tweets: receivedtweets
})
console.log('app got tweets', this.tweets);
  }
  render(){
  return (
    <div className="App">
      <SearchComponent getTweets={this.getTweets}/>
      <DisplayData tweets={this.state.tweets}/>
    </div>
  )
  }
}

export default App;
