import React, { Fragment } from 'react'
import Blockchain1 from "./Assets/ScrollAnimation Task Assets/veme-app-ui-design.png";
import Blockchain2 from "./Assets/ScrollAnimation Task Assets/veme-blockchain-app-developed.png";
export default function PageThree() {
    return (
        <Fragment>

            <div id="three" className='page-three overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head pe-3 ms-auto  position-relative '>
                                <p className=' m-0 fs-5 text-start'>The Next Big</p>
                                <h3 className='fw-bold'>Blockchain</h3>
                                <p className='m-0 fs-5 text-start text-end'>Revolution</p>
                            </div>
                            <div className='footer p-5'>
                                <h2 className='fw-bold fs-1'>ABC 234</h2>
                                <p className='mb-5 text-muted'>We are the best web development company <br /> in the world</p>
                                <div className='d-flex justify-content-between '>
                                    <p className='text-muted'>Coming Soon</p>
                                    <p className='ms-auto text-muted'>S K I P </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='content h-100'>
                            <div className='position-relative'>
                                <img src={Blockchain1} alt="" className='position-absolute Blockchain1' />
                                <img src={Blockchain2} alt="" className='position-absolute Blockchain2' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
