import React from 'react';
import './SideNavbar.scss';
import { Link } from 'react-router-dom';


// import RouterComponent from '../../Router/Router'
import { elements } from '../../Common/Common';
import Quotation from '../../BGA/Quotation/Quotation';



class Side_navbar extends React.Component {


    togglePicked(n) {

        let nav = document.querySelectorAll("#picker ul li");
        var i;
        for (i = 0; i < nav.length; i++) {
            nav[i].classList.remove("sidenav-picked");
        }
        nav[n].classList.add("sidenav-picked");
    }

    render() {

        return (
            <div className="container-flex" id={this.props.sideToggle.sideToggle}>

                <div className={this.props.sideToggle.sideToggle} id="picker">
                    <ul>
                        {elements.map((value, index) => {

                            return (
                                <Link to={value.link_to} key={index}>    <li className={value.class_name} onClick={() => { this.togglePicked(index) }}>
                                    <div>
                                        <img src={value.icon} alt="alt" />
                                    </div>
                                    <span>{value.name}</span>
                                </li>
                                </Link>)
                        }
                        )
                        }
                    </ul>
                </div>


                <div className="container-flex-right-layout">
                    {/* <RouterComponent /> */}
                    <Quotation />
                </div>
            </div>
        )
    }
}
export default Side_navbar;