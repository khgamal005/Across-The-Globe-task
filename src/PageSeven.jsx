import React, { Fragment } from 'react'
import enterprenuer from "./Assets/ScrollAnimation Task Assets/mobile-app-of-the-year-by-entrepreneur.png";
import millto1 from "./Assets/ScrollAnimation Task Assets/melltoo-img1.png";
import millto2 from "./Assets/ScrollAnimation Task Assets/melltoo-img2.png";
export default function PageSeven() {
    return (
        <Fragment>
            <div id="seven" className='page-seven overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head pe-3 ms-auto  position-relative '>
                                <p className=' m-0 fs-5 text-start'>Biggest Classifieds</p>
                                <h3 className='fw-bold'>East Asia</h3>
                                <p className='m-0 fs-5 text-start text-end'>Countries</p>
                            </div>
                            <div className='footer p-5'>
                                <img src={enterprenuer} alt="" />
                                <h2 className='fw-bold fs-1'>ABC 23478</h2>
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
                                <img src={millto2} alt="" className="position-absolute millto2" />
                                <img src={millto1} alt="" className="position-absolute millto1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
