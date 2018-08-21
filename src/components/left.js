import React from "react";
import Display from "./display"

export default class Left extends React.Component{
    constructor(){
        super()
      
    }    
    render()
    {
         var lists = this.props.list ;
         lists=lists.map(function(item,index){
           return(<Display item={item} del={this.props.delete} id={index} key={index}/>)
        },this)       

        var toDo={
            textAlign:"center"
        }
        return(<div>
                <h4 style={toDo}>Task left</h4>
                <ul>{lists}</ul>
        </div>)
    }
    
 

}