import './App.css';
import React from 'react';
import data from './data';
import Quote from'./Quote';
 class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       randomNumber: this.getRandomNumber(data.length)
     }
   }
   getRandomNumber = (n) => Math.floor(Math.random() * n);
   quoteHandler = () =>{
     this.setState({
       randomNumber : this.getRandomNumber(data.length)
     });
   }
   render(){
    const quotes = data.filter(item => item.quoteId === this.state.randomNumber);
    let inputStyle = {
      background: quotes[0].color
    };
    document.body.style.backgroundColor = quotes[0].color;
     return(
       <div className ='quote-class'>
         <Quote number = {this.state.randomNumber}/>
         <button className='next-quote-button' style={inputStyle} onClick = {this.quoteHandler}>NextQuote</button>
       </div>
     );
   }
 }



export default App;
