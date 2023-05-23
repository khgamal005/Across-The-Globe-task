import React, { Fragment, useContext } from 'react'
import dawnload1 from "./Assets/ScrollAnimation Task Assets/nexgtv-entertainment-mobile-app-development.png"
import dawnload2 from "./Assets/ScrollAnimation Task Assets/nexgtv-mobile-app-ui-design.png";
import commun from "./Assets/ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png";
import { ApiContext } from './Assets/Context';
export default function PageFour() {
    let { pageText } = useContext(ApiContext)
    return (
        <Fragment>
            <div id="four" className='page-four overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head pe-3 ms-auto  position-relative ' ref={pageText}>
                                <h3 className=' fw-bold'>25M+ Dawnloads</h3>
                                <p className='m-0 fs-5 text-start text-end'>on appstore & playstore</p>
                            </div>
                            <div className='footer p-5'>
                                <img src={commun} alt="" />
                                <h2 className='fw-bold fs-1'>ABC 123</h2>
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
                            <div className='position-relative d-flex align-items-center justify-content-center h-100'>
                                <img src={dawnload1} alt="" className='dawnload1' />
                                <img src={dawnload2} alt="" className='dawnload2' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
