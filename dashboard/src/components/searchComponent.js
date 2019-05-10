import React from 'react';
var Twitter=require('twitter-lite');
export default class SearchComponent extends React.Component{
constructor(){
    super();
    this.search=this.search.bind(this);
}
componentDidMount(){

}
search(){
    var user = new Twitter({
        consumer_key: "45yBICrRNrlxO5yv1q6sv7XNT",
        consumer_secret: "nR4j7MVhLHoxl0OSd7yVtG8M8rOF2mZext9eRazaeiPt7Cs0Vw"
      });
     
      user.getBearerToken().then(response=>console.log(response))   
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