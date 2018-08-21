import React from "react";

export default class Complete extends React.Component{
    render()
    {
        var toDo={
            textAlign:"center"
        }

        var lists=this.props.comp;
        lists=lists.map(function(item,index){
            return(<li><div>{item}</div></li>)
        })


        return(<div>
                <h4 style={toDo}>Completed tasks </h4>
                <ul>{lists}</ul>
        </div>)
    }  
}