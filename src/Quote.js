import React from 'react';
import data from './data';
 class Quote extends React.Component{
   constructor(props){
     super(props);
   }
   render(){
       const num = this.props.number;
       const quotes = data.filter(item => item.quoteId === num);
       let inputStyle = {
        color: quotes[0].color
      };
     return(
       <div>
        <h3 className = 'quote-text' style={inputStyle}>"{quotes[0].quote}"</h3>
     <h4 className = 'author' style={inputStyle}>-{quotes[0].author}</h4>
       </div>
     );
   }
 }



export default Quote;
