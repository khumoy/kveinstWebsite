import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        header: `Investment Trading`,
        title: `the quick fox jumps over the lazy dog`
    },
    {
        header: `Raising Funds`,
        title: `the quick fox jumps over the lazy dog`
    },
    {
        header: `Financial Analysis`,
        title: `the quick fox jumps over the lazy dog`
    },
    {
        header: `Taxation Planning`,
        title: `the quick fox jumps over the lazy dog`
    },
    {
        header: `Save money and time`,
        title: `the quick fox jumps over the lazy dog`
    },
    {
        header: `Outsourced Consulting`,
        title: `the quick fox jumps over the lazy dog`
    },
]
export default class SectionCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        data.map((value, index) => {
                            return <div className="offset-sm-1 col-sm-10 offset-md-0 col-md-6 col-lg-4 mb-4">
                                <div className="box text-light rounded">
                                    <FontAwesomeIcon color="blue" icon={faUsers} size="3x" />
                                    <div className="px-3 mt-4">
                                        <h5>{value.header}</h5>
                                        <span>the quick fox jumps over the lazy dog</span>
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
