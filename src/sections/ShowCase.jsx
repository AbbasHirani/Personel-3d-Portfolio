import {  useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(()=> {
    gsap.fromTo(
      sectionRef.current,
      {opacity:0},
      {opacity:1, duration:1.5}
    )
  },[]); 

  return (
    <section
      id= "work"
      className="app-showcase"
      ref={sectionRef}
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/* left side showcase */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="images/airbnb.png" alt="Project 1" />
            </div>
            <div className="text-content">
              <h2>
                Wander Lust (AirBnb Clone)
              </h2>
              <p className="text-white-50 md:text-xl">
                A travel blog that inspires wanderlust and provides travel tips, destination guides, and personal travel stories.
              </p>
            </div>
          </div>
          {/* right side showcase */}
          <div className="project-list-wrapper overflow-hidden ">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="images/project2.png" alt="Project 2" />
              </div>
              <h2>Library Management GUI Based</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="images/project3.png" alt="Project 3" />
              </div>
              <h2>Library Management GUI Based</h2>
            </div>
          </div>
        </div>
      </div>
     </section>
  )
}

export default ShowCase