import '../header/headerApp.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons';


export default class HeaderApp extends Component {
    render() {
        return (
            <div className="container header">
                <h3> <a href="#">BrandName</a></h3>
                <div className=" header-nav d-flex align-items-center justify-content-between d-none  d-lg-flex">
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                </div>
                <p className="d-flex align-items-center text-primary ">Login  <button className="btn btn-primary ms-2">Become a member <FontAwesomeIcon icon={'facebook'} /></button></p>

            </div>
        )
    }
}
