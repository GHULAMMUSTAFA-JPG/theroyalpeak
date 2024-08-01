'use client'
import React from "react";

import CountUp from 'react-countup';

export default function Counter(){
    return(
        <>
        <div className="row">
            <div className="col-4 py-3">
                <div className="counter-box text-center">
                    <h1 className="mb-0 text-white fw-bold"><CountUp start={0} end={58}  className="counter-value"/>+</h1>
                    <h6 className="counter-head text-white fs-5 fw-semibold mb-0">Investments</h6>
                </div>
            </div>

            <div className="col-4 py-3">
                <div className="counter-box text-center">
                    <h1 className="mb-0 text-white fw-bold"><CountUp start={0} end={7}  className="counter-value"/>+</h1>
                    <h6 className="counter-head text-white fs-5 fw-semibold mb-0">Awards</h6>
                </div>
            </div>

            <div className="col-4 py-3">
                <div className="counter-box text-center">
                    <h1 className="mb-0 text-white fw-bold"><CountUp start={0} end={23}  className="counter-value"/>+</h1>
                    <h6 className="counter-head text-white fs-5 fw-semibold mb-0">Clients</h6>
                </div>
            </div>
        </div>
        </>
    )
}