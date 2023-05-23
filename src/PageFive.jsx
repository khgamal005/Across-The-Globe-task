import React, { Fragment } from 'react'

import Headline1 from "./Assets/ScrollAnimation Task Assets/developers-for-social-media-app.png";
import Headline2 from "./Assets/ScrollAnimation Task Assets/social-networking-app-case-study.png";
import Headline3 from "./Assets/ScrollAnimation Task Assets/karavan-social-networking-app-screen-2.png";
import Headline4 from "./Assets/ScrollAnimation Task Assets/karavan-social-networking-app-screen.png";
import Headline5 from "./Assets/ScrollAnimation Task Assets/karavan_2.png";
export default function PageFive() {
    return (
        <Fragment>
            <div id="five" className='page-five  overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head pe-3 ms-auto  position-relative '>
                                <p className=' m-0 fs-5 text-start'>Text Headline</p>
                                <h3 className='fw-bold'>Text Headline</h3>
                                <p className='m-0 fs-5 text-start text-end'>Footer Headline</p>
                            </div>
                            <div className='footer p-5'>
                                <h2 className='fw-bold fs-1'>ABC 567</h2>
                                <p className='mb-4 text-muted'>We are the best AR <br /> web development company <br /> in the world</p>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-muted'>View Case Study <i class="ms-2 fa-solid fa-arrow-right"></i></p>
                                    <p className='ms-auto text-muted'>S K I P </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='content h-100'>
                            <div className='position-relative'>
                                <img src={Headline4} alt="" className='position-absolute f-img-one' />
                                <img src={Headline2} alt="" className='position-absolute f-img-two' />
                                <img src={Headline1} alt="" className='position-absolute f-img-three' />
                                <img src={Headline5} alt="" className='position-absolute f-img-four' />
                                <img src={Headline3} alt="" className='position-absolute f-img-five' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
