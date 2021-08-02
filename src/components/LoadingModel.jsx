import React, { Component } from "react";

export default class LoadingModel extends Component {
  glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    backgroundImage: "./glassesImage/v1.png",
    name: "GUCCI G8850U",
    description: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
  };
  tryGlasses = (event, item) => {
    event.preventDefault();
    this.setState({ backgroundImage: item.url, name: item.name, description: item.desc });
    // console.log(this.state);
  };
  render() {
    const imageStyle = {
      // width: "200px",
      height: "350px",
      position: "relative",
    };

    const glassStyle = {
      width: "100px",
      height: "30px",
    };

    const infoStyle = {
      position: "absolute",
      top: "66%",
      // right: "27%",
      opacity: "0.5",
      width: "100%",
      backgroundColor: "yellow"
    }

    const modelStyle = {
      backgroundImage: `url(${this.state.backgroundImage})`,
      width: "150px",
      height: "50px",
      backgroundSize: "150px 40px",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: "26%",
      right: "41%",
      opacity: "0.7",
    };
    return (
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-3"></div>
          <div className="col-4">
            {/* <img src="./glassesImage/model.jpg" alt="" style={imageStyle} />
            <div id="glasses" style={modelStyle}></div> */}
            <div className="card mr-5" style={{ width: "18rem", height:"350px"}}>
              <img src="./glassesImage/model.jpg" className="card-img-top" alt="..." style={imageStyle}/>
              <div className="card-body " style={infoStyle}>
                <h5 className="card-title text-primary">{this.state.name}</h5>
                <p className="card-text text-danger">
                 {this.state.description}
                </p>
              </div>
            </div>
            <div id="glasses" style={modelStyle}></div>
          </div>
          <div className="col-3">
            {/* <img src="./glassesImage/model.jpg" alt="" style={imageStyle} /> */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="./glassesImage/model.jpg" className="card-img-top" alt="..." style={imageStyle}/>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row mx-5">
          {this.glassesList.map((item, index) => {
            return (
              <div
                className="card my-3 mr-5"
                style={{ width: "100px" }}
                onClick={(e) => this.tryGlasses(e, item)}
                key={item.id}
              >
                <a href="">
                  <img
                    className="card-img-top"
                    style={glassStyle}
                    src={item.url}
                    alt="Glass photo"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
