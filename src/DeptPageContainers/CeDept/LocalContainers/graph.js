import React, { Component } from "react";
import "./Nav.css";
/* import Graph15 from "./graph2015";
import Graph14 from "./graph2014";
import Graph13 from "./graph2013";
import Graph12 from "./graph2012";
import Graph11 from "./graph2011";
import Graph10 from "./graph2010"; */
import Cehonours from "./cehonours";
import HeadingOne from "../../../Components/Texts/HeadingOne";
class CeGraph extends Component {
  state = {
    show15: false,
    show14: false,
    show13: false,
    show12: false,
    show11: false,
    show10: false,
    showhon: true
  };
  onClick15 = () => {
    this.setState({
      show15: true,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: false,
      showhon: false
    });
  };
  onClick14 = () => {
    this.setState({
      show15: false,
      show14: true,
      show13: false,
      show12: false,
      show11: false,
      show10: false,
      showhon: false
    });
  };

  onClick13 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: true,
      show12: false,
      show11: false,
      show10: false,
      showhon: false
    });
  };
  onClick12 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: true,
      show11: false,
      show10: false,
      showhon: false
    });
  };
  onClick11 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: true,
      show10: false,
      showhon: false
    });
  };
  onClick10 = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: true,
      showhon: false
    });
  };
  onClickHon = () => {
    this.setState({
      show15: false,
      show14: false,
      show13: false,
      show12: false,
      show11: false,
      show10: false,
      showhon: true
    });
  };
  Heading = {
    instanceID: "Heading",
    //title: "RESULT & honourS"
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div class="graphContent">
            <div>
              <HeadingOne data={this.Heading} />
              {/* <input
                type="button"
                value="2015-2019"
                class="buttongraph"
                onClick={this.onClick15}
              />
              <input
                type="button"
                value="2014-2018"
                class="buttongraph"
                onClick={this.onClick14}
              />
              <input
                type="button"
                value="2013-2017"
                class="buttongraph"
                onClick={this.onClick13}
              />
              <input
                type="button"
                value="2012-2016"
                class="buttongraph"
                onClick={this.onClick12}
              />
              <input
                type="button"
                value="2011-2015"
                class="buttongraph"
                onClick={this.onClick11}
              />
              <input
                type="button"
                value="2010-2014"
                class="buttongraph"
                onClick={this.onClick10}
              />
              <input
                type="button"
                value="Roll of honours"
                class="buttongraph"
                onClick={this.onClickHon}
              /> */}
            </div>
            {/* {this.state.show15 ? <Graph15 /> : null}
            {this.state.show14 ? <Graph14 /> : null}
            {this.state.show13 ? <Graph13 /> : null}
            {this.state.show12 ? <Graph12 /> : null}
            {this.state.show11 ? <Graph11 /> : null}
            {this.state.show10 ? <Graph10 /> : null} */}
            {this.state.showhon ? <Cehonours /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CeGraph;
