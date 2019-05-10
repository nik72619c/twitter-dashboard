import React from 'react';
import Axios from 'axios';
export default class SearchComponent extends React.Component{
constructor(){
    super();
    this.search=this.search.bind(this);
}
componentDidMount(){

}
search(){
  Axios.get('http://localhost:1234/getTweets').then(response=>console.log(response));  
}

render(){
    return (
        <div>
            <input type="text" name="" id="search" />
            <button onClick={this.search}>search</button>
        </div>
    )
}
    
}