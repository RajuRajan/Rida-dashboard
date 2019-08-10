import React from 'react';
import './TopNavbar.scss';

import bar from '../../../images/bar.svg';
import logo from '../../../images/logo.png';
import message from '../../../images/message.svg';
import addcity from '../../../images/plus.svg';
import bell from '../../../images/bell.svg';
import location from '../../../images/location.svg';

import Dropdown from '../TopNavbar/Dropdown/Dropdown'


class TopNavbar extends React.Component {
    toggleSidenav() {
        if (this.props.NavState.sideToggle === "sidenav-container")
            this.props.sideNavToggle("sidenav-container-toggled")
        else
            this.props.sideNavToggle("sidenav-container")
    }

    render() {
        return (
            <div>
                <div className="topnav-container">
                    <div className="topnav-container-left-container">

                        <div className="bar__img" onClick={()=>{this.toggleSidenav()}}>
                            <img alt="alt" src={bar} />
                        </div>
                        <div className="logo__img">
                            <img alt="alt" src={logo} />
                        </div>

                        <div className="add-new-city">
                            <div className="add-city-img"><img src={addcity} /></div>
                            <div className="add-city-caption">Add new City</div>
                        </div>
                        <div><a>Report Bug</a> </div>

                    </div>
                    <div className="topnav-container-right-container">
                                <div className="message-img">
                                    <a href="/message">  <img alt="alt" src={message} /></a>
                                </div>

                                <div className="notification-container">
                                <a href="/notification" className="notification">
                                        <span><img alt="alt" src={bell} /></span>
                                        <span className="badge">3</span>
                                    </a>
                                </div>


                                <div className="location">
                                <div> <img alt="alt" src={location} /></div>
                                <div><span>Thailand</span></div>
                                </div>

                                <div className="dropdown">
                                    <Dropdown/>    
                                </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default TopNavbar;