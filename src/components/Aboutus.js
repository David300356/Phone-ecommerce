import React, { Component } from 'react'
import Title from './Title';
import logo2 from "../images/logo2.svg";

export default class Aboutus extends Component {
    render() {
        return (
            <>
            <Title title="Developer Profile"/>
            <div className="container">
                <div className="row">
                <div className="col-11 mx-auto col-lg-3 font-color-teal">
                
                    <h2>NAME:David Ochieng</h2>
                    <h2>EXPERT:React Developer</h2>
                    <h2>EMAIL:davidit698@gmail.com</h2>
                    <h2>TEL NO:0703525414</h2>
                    <h2>Logo:<img src={logo2} alt="phone"/></h2>

                </div>
                </div>
            </div>
            </>
        )
    }
}

