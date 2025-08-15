import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import Glowcard from '../components/GlowCard'
const Testimonials = () => {
  return (
    <section 
    id='testimonials'
    className='flex-center section-padding'
    >
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
                title="What People Have to say About Me?"
                sub="Testimonials"
            />
            <div className='lg:columns-3 md:colums-2 columns-1 mt-16'>
                {testimonials.map((testimonials)=>(
                    <Glowcard card={testimonials}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={testimonials.imgPath} alt="img" />
                            </div>
                            <div>
                                <p className='font-bold'>{testimonials.name}</p>
                                <p className='text-white-50'>{testimonials.mentions}</p>
                            </div>
                        </div>
                    </Glowcard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials