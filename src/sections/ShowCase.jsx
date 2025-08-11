import {  useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Button2 from '../components/button2';

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {


  const section1Ref = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);

  useGSAP(()=> {
    const projects = [section1Ref.current,project1Ref.current,project2Ref.current,project3Ref.current,project4Ref.current,project5Ref.current,project6Ref.current];
    
    gsap.fromTo(
      section1Ref.current,
      {opacity:0},
      {opacity:1, duration:1.5}
    )
    projects.forEach((card,index)=>{
    gsap.fromTo(
      card,
      {
        y:50,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:1,
        delay:0.3 *(index+1),
        scrollTrigger : {
          trigger: card,
          start: 'top bottom -=100', 
        }
      }
    )
  })
  },[]); 

  return (
    <section
      id= "work"
      className="app-showcase"
      ref={section1Ref}
    >
      <div className="w-full">
        {/* Project Div */}
        <h2 className="text-2xl md:text-6xl font-semibold text-white mb-6"> Projects </h2>
        <div className='mt-6 mb-25'>
          <div className="mt-12 mb-6 text-center"> <h2 className="text-3xl md:text-3xl font-semibold text-white">WanderLust - AirBnb Clone</h2> </div>
          <div className="showcaselayout">
            {/* left side main Image */}
            <div className="first-project-wrapper" ref={project1Ref}>
              <div className="image-wrapper">
                <img src="images/airbnb-1.png" alt="airbnb-1" />
              </div>
              <div className="text-content">
                <p className="text-white-50 md:text-xl">
                  Wanderlust is an Airbnb‑inspired full‑stack platform that lets users discover, create, and manage rental property listings with rich details, images, and reviews. <br />It delivers a seamless browsing experience with search and filtering, secure account management, and user-driven content, enabling hosts to publish listings and guests to explore, review, and engage—all within a responsive, production‑style interface.
                </p>
                <div className="flex items-center gap-12 mt-4">
                  <Button2 
                    className= "md:w-80 md:h-16 w-60 h-12"
                    text = 'View Live'
                    link="https://wanderlust-kgz7.onrender.com/"
                  />
                  <Button2 
                    className= "md:w-80 md:h-16 w-60 h-12"
                    text = 'Source Code'
                    link="https://github.com/AbbasHirani/WanderLust.git"
                  />
                </div>
                <div className="flex flex-wrap gap-3 mt-3 items-center">
                  <h1 className='mr-3   rounded bg-white/10 px-2'>Tech Stack </h1>
                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/node.png" alt="Node.js" className="w-4 h-4" /> 
                    <span>Node.js</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/mongodb.svg" alt="mongodb.js" className="w-4 h-4" /> 
                    <span>Mongodb</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/Express.png" alt="express" className="w-4 h-4" /> 
                    <span>Express.js</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/bootstrap.png" alt="bootstrap" className="w-4 h-4" /> 
                    <span>Bootstrap</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/cloud.png" alt="cloudinary" className="w-4 h-4" /> 
                    <span>Cloudinary</span>  
                  </div>
                </div>
              </div>
            </div>
            {/* right side showcase */}
            <div className="project-list-wrapper overflow-hidden ">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="images/airbnb-2.png" alt="airbnb-2" />
                </div >
                <p className='mt-2'>Listing detail view with server-rendered EJS + React interactivity, secure route access, owner association, price/location fields, reviews, and Mongoose population for related data.</p>
              </div>
              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="images/airbnb-3.png" alt="airbnb-3" />
                </div>
                <p className='mt-2'>User registration via Passport.js (local strategy), session management with express-session, password hashing (passport-local-mongoose), input validation (Joi/Mongoose), and secure cookies.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='mt-1 mb-18'>
          <div className="mt-15 mb-6 text-center">
             <h2 className="text-3xl md:text-3xl font-semibold text-white">Library Management System (GUI-based Desktop Application)</h2>
          </div>
          <div className="showcaselayout">
            {/* left side showcase */}
            <div className="first-project-wrapper" ref={project4Ref}>
              <div className="image-wrapper">
                <img src="images/lib1.png" alt="Project 1" />
              </div>
              <div className="text-content">
                <p className="text-white-50 md:text-xl">
                  A desktop Library Management System built with Python (Tkinter) and MySQL that enables librarians to efficiently create, view, update, and delete member accounts. <br />The app features a clean, navigable GUI with color‑coded windows, structured data views, and a scrollable table for quick record browsing—ideal for small libraries and educational institutions managing member records.
                </p>
                <div className="flex items-center gap-12 mt-4">
                  <Button2 
                    className= "md:w-80 md:h-16 w-60 h-12"
                    text = 'Source Code'
                    link="https://github.com/AbbasHirani/Library-Management-System-GUI-Desktop-App.git"
                  />
                </div>
                <div className="flex flex-wrap gap-3 mt-3 items-center">
                  <h1 className='mr-3   rounded bg-white/10 px-2'>Tech Stack </h1>
                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/py.svg" alt="Node.js" className="w-4 h-4" /> 
                    <span>Python</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/logos/sql.svg" alt="mongodb.js" className="w-4 h-4" /> 
                    <span>MySql</span>  
                  </div>
                </div>
              </div>
            </div>
            {/* right side showcase */}
            <div className="project-list-wrapper overflow-hidden ">
              <div className="project" ref={project5Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="images/lib.png" alt="Project 2" />
                </div>
                <p className='mt-2'>Tkinter UI + ttk.Treeview, MySQL (mysql.connector); CRUD for members (card number, name, phone, address, DOB), validated inputs, searchable/scrollable table, and modular code structure.</p>
              </div>
              <div className="project" ref={project6Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="images/lib2.png" alt="Project 3" />
                </div>
                <p className='mt-2'>Strengthened skills in event‑driven GUI design, reliable DB integrations, error handling, and writing reusable modules for maintainable desktop applications.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     </section>
  )
}

export default ShowCase