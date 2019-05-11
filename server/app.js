const express=require('express');
const bodyParser=require('body-parser');
const cors=require('./middleware/cors');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors);

var Twitter=require('twitter');
var client = new Twitter({
    consumer_key: '45yBICrRNrlxO5yv1q6sv7XNT',
    consumer_secret: 'nR4j7MVhLHoxl0OSd7yVtG8M8rOF2mZext9eRazaeiPt7Cs0Vw',
    access_token_key: '',
    access_token_secret: ''
  });

app.get('/getTweets:username',(request,res)=>{
    console.log('request.params', request.params);
    client.get('statuses/user_timeline', {screen_name: request.params.username,
count: 10}, function(error, tweets, response) {
        if(!error){
            console.log('checking tweets response',tweets);
            res.send(tweets);
        }
        else if(error[0].code==34){
            res.send({code: 34});
        }
     });
})
  

app.listen(process.env.PORT || 1234, ()=>{
    console.log('server running at port 1234');
})
