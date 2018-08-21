import React from "react";
import Add from "./add";
import Head from "./Head";
import Search from "./search";
import Left from "./left";
import Complete from "./complete";
import "./styles.css";

export default class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      todo :["php","css","html"],
      complete:[]
    }

    this.handleAdd=this.handleAdd.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }   
   
  handleAdd(item)
  {
    var lists=this.state.todo;
    lists.push(item);
    this.setState({todo:lists})
  } 


  handleDelete(item)
  {
    var todos=this.state.todo
    todos = todos.filter(function(val,index){
       return (item!=val);
    })

    var add=this.state.complete;
    add.push(item);
    this.setState({complete:add});

    this.setState({
      todo:todos
    })
  }


  render (){
    return(<div>
    <div id="mainhead">
    <Head/>    
    </div>
    <Search list={this.state.todo} additem={this.handleAdd} /> 
    <div id="div">
     <div id="coll"><Left list={this.state.todo} delete={this.handleDelete} /></div>
     <div id="coll"><Complete comp={this.state.complete} /></div>
    </div>
    </div>)
  }
}