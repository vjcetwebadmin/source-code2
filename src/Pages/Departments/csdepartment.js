import React, { Component } from "react";
import "./csdepartment.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOne from "../../Components/Texts/BodyOne";
import ImageOne from "../../Components/Images/ImageOne";
import SideNav from "../../DeptPageContainers/CsDept/SideNav";





class CsDepartment extends Component {
  state = { showMenu: false };

  openMenu = () => {
    console.log("opening Menu");
    this.setState({ showMenu: true });
  };
  closeMenu = () => {
    this.setState({ showMenu: false });
  };
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };

  HomePageCarouselOne = {
    instanceID: "HomePageCarouselOne"
  };

  HomePageCarouselTwo = {
    instanceID: "HomePageCarouselTwo"
  };

  HomePageCarouselThree = {
    instanceID: "HomePageCarouselThree"
  };

  HomePageDepartmentSection = {
    instanceID: "HomePageDepartmentSection"
  };

  HomePageFacilitiesSection = {
    instanceID: "HomePageFacilitiesSection"
  };

  HomePageVisionSection = {
    instanceID: "HomePageVisionSection"
  };

  HomePageCarouselFour = {
    instanceID: "HomePageCarouselFour"
  };

  HomePageFooter = {
    instanceID: "HomePageFooter"
  };
  HeadingSectionTitle = {
    instanceID: "Headingtext",
    title: "COMPUTER SCIENCE ENGINEERING"
  };

  HeadingSectionDescription = {
    instanceID: "HeadingSectionDescription",
    title: "Debugging the possibilities through intelligence"
  };
  CseImg = {
    instanceID: "CseImg",
    image: "DepBannerImages/cs.jpg",
    width: "100%"
  };

  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  ProfileDescription = {
    instanceID: "ProfileDescription",
    title:
      "The Department of Computer Science is envisioned to prepare competent, creative and innovative Computer Scientists who would be capable of meeting the challenges posed by these burgeoning knowledge disciplines.The Department of Computer Science and Engineering (CSE) was founded in 2001. B.Tech Computer Science Engineering program is accredited by NBA on June 2018 for three years.The annual intake of the B. Tech. program is 120 students and that of the M. Tech. is 24."
  };

  LearnmoreHeading = {
    instanceID: "LearnmoreHeading",
    title: "Learn More About CS Department"
  };
  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <div className="CsHeadingSection">
          <HeadingOne data={this.HeadingSectionTitle} />
          {/*<BodyOne data={this.HeadingSectionDescription} />*/}
          <h2>Debugging the possibilities through intelligence</h2>
          <ImageOne data={this.CseImg} /> 
             
        </div>
        <SideNav />
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default CsDepartment;
