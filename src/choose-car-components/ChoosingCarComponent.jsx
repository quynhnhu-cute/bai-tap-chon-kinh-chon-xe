import React, { Component } from "react";
import { MockUpWheel } from "./MockupCar";
import { MockupCar } from "./MockupCar";

export default class ChoosingCarComponent extends Component {
  carObject = MockupCar[0];
  state = {
    // carImage: "./car-images/images-black/images-black-1/civic-1.jpg",
    car: this.carObject,
  };

  changeCar = (event, carInput) => {
    event.preventDefault();
    this.setState({ car: carInput });
  };
  render() {
    const carStyle = {
      backgroundSize: "100px 500px",
      backgroundRepeat: "no-repeat",
      width: "650px",
      height: "350px",
    };

    const iconStyle = {
      width: "50px",
      height: "50px",
    };

    const borderStyle = {
      color: "black",
    };

    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-7">
            <img src={this.state.car.srcImg} alt="" style={carStyle} />
            <div className="card mt-5" style={{ width: "100%" }}>
              <div className="card-header">Description</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Color</div><div>{this.state.car.color}</div></li>
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Price</div><div>{this.state.car.price}</div></li>
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Engine Type</div><div>{this.state.car.engineType}</div></li>
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Displacement</div><div>{this.state.car.displacement}</div></li>
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Horsepower (SAE net)</div><div>{this.state.car.horsepower}</div></li>
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Torque</div><div>{this.state.car.torque}</div></li>
                <li className="list-group-item" style={{display: "flex"}}><div style={{width: "50%"}}>Redline</div><div>{this.state.car.redline}</div></li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="card" style={{ width: "25rem" }}>
              <div className="card-header text-primary">Exterior Color</div>
              <ul className="list-group list-group-flush">
                {MockupCar.map((item, index) => {
                  return (
                    <a
                      key={item.id}
                      href=""
                      style={{ textDecoration: "none" }}
                      onClick={(e) => this.changeCar(e, item)}
                    >
                      <div className="row" style={borderStyle}>
                        <div className="col-2 align-items-center pl-4 py-2">
                          <img src={item.img} alt="" style={iconStyle} />
                        </div>
                        <div className="col-10">
                          <li className="list-group-item">
                            <div
                              style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                              {item.title}
                            </div>
                            <div>{item.type}</div>
                          </li>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </ul>
            </div>
            <div className="card mt-5" style={{ width: "25rem" }}>
              <div className="card-header text-primary">Wheels</div>
              <ul className="list-group list-group-flush">
                {MockUpWheel.map((item, index) => {
                  return (
                    <a href="" style={{ textDecoration: "none" }} key={item.id}>
                      <div className="row" style={borderStyle}>
                        <div className="col-2 align-items-center pl-4 py-2">
                          <img src={item.srcImg} alt="" style={iconStyle} />
                        </div>
                        <div className="col-10">
                          <li className="list-group-item">
                            <div
                              style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                              {item.nameWheel}
                            </div>
                          </li>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
