import TitleHeader from '../components/TitleHeader'
import {eduCards} from '../constants/index'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {

    useGSAP(()=>{
        // GlowCard animation Slide in from the left
        gsap.utils.toArray('.edu-timeline-card').forEach((card)=>{
            gsap.from(card,{
                xPercent : -100,
                opacity:0,
                duration:1,
                transformOrigin: 'left left',
                ease : 'power2.inOut',
                scrollTrigger :{
                    trigger: card,
                    start: 'top 90%'
                }
            })
        })

        // TimeLine Animation starts at the center of the screen
        gsap.to('.edu-timeline', {
            transformOrigin:'bottom bottom',
            ease:'power1.inOut',
            scrollTrigger:{
                trigger: '.edu-timeline',
                start: 'top center',
                end : '70% center',
                onUpdate:(self)=> {
                    gsap.to('.edu-timeline',{
                        scaleY:1-self.progress,
                    })
                }
            }
        })

        // Timeline Text animation make it fade with respect to the timeline
        gsap.utils.toArray('.edu-expText').forEach((Text)=>{
            gsap.from(Text,{
                xPercent : 0,
                opacity:0,
                duration:1,
                ease : 'power2.inOut',
                scrollTrigger :{
                    trigger: Text,
                    start: 'top 60%'
                }
            })
        })
    },[])

  return (
    <section id='education' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader 
             title='Education' 
             sub='My Education Journey'
            />
            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    {eduCards.map((card,index)=>(
                        <div key={card.title} className='edu-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <GlowCard card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCard>
                            </div>

                            {/* Right side content */}
                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='edu-timeline-wrapper'>
                                        <div className='edu-timeline'/>
                                        <div className='edu-gradient-line w-1 h-full'/>
                                    </div>
                                    <div className='edu-expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                        <div className='edu-timeline-logo'>
                                            <img src={card.logoPath} alt="logo" />
                                        </div>
                                        <div className=''>
                                            <h1 className='font-semibold'>{card.title}</h1>
                                            <p className='my-5 text-white-50'>📅{card.date}</p>
                                            <p className='my-5 text-white-50'>📍{card.location}</p>
                                            <p className='text-[#839cb5] italic'>GPA/Grade/Marks</p>
                                            <ul className='list-disc ms-5 mt-2 mb-5 flex flex-col gap-5 text-white-50'>
                                                {card.responsibilities.map((responsibilities)=>(
                                                    <li key='responsibility' className='text-lg'>
                                                        {responsibilities}
                                                    </li>   
                                                )
                                                )}
                                            </ul>
                                            <p className='text-[#839cb5] italic'>Achivements</p>
                                            <ul className='list-disc ms-5 mt-2 mb-5 flex flex-col gap-5 text-white-50'>
                                                {card.achivements.map((achivements)=>(
                                                    <li key='responsibility' className='text-lg'>
                                                        {achivements}
                                                    </li>   
                                                )
                                                )}
                                            </ul>
                                            <p className='text-[#839cb5] italic'>Activities</p>
                                            <ul className='list-disc ms-5 mt-2 mb-5 flex flex-col gap-5 text-white-50'>
                                                {card.activities.map((activities)=>(
                                                    <li key='responsibility' className='text-lg'>
                                                        {activities}
                                                    </li>   
                                                )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default EducationSection