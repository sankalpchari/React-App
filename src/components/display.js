import React from 'react';
import "./styles.css";

export default class Display extends React.Component{

  render (){
        
     var btn={
         width:'100px'
     }


    return (
    <div>
        <li key={this.props.index}>
         <div>{this.props.item}</div>
           <div> <button id="btn" style={btn} onClick={this.remove.bind(this)}>Complete
            </button>
        </div>
        </li>
     </div>)
  }

  remove(){
    this.props.del(this.props.item);
  }

}