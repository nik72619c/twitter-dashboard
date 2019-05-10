import React from 'react';
function DisplayData(props){
   console.log('tweets final', props.tweets);
        return (
            <div className="w-50 mx-auto mt-3">
  {props.tweets.length>0 ? <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">SNO</th>
      <th scope="col">TWEETS</th>

    </tr>
  </thead>
  <tbody>
   {props.tweets.map((tweet,index)=>{
       return  (<tr>
       <th scope="row">{index+1}</th>
       <td>{tweet}</td>
     </tr>)
   })}
  </tbody>

</table> : <div>search for tweets...</div>}
</div>
        )
    
    }

    export default DisplayData;
