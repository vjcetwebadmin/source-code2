import React, { Component } from "react";
import "../../Components/SideNav.css";
import Profile from "./profile";
import Vision from "./vision";
import PEO from "./peo";
import Program from "./program";
import Library from "./library";
import Association from "./association";
import Outreach from "./outreach"
import FacultyNav from "./facultynav";
import ProfBodies from "./Profbodies";
import Cehonours from "./LocalContainers/cehonours";

class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showPeo: false,
    showProgram: false,
    showLib: false,
    showAss: false,
    showRes: false,
    showfac: false,
    showOut: false,
    showProf: false



  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false,
      showOut: false,
      showProf: false

    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false,
      showOut: false,
      showProf: false
    });
  };
  onClickPeo = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: true,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false,
      showOut: false,
      showProf: false
    });
  };
  onClickProg = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: true,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false,
      showOut: false,
      showProf: false
    });
  };
  onClickLib = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: true,
      showAss: false,
      showRes: false,
      showfac: false,
      showOut: false,
      showProf: false
    });
  };
  onClickAss = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: true,
      showRes: false,
      showfac: false,
      showOut: false,
      showProf: false
    });
  };
  onClickRes = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: true,
      showfac: false,
      showOut: false,
      showProf: false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: true,
      showOut: false,
      showProf: false
    });
  };
  onClickOut = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showOut: true,
      showProf: false
    });
  };
  onClickProf = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showOut: false,
      showProf: true
    });

  };
  render() {
    const { profile, vision, peo, program, faculty, library, assosn, result, outreach, profbody } = this.props.data;
    return (
      <React.Fragment>

        <div class="Deptcontent">
          <div class="sidenav">
            <input

              value="Profile"
              class="button"
              onClick={this.onClickP}
            />
            <input

              value="Vision"
              class="button"
              onClick={this.onClickV}
            />
            <input

              value="PEO & PSO"
              class="button"
              onClick={this.onClickPeo}
            />
            <input

              value="Program"
              class="button"
              onClick={this.onClickProg}
            />
            <input

              value="Faculty"
              class="button"
              onClick={this.onClickFac}
            />
            <input

              value="Library"
              class="button"
              onClick={this.onClickLib}
            />
            <input

              value="Association"
              class="button"
              onClick={this.onClickAss}
            />
            <input

              value="Honours"
              class="button"
              onClick={this.onClickRes}
            />
            <input
              value="Outreach Program"
              class="button"
              onClick={this.onClickOut}
            />
            <input
              value="Professional Bodies"
              class="button"
              onClick={this.onClickProf}
            />

          </div>
          <div class="dropdownD">
            <button class="button">Menu</button>
            <div class="dropdownD-content">
              <input

                value="Profile"
                class="button"
                onClick={this.onClickP}
              />
              <input

                value="Vision"
                class="button"
                onClick={this.onClickV}
              />
              <input

                value="PEO & PSO"
                class="button"
                onClick={this.onClickPeo}
              />
              <input

                value="Program"
                class="button"
                onClick={this.onClickProg}
              />
              <input

                value="Faculty"
                class="button"
                onClick={this.onClickFac}
              />
              <input

                value="Library"
                class="button"
                onClick={this.onClickLib}
              />
              <input

                value="Association"
                class="button"
                onClick={this.onClickAss}
              />
              <input

                value="Result"
                class="button"
                onClick={this.onClickRes}
              />
              <input
                value="Outreach Program"
                class="button"
                onClick={this.onClickOut}
              />
              <input
                value="Professional Bodies"
                class="button"
                onClick={this.onClickProf}
              />
            </div>
          </div>
          <div class="content">
            {this.state.showProfile ? <Profile data={profile} /> : null}
            {this.state.showVision ? <Vision data={vision} /> : null}
            {this.state.showPeo ? <PEO data={peo} /> : null}
            {this.state.showProgram ? <Program data={program} /> : null}
            {this.state.showfac ? <FacultyNav data={faculty} /> : null}
            {this.state.showLib ? <Library data={library} /> : null}
            {this.state.showAss ? <Association data={assosn} /> : null}
            {this.state.showRes ? <Cehonours data={result} /> : null}
            {this.state.showOut ? <Outreach data={outreach} /> : null}
            {this.state.showProf ? <ProfBodies data={profbody} /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
