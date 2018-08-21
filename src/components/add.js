import React from 'react'

export default class Add extends React.Component{

   


    render(){
    var ipbox = {
      "width ": "100px",
      "height" :"20px",
      "padding":"5px",
      "border" :" 1px solid green",
      "backgroundColor":"#ffffff",
      "textColor":"#8f9091",
      "margin":"0 auto"
    }


      var button ={
        "textAlign":"center",
        "width":"100px",
        "height":"31px",
        "backgroundColor":"green",
        "border":"1px solid green",
        "color":"white"
        
      }


    

        return(
          <form id="add" onSubmit={this.handelSubmit.bind(this)}>
                 <input style={ipbox} type="text" ref="input" required ></input>
                 <input  style={button} type="submit" value="submit"  ></input>
          </form>

        );


    }

    handelSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.input.value);
    }
}