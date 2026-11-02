/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "MD Faizan",
  logo_name: "Faizan ",
  nickname: "mdfaizancode",
  full_name: "MD Faizan",
  subTitle:
    "Aspiring Full Stack Web Developer (MERN Stack) — B.Tech CSE student at AKTU building projects with React, Next.js, Node.js, Docker & CI/CD. 🚀",
  resumeLink: "/resume.pdf",
  mail: "codefaizan999@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mdfaizancode",
  linkedin: "https://www.linkedin.com/in/mdfaizancode",
  gmail: "codefaizan999@gmail.com",
  whatsapp: "https://wa.me/919990831124",
  gitlab: " ",
  facebook: " ",
  twitter: "/",
  instagram: "/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building full-stack web applications with the MERN stack (MongoDB, Express.js, React, Node.js)",
        "⚡ Designing REST APIs with OAuth 2.0 authentication and MongoDB / MySQL data modeling",
        "⚡ Deploying and shipping apps with Docker, Kubernetes, CI/CD and Render",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#ED8B00" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { backgroundColor: "#FFFFFF", color: "#000000" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { backgroundColor: "#FFFFFF", color: "#000000" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: { color: "#007FFF" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Mongoose",
          fontAwesomeClassname: "simple-icons:mongoose",
          style: { color: "#880000" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "OAuth 2.0",
          fontAwesomeClassname: "simple-icons:auth0",
          style: { color: "#EB5424" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { backgroundColor: "#FFFFFF", color: "#181717" },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. A.P.J. Abdul Kalam Technical University",
      subtitle: "B.Tech. in Computer Science Engineering (Pursuing)",
      logo_path: "aktu123.webp",
      alt_name: "AKTU",
      duration: "Currently Pursuing (3rd Year)",
      descriptions: [
        "⚡ Studying core Computer Science subjects with a strong DSA foundation in Java.",
        "⚡ Completed certifications in Full Stack Web Development, DSA and AI tools alongside my degree.",
        "⚡ Built multiple full-stack MERN projects applying what I've learnt — trading, booking, AI and real-time apps.",
      ],
      website_link: "https://aktu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Alpha (DSA with Java)",
      subtitle: "Apna College",
      image_path: "cert_alpha_dsa.jpg",
      color_code: "#E8833A",
    },
    {
      title: "Delta (Full Stack Web Development)",
      subtitle: "Apna College",
      image_path: "cert_delta_fullstack.jpg",
      color_code: "#8B9A3D",
    },
    {
      title: "AI Tools & ChatGPT Workshop",
      subtitle: "be10x",
      image_path: "cert_be10x_ai.jpg",
      color_code: "#6B6B6B",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create full-stack website projects. Below are some of my projects — each one is live and deployed.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I'm open to internships and entry-level Web Development opportunities. Feel free to reach out — I'll get back to you as soon as I can. 📩 codefaizan999@gmail.com",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle:
      "Let's connect professionally — I share my work and journey as an aspiring Full Stack Developer here.",
    link: "https://www.linkedin.com/in/mdfaizancode/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Trade2Day — Stock Trading Website",
      url: "https://trade2dayfron-theta.vercel.app",
      image_path: "project_trade2day.png",
      color_code: "#22C55E",
      description:
        "A full-stack stock trading platform with live market-style data display, buy/sell order simulation and portfolio tracking. Designed REST APIs for trade execution and user holdings, with Redux for state management and Mongoose for MongoDB data modeling.",
      languages: [
        { name: "React.js", iconifyClass: "logos-react" },
        { name: "Redux", iconifyClass: "simple-icons:redux" },
        { name: "Node.js", iconifyClass: "devicon-nodejs" },
        { name: "Express.js", iconifyClass: "devicon-express" },
        { name: "MongoDB", iconifyClass: "logos-mongodb" },
      ],
    },
    {
      name: "BookMyVilla — Villa Booking Platform",
      url: "https://bookmyvilla.onrender.com",
      image_path: "project_bookmyvilla.png",
      color_code: "#F59E0B",
      description:
        "A full-stack villa listing and booking web application with CRUD functionality for listings and a responsive UI. Built REST APIs and MongoDB models for villas, users and bookings.",
      languages: [
        { name: "MongoDB", iconifyClass: "logos-mongodb" },
        { name: "Express.js", iconifyClass: "devicon-express" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "Node.js", iconifyClass: "devicon-nodejs" },
      ],
    },
    {
      name: "Jarves — AI-Powered Web App",
      url: "https://jarves6-i.onrender.com",
      image_path: "project_jarves.png",
      color_code: "#8B5CF6",
      description:
        "An AI-powered web app built with a Vite/React frontend and a backend API, deployed on Render. Handled deployment, environment configuration and troubleshooting for a live production build.",
      languages: [
        { name: "React (Vite)", iconifyClass: "logos-react" },
        { name: "Node.js", iconifyClass: "devicon-nodejs" },
        { name: "Express.js", iconifyClass: "devicon-express" },
      ],
    },
    {
      name: "LetsMeet — Real-Time Meeting App",
      url: "https://letsmeetss.onrender.com",
      image_path: "project_letsmeet.png",
      color_code: "#14B8A6",
      description:
        "A full-stack real-time MERN application for online meetings and live interaction between users. Implemented backend services and the frontend interface with real-time communication over WebSockets.",
      languages: [
        { name: "MongoDB", iconifyClass: "logos-mongodb" },
        { name: "Express.js", iconifyClass: "devicon-express" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "Node.js", iconifyClass: "devicon-nodejs" },
        { name: "WebSockets", iconifyClass: "devicon-socketio" },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};
