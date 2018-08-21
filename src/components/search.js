import React from "react";

export default class Search extends React.Component{


    handleSubmit(e)
    {
     e.preventDefault();
     const val=this.refs.add.value;
     e.target.reset();
     this.props.additem(val);
    }


render(){
    return(
            <div>
            <form id="add" onSubmit={this.handleSubmit.bind(this)}>
                   <input type="text"  id="sbar" required ref="add"/>
                   <input type="submit"  id="btn" value="Add"/>
            </form>
            </div>

    );
}

}
