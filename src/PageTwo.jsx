import React, { Fragment } from 'react'
import nasa from "./Assets/ScrollAnimation Task Assets/nasa-mobile-app.png";
import fitness from "./Assets/ScrollAnimation Task Assets/measure-total-body-weight-through-fitness-app.png";
import counter from "./Assets/ScrollAnimation Task Assets/nasa-fitness-tracking-mobile-app.png";
import { ApiContext } from './Assets/Context';
import { useContext } from 'react';
export default function PageTwo() {
    let { pageText1 } = useContext(ApiContext)
    // const one = gsap.timeline();
    // const page = useRef(null);
    // const pageText = useRef(null);
    // useEffect(() => {
    //     one.from(page.current, {
    //         duration: .6,
    //         skewX: 10,
    //         x: -100,
    //         opacity: 0,
    //         ease: Power4.easeOut
    //     }, "-=3.5");
    //     one.from(pageText.current, {
    //         opacity: 1,
    //         y: 20,
    //         ease: Power4.easeOut,
    //     })
    // }, [])
    return (
        <Fragment>
            <div id="two" className='page-two overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head ms-auto  position-relative ' ref={pageText1}>
                                <p className=' m-0  text-start'>Powered By Advance</p>
                                <img src={nasa} alt="" className='' />
                                <p className='m-0 fs-5 text-start text-end '>Algorithms</p>
                            </div>
                            <div className='footer p-5'>
                                <h2 className='fw-bold fs-1'>ABC 345</h2>
                                <p className='mb-4 text-muted'>We are the best <br /> web development company <br /> in the world</p>
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
                                <img src={counter} alt="" className='position-absolute fitnsess' />
                                <img src={fitness} alt="" className='position-absolute counter' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
