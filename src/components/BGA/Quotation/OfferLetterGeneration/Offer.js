import React, { Component } from 'react';
import './Offer.scss';
import {Terms} from'../../../Common/Common'

export default class Offer extends Component {
constructor()
{
  super();
    this.state={
      print_agent:false,
      print_holiday:false,
      print_picture:false,
      itinerary_summary:false,
      trade_fair_list:false,
      parking_fees_included:false,
      drivers_meal:false   
    }
    
 } 

    check=(e)=>
    {
     
     if(e.target.checked)
     {
       this.setState({[e.target.name]:true})
     } 
     else{
      this.setState({[e.target.name]:false})
     }
     
     
    }
    render() {
      console.log(this.state)
        return (
            <div>
                
  <div className="container-fluid">

<div className="term-field"><input type="text" name="offer-textfield" /></div>

<div className="row brief-tour" ><b>Tour reference : test name</b></div>

<div className="term-header"><b>Terms</b></div>


<div className="term-body">
  {Terms.map((value,index)=>{
    return(
      <label className="container" key={index}>{value.name}
      <input type="checkbox"  onChange={(e)=>{this.check(e)}}/>
      <span className="checkmark"></span>
    </label>
  
  )}
    )}
  
</div>
<div className="row offer-btn" >
<div className="col-3"></div>
<div className="col-3"><button className="btn-sec-1">Preview</button></div>
<div className="col-3"><button className="btn-sec-2">Download Quotation</button></div>
<div className="col-3"><button className="btn-sec-2">Generate Quotation</button></div>

</div>


</div>
            </div>
        )
    }
}
