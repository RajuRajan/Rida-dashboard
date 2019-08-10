import React, { Component } from 'react';
import './Quotation.scss';
import { Link } from 'react-router-dom';

import arrow from '../../../images/arrow.svg';

import Itinerary from '../../BGA/Quotation/Itineraray/Itinerary';
import CreateQuotation from '../Quotation/CreateQuotation/CreateQuotation';
import Offer from '../../BGA/Quotation/OfferLetterGeneration/Offer';
import Pricing from '../../BGA/Quotation/Pricing/Pricing';
import Tab from '../../Tab/Tab';


export default class Quotation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabOption: "Create-Quotation",
            BreadQuotation: "Quotation",
            tabs: "Create-Quotation"
        }
        this.tabOption = this.tabOption.bind(this);
        this.breadCrum = this.breadCrum.bind(this);
    }

    tabOption(option) {
        this.setState({ tabOption: option })
    }
    breadCrum(link) {
        this.setState({ tabs: link })
    }

    render() {
        return (
            <div>
                <div className="header">
                 <div>   <a href="/img"> <img src={arrow} alt="img"/></a></div>
                    <div> <div><span>BGA/<Link to="/BGA">{this.state.BreadQuotation}</Link>/{this.state.tabs}</span></div>
                   <div> <span><b> Pricing</b></span></div></div>
                </div>

                <Tab optionChange={this.tabOption} bread={this.breadCrum} />

                {
                    this.state.tabOption === "Itinerary" ? (
                        <div id="Itinerary" >
                            <Itinerary />
                        </div>) : ""
                }

                {
                    this.state.tabOption === "Create-Quotation" ? (
                        <div id="Quotation" >
                            <CreateQuotation />
                        </div>) : ""
                }

                    {
                        this.state.tabOption === "Pricing" ? (
                            <div id="Pricing" >
                                <Pricing />
                            </div>) : ""
                    }
                {
                    this.state.tabOption === "Offer" ? (
                        <div id="Offer" >
                            <Offer />
                        </div>) : ""
                }
            </div>

        )
    }
}
