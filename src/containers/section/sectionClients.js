import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { } from '@fortawesome/free-regular-svg-icons';
import user1 from '../section/img/user1.png'
import user2 from '../section/img/user2.png'
const clientData = [
    {
        img: `${user1}`,
        name: `Regina Miles`,
        job: `Designer`
    },
    {
        img: `${user2}`,
        name: `Hose Alpachino`,
        job: `Designer`
    },
]

export default class SectionClients extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-10 col-lg-8 text-center text-light">
                        <h2 className="title">What Clients Say</h2>
                        <span className="pt-3 text-center  ">Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics.</span>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    {
                        clientData.map((value, index) => {
                            return <div className="offset-sm-1 col-sm-10 offset-md-0 col-md-6 col-lg-4  mb-4">
                                <div className="clientCard  ">
                                    <div ><img src={value.img} alt="" /></div>
                                    <div className="p-4 ">
                                        <h5>{value.name}</h5>
                                        <span >{value.job}</span>
                                        <div className="text-warning">
                                            <FontAwesomeIcon className="me-1" icon={faStar} />
                                            <FontAwesomeIcon className="me-1" icon={faStar} />
                                            <FontAwesomeIcon className="me-1" icon={faStar} />
                                            <FontAwesomeIcon className="me-1" icon={faStar} />
                                            <FontAwesomeIcon className="me-1 " color="gray" icon={faStar} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        )
    }
}
