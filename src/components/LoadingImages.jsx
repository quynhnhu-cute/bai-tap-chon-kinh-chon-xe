// import React, { Component } from "react";

// export default class LoadingImages extends Component {
//   glassesList = [
//     {
//       id: 1,
//       price: 30,
//       name: "GUCCI G8850U",
//       url: "./glassesImage/v1.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 2,
//       price: 50,
//       name: "GUCCI G8759H",
//       url: "./glassesImage/v2.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 3,
//       price: 30,
//       name: "DIOR D6700HQ",
//       url: "./glassesImage/v3.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 4,
//       price: 70,
//       name: "DIOR D6005U",
//       url: "./glassesImage/v4.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 5,
//       price: 40,
//       name: "PRADA P8750",
//       url: "./glassesImage/v5.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 6,
//       price: 60,
//       name: "PRADA P9700",
//       url: "./glassesImage/v6.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 7,
//       price: 80,
//       name: "FENDI F8750",
//       url: "./glassesImage/v7.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 8,
//       price: 100,
//       name: "FENDI F8500",
//       url: "./glassesImage/v8.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//     {
//       id: 9,
//       price: 60,
//       name: "FENDI F4300",
//       url: "./glassesImage/v9.png",
//       desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
//     },
//   ];


//   state = {
//     backgroundImage: './glassesImage/v1.png'
//   }
//   tryGlasses = (id) => {
//     this.glassesList.forEach(element => {
      
//       if(element.id === id){
//         // const imageUrl = {element.id};
//         this.setState({backgroundImage : element.url});
      
//         document.querySelector("#glasses").style.backgroundImage = `url(${this.state.backgroundImage})`;
//       }
//     });
//   }
//   render() {
//       const imageStyle = {
//           width: '100px',
//           height: '30px'
//       }
//     return (
//       <div className="container-fluid">
//         <div className="row mx-5">
//           {this.glassesList.map((item, index) => {
//             return ( 
//               <div className="card my-3 mr-5" style={{ width: "100px" }} onClick={() => this.tryGlasses(item.id)} key={item.id}>
//                 <a href=""><img
//                   className="card-img-top" style={imageStyle}
//                   src={item.url} 
//                   alt="Glass photo"
//                 /></a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
