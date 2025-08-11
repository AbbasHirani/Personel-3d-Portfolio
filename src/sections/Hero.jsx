import { words } from '../constants';
import Button from '../components/button';
import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import HeroExperience from '../components/HeroModels/HeroExperience';
import { useGSAP } from '@gsap/react';  
import gsap from 'gsap';
import AnimatedCounter from '../components/animatedCounter';

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo(`.hero-text h1 `,
            {
                y:50,
                opacity : 0
            },
            {
                y:0,
                opacity : 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',
            },
        )
    })
    const containerRef = useRef(null);
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>
        <div className='hero-layout'>
            {/* left Hero content */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            Hi, I'm Abbas Hirani 
                            <img src="/images/wave.png" alt="wave" 
                            style={{ height: "1em", width: "auto" }}/>
                        </h1>
                        
                        <h1>
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word)=>(
                                        <span key = {word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img src={word.imgPath} alt={word.text} 
                                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                                            <span >{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <br />
                        <h1>Building Scalable Apps</h1> 
                    </div>
                     <div
                            ref={containerRef}
                            style={{position: 'relative', display: 'inline-block'}}
                        >
                        <VariableProximity
                            label={`Take a look at my projects to see how I turn ideas into reality.\nLet's connect and create something amazing together!`}
                            className={'variable-proximity-demo pointer-events-none'}
                            style={{ whiteSpace: 'pre-line' }} 
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff='linear'
                        />
                        </div>
                    <Button 
                        className = "md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my Work"
                    />
                </div>
            </header>
            <figure>
                <div className='hero-3d-layout border-red-200'>
                    {/* <HeroExperience /> */}
                    
                </div>
            </figure>
        </div> 
        <AnimatedCounter />

    </section>
  )
}

export default Hero;