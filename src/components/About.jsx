import React from 'react'
import Frame35 from '../assets/Frame 35.png'

function About() {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={Frame35} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda odio veniam officia quisquam architecto numquam perspiciatis vitae modi.
                            Natus repellat totam quae nostrum autem temporibus sed deleniti voluptatem exercitationem! Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button className='btn-primary'>Veja Mais!</button>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-14 mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Lorem ipsum dolor sit <br />
                            <span className='text-brandPrimary'>Lorem ipsum dolor sit amet</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumen</p>
                    </div>

                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/iMember.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Loremms</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/iEvent.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p>Loremms</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/iClube.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                                    <p>Loremms</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/iPayment.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                                    <p>Loremms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About