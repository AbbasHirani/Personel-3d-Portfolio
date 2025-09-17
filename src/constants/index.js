import { link } from "motion/react-client";

const navLinks = [
  {
    name : 'Projects',
    link : "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
    { text : 'Full Stack Developer' , imgPath: '/images/hero-sec/code.svg' },
    { text : 'React Developer' , imgPath: '/images/hero-sec/react.svg' },
    {text : 'Backend Developer' , imgPath: '/images/hero-sec/backend.png'},
    { text : 'Graphic Designer', imgPath: '/images/hero-sec/graphic.png'},
    { text : 'FreeLancer', imgPath: '/images/hero-sec/freelance.png' },
]


const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 0, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
   {
    name: "MongoDB",
    imgPath: "/images/skill_techstack/mongodb.png",
  },
  {
    name: "Express",
    imgPath: "/images/skill_techstack/Express.png",
  },
  {
    name: "React",
    imgPath: "/images/skill_techstack/react copy.png",
  },
  {
    name: "Node JS",
    imgPath: "/images/skill_techstack/node.png",
  },
  {
    name: "Three JS",
    imgPath: "/images/skill_techstack/three.png",
  },
  {
    name: "Python",
    imgPath: "/images/skill_techstack/py.png",
  },
  {
    name: "Github",
    imgPath: "/images/skill_techstack/github.png",
  },
  {
    name: "MySQL",
    imgPath: "/images/skill_techstack/mysql.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/skill_techstack/javasc.png",
  },
{
    name: "C++",
    imgPath: "/images/skill_techstack/c++.png",
  },
  // {
  //   name: "ADobe Photoshop",
  //   imgPath: "/images/skill_techstack/photoshop.png",
  // },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/techIcons/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node",
    modelPath: "/models/techIcons/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python",
    modelPath: "/models/techIcons/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "GitHub",
    modelPath: "/models/techIcons/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Three JS",
    modelPath: "/models/techIcons/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0,0, 0],
  },
  {
    name: "C++",
    modelPath: "/models/techIcons/c++_transformed.glb",
    scale: 1.3,
    rotation: [1.6,0, 0],
  },
  {
    name: "Express JS",
    modelPath: "/models/techIcons/express_transformed.glb",
    scale: 1.9,
    rotation: [1.6,0, 0],
  },
   {
    name: "Mongo DB",
    modelPath: "/models/techIcons/mongodb_transformed.glb",
    scale: 1.6,
    rotation: [1.5,0, 0],
  },
  {
    name: "MySQL",
    modelPath: "/models/techIcons/sql_transformed.glb",
    scale: 1.5,
    rotation: [1.6,0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/techIcons/javasc_transformed.glb",
    scale: 1.6,
    rotation: [1.6,0, 0],
  },
];

const expCards = [
  {
    review: "Abbas demonstrated exceptional problem-solving skills and backend development expertise during his internship, successfully architecting robust API solutions for our blog management system. His dedication to learning MongoDB optimization and Node.js best practices has been instrumental in strengthening our platform's reliability and performance.",
    imgPath: "/images/carrer/zoro2.png",
    logoPath: "/images/carrer/zoro2.png",
    title: "BackEnd Developer Intern",
    date: "July 2025 - Present",
    location:'Remote',
    responsibilities: [
      "Developed RESTful APIs using Node.js and Express.js for a comprehensive blog management system with authentication, article management, CRUD operations, and newsletter subscription functionality",
      "Designed and implemented MongoDB database solutions with optimized schemas and queries for content management systems supporting the company's blog platform",
      "Collaborated on backend system development for company websites, focusing on API testing, integration, and troubleshooting database connections using modern development tools.",
    ],
  },
];

const eduCards = [
  {
    review: 'Focused on backend development and practical IoT builds, applying CS fundamentals to deliver projects like an ESP32-based snack vending machine while actively participating in hackathons and college tech events to strengthen teamwork, problem-solving, and real-world execution.',
    imgPath:"/images/education/cres-logo-big.png",
    logoPath:"/images/education/cres-logo.png",
    title: 'BTech Computer Science and Engineering (Internet of Things)',
    date:'August 2023 - July 2027',
    location:'Vandalur, Tamil Nadu',
    responsibilities:[
      '8.46 GPA (4 Semesters)',
    ],
    achivements:[
      'Participated with a Team and Won Second Price in a Intra Collage Competition "Project Expo 2025"',
    ],
    activities:[
      'Designed and built an IoT-based snack vending machine using the ESP32 chipset, enabling item dispensing based on user selection.',
      'Engaged in multiple college events to deepen technical knowledge and strengthen professional networking.',
      'Participated in multiple intra- and inter-collegiate hackathons, collaborating on rapid prototyping and problem-solving under time constraints',
      'Active member of multiple college clubs, contributing to events, workshops, and peer learning initiatives.',
      'Earned multiple industry-relevant certifications, strengthening technical proficiency and credibility.'
    ]
  },
  {
    review: 'Built a strong foundation in mathematics, physics, and computing, with early exposure to programming and practical problem-solving.',
    imgPath:"/images/education/asan-logo-big.png",
    logoPath:"/images/education/asan-logo.png",
    title: 'Higher Secondary (Class XII) – Science with Computer',
    date:'April 2023',
    location : 'Chennai, Tamil Nadu',
    responsibilities:[
      'Marks : 472 / 500 ',
    ],
    achivements:[
      'Achieved strong grades in core subjects (Chemistry/CS/Physics)',
      'Led/Contributed to tech-related club activities and peer learning sessions',
      'Built a production-style Library Management System using Python and MySQL for CS project work, covering book cataloging, member management, issue/return tracking, and reporting'
    ],
    activities:[
      'Participated in school-level coding/science activities and tech club sessions',
      'Assisted teachers/peers with basic computer and tech setup during events',
    ]
  }
]

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Abbas. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/testimonials/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Abbas was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/testimonials/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Abbas was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/testimonials/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Abbas was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/testimonials/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Abbas's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/testimonials/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Abbas was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/testimonials/client6.png",
  },
];

const socialImgs = [
   {
    name: "Email",
    url:'mailto:abbashirani154@gmail.com',
    imgPath: "/images/footer/email.png",
  },
  {
    name: "Linkedin",
    url:'https://www.linkedin.com/in/abbashirani/',
    imgPath: "/images/footer/linkedin-copy.png",
  },
    {
    name: "GitHub",
    url:'https://github.com/AbbasHirani',
    imgPath: "/images/footer/github.png",
  },
  {
    name: "insta",
    url:'https://www.instagram.com/abbashirani154/',
    imgPath: "/images/footer/insta.png",
  },
  {
    name: "LeetCode",
    url:'https://leetcode.com/u/AbbasHirani/',
    imgPath: "/images/footer/leetcode.png",
  },
  {
    name: "Stack OverFlow",
    url:'https://stackoverflow.com/users/27247936/abbas-hirani',
    imgPath: "/images/footer/stack-overflow.png",
  },
];

const proj=[
  {
    projectName: "NoteSnips - Notes on the Go!",
    img1Path: "images/projects/notesnips-1.png",
    img1desc: [{ 
      p1: "NoteSnips is a modern full-stack note-taking application designed for developers and professionals, featuring powerful rich text editing with TipTap, hierarchical notebook organization, and real-time auto-save functionality.", 
      p2: "The application provides secure user authentication with password reset, responsive design across all devices, dark/light theme support, and intuitive sidebar navigation. Key capabilities include WYSIWYG editing with markdown shortcuts, automatic content saving, smart organization through notebooks and notes, and a foundation built for future collaborative features and advanced search functionality.",
     }],
    livelink : "https://notesnips.vercel.app/",
    sourcecode:"https://github.com/AbbasHirani/NoteSnips",
    techstack:[
      {
      name:"Next JS",
      imgPath:"/images/proj_techstack/nextjs.png"
    },
    {
      name:"TypeScript",
      imgPath:"/images/proj_techstack/typescript.png"
    },
    {
      name:"Neon DB",
      imgPath:"/images/proj_techstack/neon.jpeg"
    },
    {
      name:"Shad CN",
      imgPath:"/images/proj_techstack/shadcn.png"
    },
    {
      name:"Tailwind CSS",
      imgPath:"/images/proj_techstack/tailwindcss.png"
    },
    {
      name:"TipTap Editor",
      imgPath:"/images/proj_techstack/tiptap.png"
    },
    {
      name:"Framer Motion",
      imgPath:"/images/proj_techstack/framer-motion.png"
    },
    {
      name:"Better Auth",
      imgPath:"/images/proj_techstack/better-auth.png"
    },
  ],
  img2Path: "images/projects/notesnips-2.png",
  img2desc : "Built with Next.js 15, TypeScript, React 18, Better Auth for authentication, Drizzle ORM for database operations, Tailwind CSS with Shadcn/ui components, and Framer Motion for animations. The architecture uses server-side rendering, type-safe operations, and secure session management.",
  img3Path: "images/projects/NoteSnip-dark.png",
  img3desc: "Demonstrates full-stack expertise through middleware-based route protection, Suspense boundaries for optimal performance, real-time content saving, form validation with React Hook Form and Zod, and production deployment on Vercel with automated CI/CD pipelines.",
  },
   {
    projectName: "WanderLust - AirBnb Clone",
    img1Path: "images/projects/airbnb-1.png",
    img1desc:[{
      p1:"Wanderlust is an Airbnb‑inspired full‑stack platform that lets users discover, create, and manage rental property listings with rich details, images, and reviews.",
      p2 : "It delivers a seamless browsing experience with search and filtering, secure account management, and user-driven content, enabling hosts to publish listings and guests to explore, review, and engage—all within a responsive, production‑style interface."
    }],
    livelink : "https://wanderlust-kgz7.onrender.com/",
    sourcecode:"https://github.com/AbbasHirani/WanderLust.git",
    techstack:[
      {
      name:"Node JS",
      imgPath:"/images/proj_techstack/node.png"
    },
    {
      name:"MongoDB",
      imgPath:"/images/proj_techstack/mongodb.svg"
    },
    {
      name:"Express JS",
      imgPath:"/images/proj_techstack/Express.png"
    },
    {
      name:"Bootstrap",
      imgPath:"/images/proj_techstack/bootstrap.png"
    },
    {
      name:"Cloudinary",
      imgPath:"/images/proj_techstack/cloud.png"
    },
  ],
  img2Path: "images/projects/airbnb-2.png",
  img2desc : "Listing detail view with server-rendered EJS + React interactivity, secure route access, owner association, price/location fields, reviews, and Mongoose population for related data.",
  img3Path: "/images/projects/airbnb-3.png",
  img3desc: "User registration via Passport.js (local strategy), session management with express-session, password hashing (passport-local-mongoose), input validation (Joi/Mongoose), and secure cookies.",
  },
  {
    projectName: "Library Management System (GUI-based Desktop Application)",
    img1Path: "images/projects/lib1.png",
    img1desc:[{
      p1:"A desktop Library Management System built with Python (Tkinter) and MySQL that enables librarians to efficiently create, view, update, and delete member accounts.",
      p2 : "The app features a clean, navigable GUI with color‑coded windows, structured data views, and a scrollable table for quick record browsing—ideal for small libraries and educational institutions managing member records."
    }],
    livelink : "",
    sourcecode:"https://github.com/AbbasHirani/Library-Management-System-GUI-Desktop-App.git",
    techstack:[
      {
      name:"Python",
      imgPath:"/images/proj_techstack/py.svg"
    },
    {
      name:"MySql",
      imgPath:"/images/proj_techstack/sql.svg"
    },
  ],
  img2Path: "images/projects/lib.png",
  img2desc : "Tkinter UI + ttk.Treeview, MySQL (mysql.connector); CRUD for members (card number, name, phone, address, DOB), validated inputs, searchable/scrollable table, and modular code structure.",
  img3Path: "images/projects/lib2.png",
  img3desc: "Strengthened skills in event‑driven GUI design, reliable DB integrations, error handling, and writing reusable modules for maintainable desktop applications.",
  },  
]

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  eduCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  proj
};
