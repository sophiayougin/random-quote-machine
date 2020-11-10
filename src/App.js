import './App.css';
import React from 'react';
import data from './data';
import Quote from'./Quote';
 class App extends React.Component{
   constructor(props){
     super(props);
     console.log(); 
     this.state = {
       randomNumber: Math.floor(Math.random() * data.length)
     }
   } 
   quoteHandler = () =>{
     this.setState({
       randomNumber : Math.floor(Math.random() * data.length)
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
         <button className='next-quote-button' style={inputStyle}onClick = {this.quoteHandler}>NextQuote</button>
       </div>
     );
   }
 }



export default App;
