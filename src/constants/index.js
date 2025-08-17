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
    { text : 'Full Stack Developer' , imgPath: '/images/code.svg' },
    { text : 'React Developer' , imgPath: '/images/react.svg' },
    {text : 'Backend Developer' , imgPath: '/images/backend.png'},
    { text : 'Graphic Designer', imgPath: '/images/graphic.png'},
    { text : 'FreeLancer', imgPath: '/images/freelance.png' },
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
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "MongoDB",
    modelPath: "/models/techIcons/mongodb.glb",
    scale: 1.6,
    rotation: [1.4, 0, 0],
  },{
    name: "Express",
    modelPath: "/models/techIcons/express.glb",
    scale: 1.7,
    rotation: [1.6, 0, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/techIcons/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node Developer",
    modelPath: "/models/techIcons/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/techIcons/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "MySQL",
    modelPath: "/models/techIcons/sql.glb",
    scale: 1.3,
    rotation: [1.6, 0, 0],
  },
  {
    name: "Java Script",
    modelPath: "/models/techIcons/javasc.glb",
    scale: 1.3,
    rotation: [1.6, 0, 0],
  },
   {
    name: "C++",
    modelPath: "/models/techIcons/c++.glb",
    scale: 1.3,
    rotation: [1.6, 0, 0],
  },
  {
    name: "GitHub",
    modelPath: "/models/techIcons/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
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
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

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
};
