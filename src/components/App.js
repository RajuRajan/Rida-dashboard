import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import Top_navbar from './Navbar/TopNavbar/TopNavbar';
import SideNavbar from './Navbar/SideNavbar/SideNavbar';


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      sideToggle: "sidenav-container"
    }
    this.sideNavToggle = this.sideNavToggle.bind(this);

  }
  sideNavToggle(value) {
    this.setState({ sideToggle: value })
  }
  render() {

    return (
      <div>
        <Router>
          <Top_navbar sideNavToggle={this.sideNavToggle} NavState={this.state} />
          <SideNavbar sideToggle={this.state}/>
        </Router>
      </div>
    );
  }
}

export default App;
