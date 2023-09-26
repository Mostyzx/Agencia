import React from 'react'
import Frame35 from '../assets/pana.png'
import imagem9 from '../assets/image 9.png'
import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'
import Logo4 from '../assets/Logo4.png'
import Logo5 from '../assets/Logo5.png'
import Logo6 from '../assets/Logo6.png'
import Logo7 from '../assets/Logo7.png'

const Products = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
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

            <div className='px-4 lg:px-14 mx-auto bg-neutralSilver py-16' id='testimonial'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={imagem9} alt="" />
                    </div>

                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Amet nostrum facilis eaque, earum eligendi velit animi pariatur odit ipsam, explicabo voluptatum?
                                Consequuntur accusantium harum consequatur, modi iure ex voluptatem cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Omnis illum ea quis cumque vero optio aliquid iure necessitatibus, neque similique tempore aliquam quaerat fugiat vel quam iusto labore cum magnam?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Lorem Pirem</h5>
                            <p className='text-base text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src={Logo1} alt="" />
                                    <img src={Logo2} alt="" />
                                    <img src={Logo3} alt="" />
                                    <img src={Logo4} alt="" />
                                    <img src={Logo5} alt="" />
                                    <img src={Logo6} alt="" />
                                    <img src={Logo7} alt="" />
                                    <div className='flex items-center gab-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Lorem pirem neque <svg className='inline-block ml-2' width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Right">
                                                <path id="Vector" d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" />
                                            </g>
                                        </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products