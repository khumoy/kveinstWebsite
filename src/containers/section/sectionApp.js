import React, { Component } from 'react';
import '../section/sectionApp.css';

export default class SectionApp extends Component {
    render() {
        return (
            <div className="container text-light d-flex flex-column text-center  py-5">
                <div className="row justify-content-center mb-5 py-5">
                    <div className="col-md-10 col-lg-8">
                        <h1 className="title" >Creating a Beautifull <br />  & Usefull Solutitons</h1>
                        <p className="pt-3 text-center  ">We know how large objects will act, but things on a <br />small scale just do not act that way.</p>
                        <div className="py-5">
                            <button className="btn btn-primary rounded-pill py-2 px-3 me-3">
                                Get Quote Now
                            </button>
                            <button className="btn text-light  rounded-pill py-2 px-3 border-light">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    <div className="col-md-10 col-lg-8">
                        <h2 className="title">Better Strategy With<br /> Quality Business  </h2>
                        <span className="pt-3 text-center  ">Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics.</span>

                    </div>
                </div>
            </div>
        )
    }
}
