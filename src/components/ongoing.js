import React from "react"

export default class Ongoing extends React.Component{
    render(){
       
        var lists = this.props.list ;
        lists=lists.map(function(item,index){
           return(<Display item={item} delete={this.props.delete.bind(this)}  id={index} key={index} wtype={this.props.wtype} />)
        },this)       


        var toDo={
            textAlign:"center"
        }
        return(<div><h4 style={toDo}>Ongoing</h4>
           <ul>{lists}</ul>
        </div>);
    }
}