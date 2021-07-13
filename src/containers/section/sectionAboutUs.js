import React, { Component } from 'react';
import videoImg from '../section/img/videoimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

export default class SectionAboutUs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-10 col-lg-8 text-center text-light">
                        <h2 className="title">About Us</h2>
                        <span className="pt-3 text-center  ">Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics.</span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className=" col-sm-10  col-md-6 col-lg-5">
                        <div className="videos">
                            <img className="w-100" src={videoImg} alt="" />
                            <button className="btn btn-info"><FontAwesomeIcon icon={faPlay} /></button>
                        </div>
                    </div>
                    <div className=" col-sm-10  col-md-6 col-lg-5 ">
                        <div className="aboutUs text-light w-100 ">
                            <h4>Most trusted in our field</h4>
                            <span>Most calendars are designed for teams. Slate is designed for
                                freelancers who want a simple way to plan their schedule.</span>
                            <div className="d-flex  p-3">
                                <FontAwesomeIcon className="text-info" size="2x" icon={faComments} />
                                <div className="px-2">
                                    <p className="py-0 my-0">the quick fox jumps over the lazy dog</p>
                                    <span>Things on a very small scale ...</span>
                                </div>
                            </div>
                            <div className="d-flex p-3 ">
                                <FontAwesomeIcon className="text-info" size="2x" icon={faQuoteRight} />
                                <div className="px-2">
                                    <p className="py-0 my-0">the quick fox jumps over the lazy dog</p>
                                    <span>Things on a very small scale ...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
