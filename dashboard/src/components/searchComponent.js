import React from 'react';
import Axios from 'axios';
export default class SearchComponent extends React.Component{
constructor(props){
    super(props);
    this.searchTweets=this.searchTweets.bind(this);
}
componentDidMount(){
    this.tweets=[];
    this.customArr=[];
    
}
searchTweets(){
    this.customArr=[];
    this.tweets=[];
    console.log('filter details are', this.props.filterValue);
    let searchValue= document.getElementById('search').value;
    console.log('searchValue', searchValue);
  Axios({
    url: 'http://localhost:1234/getTweets'+searchValue,
    method: 'get'
  }).then(response=>{
    if(response.data.code==34){
        this.tweets.push("Username not found, pleasew enter a valid username");
        this.props.getTweets(this.tweets);
    }
    else{
      
      console.log(response.data);
      response.data.forEach(tweetElement=>{
        if(!this.props.filterValue.choice){
            console.log('inside if');
            this.tweets.push(tweetElement.text);
            console.log('tweets', this.tweets);
            
            }
          if(this.props.filterValue.choice==="searchByLength"){
              
              console.log('inside filter of length');
              console.log('length of tweet', tweetElement.text.length);
            if(tweetElement.text.length==this.props.filterValue.searchValue){
                this.customArr.push(tweetElement.text);
                this.tweets=this.customArr;
            }
          }
          if(this.props.filterValue.choice==="searchByText"){
            console.log('inside filter of text');
            if(tweetElement.text.includes(this.props.filterValue.searchValue)){
                this.customArr.push(tweetElement.text);
                this.tweets=this.customArr;
            }
          }
         
      })
      this.props.getTweets(this.tweets);
    }
    }).catch(e=>this.props.getTweets(["error occured, please try again with valid entries or check your internet connection"]));  
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