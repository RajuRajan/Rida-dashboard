import React, { Component } from 'react'
import './Dropdown.scss';
import avatar from '../../../../images/avatar.png'

export default class Dropdown extends Component {
  dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
    render() {
        return (
            <div>      
              <button onClick={()=>{this.dropDown()}}>
                <div className="dropdown-content-container">
               <div className="profile-image"> <img src={avatar} /></div>
               <div className="profile-name">
                 <div className="name"> <p>joe-smith</p></div>
                 <div className="caption"><p>Opearation Manager</p></div> 
               </div>
               </div>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            
        )
    }
}
