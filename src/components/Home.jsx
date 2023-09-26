import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from '../assets/banner1.png'

const Home = () => {
    return (
        <div className='bg-neutralSilver' id="home">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full nx-auto'>
                <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                            Lorem ipsum, sit <span className='text-brandPrimary leading-snug'>consec adipisicing</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Officiis, eos.Nisi quaerat ex sint id</p>
                            <button className='btn-primary mb-9'>Register</button>
                        </div>
                    </div>
                    <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                            Lorem ipsum, sit <span className='text-brandPrimary leading-snug'>consec adipisicing</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Officiis, eos.Nisi quaerat ex sint id</p>
                            <button className='btn-primary mb-9'>Register</button>
                        </div>
                    </div>
                    <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                            Lorem ipsum, sit <span className='text-brandPrimary leading-snug'>consec adipisicing</span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Officiis, eos.Nisi quaerat ex sint id</p>
                            <button className='btn-primary mb-9'>Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

//Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officiis, eos.Nisi quaerat ex sint id! Facilis totam iste, eaque hic optio nulla.Exercitationem possimus quidem magni mollitia tempore! Veniam, modi.

export default Home