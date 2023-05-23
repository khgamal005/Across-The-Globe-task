import React, { Fragment, useContext } from 'react'
import pizza from "./Assets/ScrollAnimation Task Assets/pizza_box.png";
import mob1 from "./Assets/ScrollAnimation Task Assets/domi-img1.png";
import mob2 from "./Assets/ScrollAnimation Task Assets/ux-strategy-for-mobile-app-devlopment.png";
import beard1 from "./Assets/ScrollAnimation Task Assets/dominos-bread.png";
import beard2 from "./Assets/ScrollAnimation Task Assets/dominos-bread1.png";
import { ApiContext } from './Assets/Context';
export default function PageOne() {
    let { pageText, Image1 } = useContext(ApiContext)
    return (
        <Fragment>
            <div id="one" className='page-one  overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head pe-3 ms-auto  position-relative overflow-hidden' ref={pageText}>
                                <p className='m-0 fs-5 text-start'>Redefining</p>
                                <h3 className='fw-bold'>UX Strategy</h3>
                                <p className='m-0 fs-5 text-start text-end'>and UI design</p>
                            </div>
                            <div className='footer p-5'>
                                <h2 className='fw-bold fs-1'>ABC 456</h2>
                                <p className='mb-4 text-muted'>We are the best <br /> web development company <br /> in the world</p>
                                <div className='d-flex justify-content-between'>
                                    <p className='text-muted'>View Case Study <i class="ms-2 fa-solid fa-arrow-right"></i></p>
                                    <p className='ms-auto text-muted'>S K I P </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='content h-100'>
                            <div className='position-relative' >
                                <img src={pizza} alt="" className='position-absolute img-one' ref={Image1} />
                                <img src={mob1} alt="" className='position-absolute img-two' />
                                <img src={mob2} alt="" className='position-absolute img-three' />
                                <img src={beard1} alt="" className='position-absolute img-four' />
                                <img src={beard2} alt="" className='position-absolute img-five' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
