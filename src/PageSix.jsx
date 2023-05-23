import React, { Fragment } from 'react'
import erp from "./Assets/ScrollAnimation Task Assets/erp-app-development-service.png";
export default function PageSix() {
    return (
        <Fragment>
            <div id='six' className='page-six  overflow-hidden page'>
                <div className='row g-0 vh-100'>
                    <div className='col-5 position-relative'>
                        <div className='add h-100'>
                            <div className='head pe-3 ms-auto  position-relative '>
                                <p className='m-0 fs-5 text-start'>Developing ERP Solution for</p>
                                <h3 className='fw-bold'>Text Headline</h3>
                                <p className='m-0 fs-5 text-start text-end'>in furniture industry</p>
                            </div>
                            <div className='footer p-5'>
                                <h2 className='fw-bold fs-1'>ABC 678</h2>
                                <p className='mb-4 text-muted'>Best since 2017 <br />We offer wide range of<br />web development and app development</p>
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
                                <img src={erp} alt="" className='w-100 erp' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
