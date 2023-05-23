import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export const Left = () => {
    return (
        <div className='bg-primary p-8 w-full flex items-end'>
            <div className='w-full px-8 text-xl text-white flex flex-col gap-6'>
                <h2 className='text-6xl font-bold'>ABC 678</h2>
                <p className='tracking-wide leading-9 mb-6	'>
                    Best Since 2017 <br />
                    We Offer Wider range of <br />
                    Web development and app development
                </p>
                <div className='flex justify-between'>
                    <p className='flex justify-between items-center gap-2 '>
                        View Case Study
                        <BsArrowRight /></p>

                    <p className='tracking-[8px]	' >SKIP </p>
                </div>
            </div>
        </div>
    )
}
