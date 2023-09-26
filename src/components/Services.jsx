import React from 'react'
import Membros from '../assets/Membros.png'
import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'
import Logo4 from '../assets/Logo4.png'
import Logo5 from '../assets/Logo5.png'
import Logo6 from '../assets/Logo6.png'
import Logo7 from '../assets/Logo7.png'
import Membrosimg from "../assets/Membros.png"
import Associacoesimg from "../assets/associacoes.png"
import clubeimg from "../assets/clube.png"

const Services = () => {
  const services = [
    {id: 1, title: "Lorem Piremmens", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Membrosimg
    },
    {id: 2, title: "Lorem Piremmens", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Associacoesimg
    },
    {id: 3, title: "Lorem Piremmens", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: clubeimg
    },
  ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="service">
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Lorem Pirem</h2>
            <p className='text-neutralGrey'>Lorem ipsum dolor sit amet consectetur adipising.</p>


            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo7} alt="" />
            </div>
        </div>
        
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit.</h2>
          <p className='text-neutralGrey'>Lorem ipsum dolor sit amet consectetur</p>
        </div>

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
          {
            services.map(service => <div key={service.id} className={`
            px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer
            hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300
            flex items-center justify-center h-full
            `}>
              <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={service.image} alt="" className='-ml-5'/>
                </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                <p className='text-sn text-neutralGrey'>{service.description}</p>
              </div>
              </div>)
          }
        </div>
    </div>
  )
}

export default Services