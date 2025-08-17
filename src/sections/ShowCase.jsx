import {  useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';


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

    // Keep the section animation separate
    const projects = [section1Ref.current,project1Ref.current,project2Ref.current,project3Ref.current,project4Ref.current,project5Ref.current,project6Ref.current];
 
    gsap.fromTo(
      section1Ref.current,
      {opacity:0},
      {opacity:1, duration:1.5}
    )

    // Only animate the project cards
    // const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current, project6Ref.current];
    
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
          delay:0.2 *(index+1),
          scrollTrigger : {
            trigger: card,
            start: 'top bottom -=200', 
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
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 "> Projects </h2>
        <div className='mt-1 mb-2 bg-zinc-900 px-6 pt-1 rounded-xl'>
          <div className="mt-5 mb-6 text-center"> <h2 className="text-2xl md:text-3xl font-semibold text-white">WanderLust - AirBnb Clone</h2> </div>
          <div className="showcaselayout pb-5">
            {/* left side main Image */}
            <div className="first-project-wrapper" ref={project1Ref}>
              <div className="image-wrapper">
                <img  src="images/projects/airbnb-1.png" alt="airbnb-1" />
              </div>
              <div className="text-content">
                {/* decription */}
                <div className="max-w-full  bg-opacity-30 px-3 pt-2 pb-2 rounded-lg">
                  <div className="max-w-full">
                    <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                       Wanderlust is an Airbnb‑inspired full‑stack platform that lets users discover, create, and manage rental property listings with rich details, images, and reviews.
                    </p>
                    <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
                      It delivers a seamless browsing experience with search and filtering, secure account management, and user-driven content, enabling hosts to publish listings and guests to explore, review, and engage—all within a responsive, production‑style interface.
                    </ p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 px-3 pb-2 w-full">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wanderlust-kgz7.onrender.com/"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    <img
                      src="images/live.svg"
                      alt="Live icon"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <p className="font-mono text-black text-sm sm:text-base lg:text-lg xl:text-xl">
                      View Live
                    </p>
                  </a>

                  {/* Source Code Link */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AbbasHirani/WanderLust.git"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    <img
                      src="images/code.png"
                      alt="Code icon"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <p className="font-mono text-black text-sm sm:text-base lg:text-lg xl:text-xl">
                      Source Code
                    </p>
                  </a>
                </div>

                <div className="w-full flex flex-wrap gap-3 mt-3 items-center px-3">
                  <h1 className='text-center mr-3 w-28 h-6 pt-1 text-xs rounded bg-white/10 px-2'>Tech Stack Used</h1>
                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/node.png" alt="Node.js" className="w-4 h-4" /> 
                    <span>Node.js</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/mongodb.svg" alt="mongodb.js" className="w-4 h-4" /> 
                    <span>Mongodb</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/Express.png" alt="express" className="w-4 h-4" /> 
                    <span>Express.js</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/bootstrap.png" alt="bootstrap" className="w-4 h-4" /> 
                    <span>Bootstrap</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/cloud.png" alt="cloudinary" className="w-4 h-4" /> 
                    <span>Cloudinary</span>  
                  </div>
                </div>
              </div>
            </div>
            {/* right side showcase */}
            <div className="project-list-wrapper overflow-hidden ">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="images/projects/airbnb-2.png" alt="airbnb-2" />
                </div >
                <p className='pt-3 pl-1'>Listing detail view with server-rendered EJS + React interactivity, secure route access, owner association, price/location fields, reviews, and Mongoose population for related data.</p>
              </div>
              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="images/projects/airbnb-3.png" alt="airbnb-3" />
                </div>
                <p className='pt-3 pl-1'>User registration via Passport.js (local strategy), session management with express-session, password hashing (passport-local-mongoose), input validation (Joi/Mongoose), and secure cookies.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='mt-15 mb-2 bg-zinc-900 px-6 pt-1 rounded-xl '>
          <div className="mt-5 mb-6 text-center">
             <h2 className="text-2xl md:text-3xl font-semibold text-white">Library Management System (GUI-based Desktop Application)</h2>
          </div>
          <div className="showcaselayout pb-5">
            {/* left side showcase */}
            <div className="first-project-wrapper" ref={project4Ref}>
              <div className="image-wrapper">
                <img src="images/projects/lib1.png" alt="Project 1" />
              </div>
              <div className="text-content">
                {/* decription */}
                <div className="max-w-full  bg-opacity-30 px-3 pt-2 pb-2 rounded-lg">
                  <div className="max-w-full">
                    <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                      A desktop Library Management System built with Python (Tkinter) and MySQL that enables librarians to efficiently create, view, update, and delete member accounts.
                    </p>
                    <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
                      The app features a clean, navigable GUI with color‑coded windows, structured data views, and a scrollable table for quick record browsing—ideal for small libraries and educational institutions managing member records.
                    </ p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-1 px-3 pb-2 w-full">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AbbasHirani/Library-Management-System-GUI-Desktop-App.git"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    <img
                      src="images/code.png"
                      alt="GitHub icon"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <p className="font-mono text-black text-sm sm:text-base md:text-lg lg:text-xl">
                      Source Code
                    </p>
                  </a>
                </div>
                <div className="w-full flex flex-wrap gap-6 mt-3 items-center px-3">
                  <h1 className='text-center mr-3 w-28 h-6 pt-1 text-xs rounded bg-white/10 px-2'>Tech Stack Used</h1>
                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/py.svg" alt="Node.js" className="w-4 h-4" /> 
                    <span>Python</span>  
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
                    <img src="/images/proj_techstack/sql.svg" alt="mongodb.js" className="w-4 h-4" /> 
                    <span>MySql</span>  
                  </div>
                </div>
              </div>
            </div>
            {/* right side showcase */}
            <div className="project-list-wrapper overflow-hidden ">
              <div className="project" ref={project5Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="images/projects/lib.png" alt="Project 2" />
                </div>
                <p className='pt-3 pl-1'>Tkinter UI + ttk.Treeview, MySQL (mysql.connector); CRUD for members (card number, name, phone, address, DOB), validated inputs, searchable/scrollable table, and modular code structure.</p>
              </div>
              <div className="project" ref={project6Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="images/projects/lib2.png" alt="Project 3" />
                </div>
                <p className='pt-3 pl-1'>Strengthened skills in event‑driven GUI design, reliable DB integrations, error handling, and writing reusable modules for maintainable desktop applications.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     </section>
  )
}

export default ShowCase


// ShowCase.jsx (two groups, two triggers)
// import React, { useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

// const ShowCase = () => {
//   // Group 1 refs (Project 1 block)
//   const group1Ref = useRef(null); // wrapper for first block
//   const project1Ref = useRef(null);
//   const project2Ref = useRef(null);
//   const project3Ref = useRef(null);

//   // Group 2 refs (Project 2 block)
//   const group2Ref = useRef(null); // wrapper for second block
//   const project4Ref = useRef(null);
//   const project5Ref = useRef(null);
//   const project6Ref = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Helper to init a group: one fade for the group, one stagger for its cards
//       const initGroup = (groupEl, cardEls) => {
//         const cards = cardEls.filter(Boolean);
//         const activeCards = isMobile ? cards.slice(0, 4) : cards;

//         gsap.set(groupEl, { opacity: 0 });
//         gsap.set(activeCards, { y: 40, opacity: 0, willChange: 'transform, opacity' });

//         const fade = gsap.to(groupEl, {
//           opacity: 1,
//           duration: isMobile ? 0.5 : 0.8,
//           ease: 'power1.out',
//           scrollTrigger: {
//             trigger: groupEl,
//             start: 'top 85%',
//             end: 'bottom top',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         const cardsAnim = gsap.to(activeCards, {
//           y: 0,
//           opacity: 1,
//           duration: isMobile ? 0.4 : 0.6,
//           ease: 'power1.out',
//           stagger: { each: isMobile ? 0.06 : 0.08, from: 'start' },
//           scrollTrigger: {
//             trigger: groupEl,
//             start: 'top 80%',
//             end: 'bottom top',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         // Optional: pause after leaving group viewport
//         ScrollTrigger.create({
//           trigger: groupEl,
//           start: 'bottom bottom',
//           onLeave: () => {
//             fade.pause();
//             cardsAnim.pause();
//           },
//           onEnterBack: () => {
//             fade.play();
//             cardsAnim.play();
//           }
//         });
//       };

//       // Init both groups
//       initGroup(group1Ref.current, [project1Ref.current, project2Ref.current, project3Ref.current]);
//       initGroup(group2Ref.current, [project4Ref.current, project5Ref.current, project6Ref.current]);
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="work" className="app-showcase">
//       <div className="w-full">
//         <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">Projects</h2>

//         {/* Group 1 (Project 1 block) */}
//         <div className="mt-1 mb-2 bg-zinc-900 px-6 pt-1 rounded-xl" ref={group1Ref}>
//           <div className="mt-5 mb-6 text-center">
//             <h2 className="text-2xl md:text-3xl font-semibold text-white">WanderLust - AirBnb Clone</h2>
//           </div>

//           <div className="showcaselayout pb-5">
//             {/* Main card */}
//             <div
//               className="first-project-wrapper"
//               ref={project1Ref}
//               style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
//             >
//               <div className="image-wrapper">
//                 <img src="images/projects/airbnb-1.png" alt="airbnb-1" width={1200} height={800} loading="lazy" />
//               </div>
//               <div className="text-content">
//                 {/* decription */}
//               <div className="max-w-full  bg-opacity-30 px-3 pt-2 pb-2 rounded-lg">
//                    <div className="max-w-full">
//                      <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3">
//                        Wanderlust is an Airbnb‑inspired full‑stack platform that lets users discover, create, and manage rental property listings with rich details, images, and reviews.
//                      </p>
//                      <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
//                        It delivers a seamless browsing experience with search and filtering, secure account management, and user-driven content, enabling hosts to publish listings and guests to explore, review, and engage—all within a responsive, production‑style interface.
//                      </ p>
//                    </div>
//                  </div>
                
//                 <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 px-3 pb-2 w-full">
//                    <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://wanderlust-kgz7.onrender.com/"
//                     className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     <img
//                       src="images/live.svg"
//                       alt="Live icon"
//                       className="w-5 h-5 sm:w-6 sm:h-6"
//                     />
//                     <p className="font-mono text-black text-sm sm:text-base lg:text-lg xl:text-xl">
//                       View Live
//                     </p>
//                   </a>

//                   {/* Source Code Link */}
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://github.com/AbbasHirani/WanderLust.git"
//                     className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     <img
//                       src="images/code.png"
//                       alt="Code icon"
//                       className="w-5 h-5 sm:w-6 sm:h-6"
//                     />
//                     <p className="font-mono text-black text-sm sm:text-base lg:text-lg xl:text-xl">
//                       Source Code
//                     </p>
//                   </a>
//                 </div>

//                 <div className="w-full flex flex-wrap gap-3 mt-3 items-center px-3">
//                   <h1 className='text-center mr-3 w-28 h-6 pt-1 text-xs rounded bg-white/10 px-2'>Tech Stack Used</h1>
//                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/node.png" alt="Node.js" className="w-4 h-4" /> 
//                     <span>Node.js</span>  
//                   </div>
//                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/mongodb.svg" alt="mongodb.js" className="w-4 h-4" /> 
//                     <span>Mongodb</span>  
//                   </div>
//                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/Express.png" alt="express" className="w-4 h-4" /> 
//                     <span>Express.js</span>  
//                   </div>
//                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/bootstrap.png" alt="bootstrap" className="w-4 h-4" /> 
//                     <span>Bootstrap</span>  
//                   </div>
//                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/cloud.png" alt="cloudinary" className="w-4 h-4" /> 
//                     <span>Cloudinary</span>  
//                   </div>
//                 </div>
//               </div>
            
//             </div>

//             {/* Side cards */}
//             <div className="project-list-wrapper overflow-hidden">
//               <div
//                 className="project"
//                 ref={project2Ref}
//                 style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
//               >
//                 <div className="image-wrapper bg-[#ffe7eb]">
//                   <img src="images/projects/airbnb-2.png" alt="airbnb-2" width={1200} height={800} loading="lazy" />
//                 </div>
//                 <p className="pt-3 pl-1">Listing detail view with server-rendered EJS + React interactivity, secure route access, owner association, price/location fields, reviews, and Mongoose population for related data.</p>
//               </div>

//               <div
//                 className="project"
//                 ref={project3Ref}
//                 style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
//               >
//                 <div className="image-wrapper bg-[#ffefdb]">
//                   <img src="images/projects/airbnb-3.png" alt="airbnb-3" width={1200} height={800} loading="lazy" />
//                 </div>
//                 <p className="pt-3 pl-1">User registration via Passport.js (local strategy), session management with express-session, password hashing (passport-local-mongoose), input validation (Joi/Mongoose), and secure cookies.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Group 2 (Project 2 block) */}
//         <div className="mt-15 mb-2 bg-zinc-900 px-6 pt-1 rounded-xl" ref={group2Ref}>
//           <div className="mt-5 mb-6 text-center">
//             <h2 className="text-2xl md:text-3xl font-semibold text-white">
//               Library Management System (GUI-based Desktop Application)
//             </h2>
//           </div>

//           <div className="showcaselayout pb-5">
//             {/* Main card */}
//             <div
//               className="first-project-wrapper"
//               ref={project4Ref}
//               style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
//             >
//               <div className="image-wrapper">
//                 <img src="images/projects/lib1.png" alt="Project 1" width={1200} height={800} loading="lazy" />
//               </div>
//               {/* ... keep your text, links, stack ... */}
//               <div className="text-content">
//                 {/* decription */}
//                 <div className="max-w-full  bg-opacity-30 px-3 pt-2 pb-2 rounded-lg">
//                   <div className="max-w-full">
//                     <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3">
//                       A desktop Library Management System built with Python (Tkinter) and MySQL that enables librarians to efficiently create, view, update, and delete member accounts.
//                     </p>
//                     <p className="text-white text-opacity-80 sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2">
//                       The app features a clean, navigable GUI with color‑coded windows, structured data views, and a scrollable table for quick record browsing—ideal for small libraries and educational institutions managing member records.
//                     </ p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row items-center gap-4 mt-1 px-3 pb-2 w-full">
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://github.com/AbbasHirani/Library-Management-System-GUI-Desktop-App.git"
//                     className="flex items-center justify-center gap-2 w-full sm:w-auto px-3 py-2 rounded-lg bg-white shadow-md hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     <img
//                       src="images/code.png"
//                       alt="GitHub icon"
//                       className="w-5 h-5 sm:w-6 sm:h-6"
//                     />
//                     <p className="font-mono text-black text-sm sm:text-base md:text-lg lg:text-xl">
//                       Source Code
//                     </p>
//                   </a>
//                 </div>
//                 <div className="w-full flex flex-wrap gap-6 mt-3 items-center px-3">
//                   <h1 className='text-center mr-3 w-28 h-6 pt-1 text-xs rounded bg-white/10 px-2'>Tech Stack Used</h1>
//                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/py.svg" alt="Node.js" className="w-4 h-4" /> 
//                     <span>Python</span>  
//                   </div>
//                   <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs">
//                     <img src="/images/proj_techstack/sql.svg" alt="mongodb.js" className="w-4 h-4" /> 
//                     <span>MySql</span>  
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Side cards */}
//             <div className="project-list-wrapper overflow-hidden">
//               <div
//                 className="project"
//                 ref={project5Ref}
//                 style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
//               >
//                 <div className="image-wrapper bg-[#ffe7eb]">
//                   <img src="images/projects/lib.png" alt="Project 2" width={1200} height={800} loading="lazy" />
//                 </div>
//                 <p className="pt-3 pl-1">Tkinter UI + ttk.Treeview, MySQL (mysql.connector); CRUD for members (card number, name, phone, address, DOB), validated inputs, searchable/scrollable table, and modular code structure.</p>
//               </div>

//               <div
//                 className="project"
//                 ref={project6Ref}
//                 style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
//               >
//                 <div className="image-wrapper bg-[#ffefdb]">
//                   <img src="images/projects/lib2.png" alt="Project 3" width={1200} height={800} loading="lazy" />
//                 </div>
//                 <p className="pt-3 pl-1">Strengthened skills in event‑driven GUI design, reliable DB integrations, error handling, and writing reusable modules for maintainable desktop applications.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ShowCase;
