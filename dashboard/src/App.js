import React from 'react';
import './App.css';
import SearchComponent from './components/searchComponent';
import DisplayData from './components/displayData';
import AskFilter from './components/AskFilter';

class App extends React.Component {
  constructor(){
    super();
    this.getTweets=this.getTweets.bind(this);
    this.getSearchValue=this.getSearchValue.bind(this);
   
    this.state={
      tweets: [],
      filterValue:{}
    }
  }
  getSearchValue(value){
    this.setState({filterValue: value});
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
    {/* <AskName getSearchValue={this.getSearchValue}/> */}
    <AskFilter getSearchValue={this.getSearchValue}/>
      <SearchComponent getTweets={this.getTweets} filterValue={this.state.filterValue}/>
      <DisplayData tweets={this.state.tweets}/>
    </div>
  )
  }
}

export default App;
