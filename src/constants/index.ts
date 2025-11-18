import type {
  TService,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  pjlogo,
  verzeo,
  gcp,
  mjb,
  uber,
  gctp,
  vechi,
  
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    external: true,
    url: "https://drive.google.com/uc?export=download&id=14PNIrMoVrsv1Qh5dAPCjJ2uVcBdYROby",
  },
 
];


const services: TService[] = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "AI & ML Developer",
    icon: mobile,
  },
  {
    title: "Data Developer & SQL Developer",
    icon: backend,
  },
  {
    title: "Statistical Analyst",
    icon: creator,
  },
];

const experiences: TExperience[] = [
  {
    title: "Construction Data Coordinator",
    companyName: "PJ & Constructions",
    icon: pjlogo,
    iconBg: "#383E56",
    date: "May 2024 - June 2025",
    points: [
      "Performed data entry in Excel, recording materials dispatched from the company and site consumption details.",
      " Built interactive dashboards using Power BI/Tableau for real-time project and cost tracking.",
      "Analyzed project performance, budgets, and resource data to improve efficiency and reduce delays.",
      "Used Python, SQL, and Excel for cost forecasting and collaborated with engineers to enhance safety and quality performance.",
    ],
  },
  {
    title: "AI Chatbot Developer",
    companyName: "Greater Chennai Traffic Police",
    icon: gcp,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - April 2024",
    points: [
      "Developed Traffic GPT , a chatbot assistant using Python and Mistral 7B (data model) to automate responses and assist users..",
      "Integrated structured data handling for accurate query responses..",
      "Deployed the chatbot on the Tamil Nadu Government server, ensuring secure and reliable performance..",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Metaverse Developer Intern",
    companyName: "Munjal Birmingham University",
    icon: mjb,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Derby Garden Park (VR Project)- a VR simulation to demonstrate the environmental impact of continued plastic usage over 30 years, using Derby Garden Park as a case study.",
      "Designed 3D objects and environments in Blender and integrated them into Unity for immersive virtual experiences.",
      "Used Google Maps data to accurately recreate the park environment.",
      "Enabled users to explore and understand environmental changes in VR, promoting sustainability awareness.",
    ],
  },
  {
    title: "Data Science Intern",
    companyName: "Verzeo",
    icon: verzeo,
    iconBg: "#E6DEDD",
    date: "July 2022 - Sept 2022",
    points: [
      "Created a mobile phone dataset by web scraping product details from Amazon using Python.",
      "Performed data cleaning, exploration, and analysis to understand trends and features impacting mobile prices.",
      "Built a predictive model to estimate mobile prices based on the collected data.",
      "Recognized with a Silver Badge for project excellence and quality of analysis.",
    ],
  },
  
];


  
const projects: TProject[] = [
  {
    name: "Uber Data Analytics using GCP",
    description:
     "Uber transport analysis using GCP, Mage ETL, BigQuery & Looker dashboards.It integrates with trip data to uncover patterns in demand, traffic flow, and rider behavior.",
    
    longDescription:
      "This project analyzes NYC transit data using GCP tools including Mage ETL, BigQuery, and Looker. It includes preprocessing, schema design, ETL pipelines, cloud storage, insights generation and dashboard reporting. The model focuses on improving public transport accessibility and efficiency using scalable cloud-based analytics.",

    tags: [
      { name: "Google Cloud Platform", color: "blue-text-gradient" },
      { name: "BigQuery", color: "green-text-gradient" },
      { name: "Mage ETL", color: "pink-text-gradient" },
    ],

    image: uber,
    images: [uber], // can add more later
    videoUrl: "",

    reportLink: "https://docs.google.com/document/d/1rFl3h3YGgn9M8eUf_L8DqDfhBi-YHRTgAFPWOYqxRL8/edit?usp=sharing",   // dummy working link
    githubLink: "https://github.com/",  // dummy working link
  },

  {
    name: "Traffic GPT",
    description:
      "A traffic advisory chatbot built using FastAPI, Mistral-7B, and a RAG pipeline.It provides real-time responses to traffic queries by retrieving accurate information from local databases.",
    
    longDescription:
      "Traffic GPT uses FastAPI and Mistral 7B to deliver real-time insights on traffic challans, violations, laws and location-based queries. It uses retrieval augmented generation (RAG), a custom traffic dataset, vector search and caching for faster responses. Deployed on a secure government server.",

    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Mistral 7B", color: "pink-text-gradient" },
    ],

    image: gctp,
    images: [gctp],
    videoUrl: "https://www.youtube.com/embed/W_WACs3-obA",

    reportLink: "https://drive.google.com/file/d/1G8BZmhwRpx9E7qbjV7bo9Pyyeg7aVkCX/view?usp=sharing",
    githubLink: "https://github.com/",
  },

  {
    name: "AI COMBAT VEHICLE",
    description:
      "A surveillance robot for intruder detection & GPS alerts.It uses sensors, image processing, and servo-controlled movement for accurate threat identification & location tracking.",
    
    longDescription:
      "The AI Combat Vehicle integrates Raspberry Pi, Arduino and ultrasonic sensors to detect motion, track intruder distance, capture images and send alerts. GPS tagging, OpenCV-based processing, and autonomous movement make it suitable for border surveillance and high-security monitoring.",

    tags: [
      { name: "Raspberry Pi", color: "blue-text-gradient" },
      { name: "Arduino", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
    ],

    image: vechi,
    images: [vechi],
    videoUrl: "https://www.youtube.com/embed/25BoblVp21k",

    reportLink: "https://docs.google.com/document/d/1vw8uy1aHhxFpbe2nQn8dgk7DOQeLLLEoHti62nPMYp4/edit?usp=sharing",
    githubLink: "https://github.com/",
  },
];

export { services, experiences, projects };
