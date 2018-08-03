import React, { Component } from 'react';

class Navbar extends Component {
   state = {
      value: 0
   };

   styles = {
       textAlign: "center",
       fontSize: 30,
       paddingLeft: 500,
    //    fontFamily: Serif ,

   };
    render() { 
        return <React.Fragment>
            <nav class="navbar navbar-light bg-light">
  <span  style = {this.styles} class="navbar-brand mb-0 h1 "> MyTODO-LIST</span>
      </nav>


     <div className="container">
        <div className="row">
           <div className="col-8">

             <form className="form-group">
      <input className="form-control mr-l-2" placeholder="Add To Do List" aria-label="Search"/>
      <button className="btn btn-outline-primary m-2" type="submit">AddList</button>
      
    </form>
    {/*  */}
           </div>
           <div className="col-4">
           <h6>Number<span class="badge badge-secondary m-2">{this.state.value}</span></h6>
           </div>
            </div>
       </div>
  

 </React.Fragment>;
    }

}
 
export default Navbar;