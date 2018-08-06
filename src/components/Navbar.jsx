import React, { Component } from 'react';

class Navbar extends Component {
   state = {
      value1: 0,
      text:'',
   };

   styles = {
       textAlign: "center",
       fontSize: 30,
       paddingLeft: 500,
    //    fontFamily: Serif ,

   };
  
//    constructor(){
//        super();
//        this.listUpdates = this.listUpdates.bind(this);
//    }

   
//    listUpdate = () => {
//      this.setState({value1: this.state.value1 +1});
//    }
    render() { 
        const { text } = this.state;
        const enabled =
              text.length > 0 
            ;

        return <React.Fragment>
            <nav className="navbar navbar-dark bg-info m-2">
  <span  style = {this.styles} class="navbar-brand mb-0 h1 "> MyTODO-LIST</span>
      </nav>


     <div className="container">
        <div className="row">
           <div className="col-8 border p-3">

             
      <input  className="form-control  mr-l-2 p-3" onChange={this.handleInputChange} placeholder="Add To Do List" aria-label="Search" value={this.state.text}/>

    <button onClick={this.listUpdates} disabled={!enabled} className= "btn btn-outline-primary m-2 " type="submit">AddList</button>

    {/*  */}
           </div>
           <div className="col-4 border p-3">
           <h3><u>DESCRIPTION</u></h3>
           <h6>Number:<span className={this.colorBadge()} >{this.countList()}</span></h6>

           </div>
            </div>
       </div>
     

 </React.Fragment>;
    }


    colorBadge() {
        let color = "badge m-2 badge-";
        color += (this.state.value1 === 0) ? "warning " : "info";
        return color;
    }

    countList(){
          return (this.state.value1 ===0) ? "zero" : this.state.value1;    
        }
    


   buttonAction(){
      
        if (this.state.text.length !== 0) return 
    }    

    listUpdates =()=> {
   
        this.setState({ value1: this.state.value1+1});
       }

       handleInputChange = (evt) => {
        this.setState({ text: evt.target.value });
      }
  
      handleAddList = () => {
        const { text} = this.state;
        alert(`Welcome ${text}`);
      }

 }
 
export default Navbar;