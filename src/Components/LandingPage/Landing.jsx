import React, { Component } from "react";
import "./Landing.css";
import Terminal from "./Terminal/terminal";
import AboutUs from "./About/AboutUs";
import Clusters from "./Clusters/Clusters";
import ContactUs from "./ContactUs/ContactUs";
import Twitter from './Twitter/Twitter'
import {TwitterFollowButton} from 'react-twitter-embed'

class Landing extends Component {
  render() {
    return (
      <div className="landing_cover">
        <Terminal />
        <AboutUs />
        <Clusters />
        <div className="customTweetContainer" style={{display:'flex',justifyContent:'center'}}>
          <Twitter />
        </div>
        <ContactUs />
        <div className="Landing__address container">
          <br />
          <h4>DSC SASTRA - Powered By Google Developers</h4>
          Sastra Deemed to be University,
          <br />
          Thanjavur,
          <br />
          Tamil Nadu         
          <TwitterFollowButton
          screenName={'dsc_sastra'}
        />
        </div>
      </div>
    );
  }
}

export default Landing;
