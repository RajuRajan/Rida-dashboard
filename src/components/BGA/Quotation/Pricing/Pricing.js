import React, { Component } from 'react';
import './Pricing.scss';

import edit from '../../../../images/edit-regular (1).svg';
import trash from '../../../../images/trash-alt-solid (1).svg';
import bed from '../../../../images/bed-solid.svg';
import angleup from '../../../../images/angle-up-solid.svg';
import down from '../../../../images/down-white.svg';


import RowDuration from '../../../Table/RowDuration';

import PricingTable from '../../../Table/PricingTable';
import Accordian from '../../../Accordian/Accordian';

export default class Pricing extends Component {

  constructor() {
    super()
    this.state = {
      Agent: '',
      PIC: '',
      Duration: '',
      Pattern1: '',
      Pattern2: '',
      Start: '',
      End: '',
      Departure: '',
      Quoter: '',
      day: '',
      city: '',
      hostel: '',
      single_pax: '',
      single_price: '',
      twin_pax: '',
      twin_price: '',
      triple_pax: '',
      triple_price: '',
      total_pax: '',
      total_price: '',
      formOnedata: [],
      formTwodata: []
    }
    this.formOneSubmit = this.formOneSubmit.bind(this);
  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formOneSubmit() {
    const { formOnedata, formTwodata, day, city, hostel, single_pax, single_price, twin_pax, twin_price, triple_pax, triple_price, total_pax, total_price, ...data } = this.state;

    const formdata = this.state.formOnedata;
    formdata.push(data);
    this.setState({ formOnedata: formdata })

    localStorage.setItem("Pricing-formOneData", JSON.stringify(this.state.formOnedata))

    const objectTwo = {
      day: this.state.day,
      city: this.state.city,
      hostel: this.state.hostel,
      single_pax: this.state.single_pax,
      single_price: this.state.single_price,
      twin_pax: this.state.twin_pax,
      twin_price: this.state.twin_price,
      triple_pax: this.state.triple_pax,
      triple_price: this.state.triple_price,
      total_pax: this.state.total_pax,
      total_price: this.state.total_price
    }
    const formdataTwo = this.state.formTwodata;
    formdataTwo.push(objectTwo);

    this.setState({ formTwodata: formdataTwo });
    localStorage.setItem("Pricing-formTwoData", JSON.stringify(this.state.formTwodata))

    this.setState({
      Agent: '',
      PIC: '',
      Duration: '',
      Pattern1: '',
      Pattern2: '',
      Start: '',
      End: '',
      Departure: '',
      Quoter: '',
      day: '',
      city: '',
      hostel: '',
      single_pax: '',
      single_price: '',
      twin_pax: '',
      twin_price: '',
      triple_pax: '',
      triple_price: '',
      total_pax: '',
      total_price: ''
    })

    alert("Value Submitted")
  }
  render() {
    return (

      <div className="container-fluid">
        <div className="row trash-edit">
          <div className="col-2">
            <div className="rectangle">503401 - 01</div>
            <div className="rectangle-toggle">503401 - 02</div>
          </div>
          <div className="col-9"></div>
          <div className="col-1 edit" >
            <img src={edit} />
            <img src={trash} />
          </div>

        </div>
        <form onSubmit={(e) => { e.preventDefault(); this.formOneSubmit() }}>

          <RowDuration form_function={this.formHandler} form_field={this.state} />

          <div className="row" style={{ margin: "1% 6%" }}>
            <div className="col-8"></div>
            <div className="col-2"><button className="btn-prim">Cancel</button></div>
            <div className="col-2"><input type="submit" className="btn-sec" value="Create" /></div>
          </div>
          <div className="row brief" ><b>Pricing list for : 503401 - 01</b>
          </div>
          <div className="row hr"></div>
          <div className="row hotel">
            <div style={{ padding: "0% 8%", lineHeight: "50px", width: "100%" }}>
              <div className="flex">
                <div className="hotel-left-up" > <img src={bed} /><span><b> Hotels</b></span></div>
                <div className="hotel-right-up"> <img src={angleup} /></div>
              </div>
            </div>
          </div>

          <PricingTable form_function={this.formHandler} form_field={this.state} />
        </form>

        <div className="row" style={{ margin: "0% 6%" }}>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <Accordian/>
             
              <div className="footer flex">
                <div>
                  <p>Packages</p>
                </div>
                <div><img src={down} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
