import React, { Component } from 'react'
import CarChoosing from './CarChoosing'
import ChoosingCarComponent from './ChoosingCarComponent'

export default class CarComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center my-5 bg-warning text-white">Choose Cars</h1>
                {/* <ChoosingCarComponent/> */}
                <CarChoosing/>
            </div>
        )
    }
}
