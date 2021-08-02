import React, { Component } from "react";
// import LoadingImages from "./LoadingImages";
import LoadingModel from "./LoadingModel";
// import classes from "./StylingWithModule.module.css";

export default class GlassComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mb-5 bg-warning text-white">Choose Glasses</h1>
        <LoadingModel />
      </div>
    );
  }
}
