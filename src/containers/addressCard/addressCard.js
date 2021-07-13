import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationArrow, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import './adress.css'

const phone = <FontAwesomeIcon size="3x" className="text-primary icon" icon={faPhone} />;
const location = <FontAwesomeIcon size="3x" className="text-primary icon" icon={faLocationArrow} />;
const message = <FontAwesomeIcon size="3x" className="text-primary icon" icon={faEnvelope} />;


const adress = [
    {
        icon: phone,

    },
    {
        icon: location,

    },
    {
        icon: message,

    },

]
export default class AddressCard extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row justify-content-center p-5">
                    <div className="col-md-10 col-lg-8 text-center text-light">
                        <h2 className="title">Get In Touch</h2>
                        <span className="pt-3 text-center  ">Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics.</span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        adress.map((value, index) => {
                            return <div className="col-sm-8 col-md-5 col-lg-4 mb-4">
                                <div className="adresCard  ">
                                    {value.icon}
                                    <a className="mt-4 " href="#">georgia.young@example.com</a>
                                    <a className="mt-2" href="#">georgia.young@ple.com</a>
                                    <span>Get Support</span>
                                    <button className="btn  ">
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="container-fluid footer pt-4">
                    <h3> <a href="#">BrandName</a></h3>
                    <div className="social text-primary">
                        <FontAwesomeIcon className=" mx-2" size="1x" icon={faFacebook} />
                        <FontAwesomeIcon className=" mx-2" size="1x" icon={faInstagram} />
                        <FontAwesomeIcon className=" mx-2" size="1x" icon={faTwitter} />
                    </div>
                </div>
            </div>
        )
    }
}
