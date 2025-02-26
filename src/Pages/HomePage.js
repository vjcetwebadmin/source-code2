import React, { Component } from "react";
import "./HomePage.css";
import DepartmentSection from "../HomePageContainers/DepartmentSection";
import FacilitiesSection from "../HomePageContainers/FacilitiesSection";
// import CarouselOne from "../HomePageContainers/CarouselOne";
import CarouselTwo from "../HomePageContainers/CarouselTwo";
//import CarouselThree from "../HomePageContainers/CarouselThree";
import CarouselFour from "../HomePageContainers/CarouselFour";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import Promo from "../Components/Video/promo";
import CarouselFive from "../HomePageContainers/CarouselFive";
import NewsSection from "../HomePageContainers/NewsSection";
//import HomepageActivities from "../HomePageContainers/HomepageActivities";
class HomePage extends Component {
  state = { showMenu: false };

  openMenu = () => {
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

  HomePageNewsSection = {
    instanceID: "HomePageNewsSection"
  }

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
  HomepageActivities = {
    instanceID: "HomepageActivities"
  };

  HomePageFooter = {
    instanceID: "HomePageFooter"
  };

  render() {
    return (
      <div className="HomePage">
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <Promo />
        {/* <CarouselOne data={this.HomePageCarouselOne} /> */}
        <CarouselTwo data={this.HomePageCarouselTwo} />
        {/*<CarouselThree data={this.HomePageCarouselThree} />*/}
        <NewsSection data={this.HomePageNewsSection} />
        <DepartmentSection data={this.HomePageDepartmentSection} />
        <FacilitiesSection data={this.HomePageFacilitiesSection} />
        <CarouselFive data={this.HomepageActivities} />
        {/* <VisionSection data={this.HomePageFacilitiesSection} /> */}
        {/* <HomepageActivities data={this.HomepageActivities}/> */}
        <CarouselFour data={this.HomePageCarouselFour} />
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

export default HomePage;

/*
  <DepartmentSection />
        <FacilitiesSection />
        <VisionSection />
        <CarouselOne/>
        <CarouselTwo/>
        <CarouselThree/>
        <CarouselFour/>
        <Footer />
*/
