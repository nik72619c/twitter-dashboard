import React from 'react';
import Axios from 'axios';
export default class SearchComponent extends React.Component{
constructor(props){
    super(props);
    this.searchTweets=this.searchTweets.bind(this);
}
componentDidMount(){
    this.tweets=[]
}
searchTweets(){
    this.tweets=[];
    let searchValue= document.getElementById('search').value;
    console.log('searchValue', searchValue);
  Axios({
    url: 'http://localhost:1234/getTweets'+searchValue,
    method: 'get'
  }).then(response=>{
      console.log(response.data.statuses);
      response.data.statuses.forEach(tweetElement=>{
          this.tweets.push(tweetElement.text);
          console.log('tweets', this.tweets);
          this.props.getTweets(this.tweets);
      })
    });  
}

render(){
    return (
        <div>
            <input type="text" placeholder="type somthing here..." id="search"/>
            <button onClick={this.searchTweets}>search</button>
        </div>
    )
}
    
}