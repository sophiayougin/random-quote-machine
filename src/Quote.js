import React from 'react';
import data from './data';
 class Quote extends React.Component{
   render(){
       const num = this.props.number;
       const quotes = data.find(item => item.quoteId === num);
       let inputStyle = {
        color: quotes.color
      };
     return(
       <div>
        <h3 className = 'quote-text' style={inputStyle}>"{quotes.quote}"</h3>
     <h4 className = 'author' style={inputStyle}>-{quotes.author}</h4>
       </div>
     );
   }
 }



export default Quote;
