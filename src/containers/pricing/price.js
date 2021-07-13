import { faCheck, faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import '../pricing/price.css'

const priceData = [
    {
        head: `FREE`,
        title: `Organize across all apps by hand`,
        cash: `0`,

    },
    {
        head: `SILVER`,
        title: `Organize across all apps by hand`,
        cash: `9.99`,

    },
    {
        head: `GOLD`,
        title: `Organize across all apps by hand`,
        cash: `19,99`,

    },
]
export default class Price extends Component {
    render() {
        return (
            <div className="container p-5">
                <div className="row justify-content-center p-5">
                    <div className="col-md-10 col-lg-8 text-center text-light">
                        <h2 className="title">Pricing</h2>
                        <span className="pt-3 text-center  ">Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics.</span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        priceData.map((value, index) => {
                            return <div className="col-sm-10 col-md-6 col-lg-4 mb-4">
                                <div className="pricing bg-light b px-3 py-5 text-center rounded shadow ">
                                    <h3 className="mt-3 fw-bold">{value.head}</h3>
                                    <p>{value.title}</p>
                                    <div className="text-primary py-3 d-flex justify-content-center align-items-center ">
                                        <h2 className="pt-2 me-2" > {value.cash} </h2>
                                        <FontAwesomeIcon size="2x " icon={faDollarSign} />
                                    </div>
                                    <p className="text-primary">Per Month</p>
                                    <button className="btn w-75 btn-primary mt-3 px-5 py-2 rounded">
                                        Try for free
                                    </button>

                                    <ul className="text-start pb-0 mb-0 pt-4">
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="green" /> Unlimited product updates</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="green" /> Unlimited product updates</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="green" /> Unlimited product updates</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="gray" /> 1GB Cloud storage</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="gray" /> Email and community support</li>
                                    </ul>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
