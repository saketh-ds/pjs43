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
  civicBot,
  syntheticBank,
  mediknow,
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
    url: "https://drive.google.com/file/d/1DcXR-C5Z2uS8MQEtXiXgxaIh5gS2iMGL/view?usp=sharing",
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
    title: "Junior Data Scientist Intern",
    companyName: "Civic Bot",
    icon: civicBot,
    iconBg: "#383E56",
    date: "May 2026 - Aug 2026",
    points: [
      "Developed a Python-based RAG chatbot using GPT-4o-mini and OpenAI embeddings, processing 142 council records across 3 UK councils.",
      "Implemented FAISS vector search, Top-50 semantic retrieval and metadata filtering to deliver accurate, council-specific responses with source citations and hallucination control.",
      "Built FastAPI with Pydantic validation, per-IP rate limiting and OpenAI error handling.",
      "Targeted a 30% reduction in manual council enquiry-handling workload by automating 24/7 responses to UK residents across 3 local councils.",
    ],
  },
  {
    title: "Data Analyst ",
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
  name: "MEDIKNOW – Know Your Medicine",
  description:
    "Developed an AI-powered medicine information chatbot using Retrieval-Augmented Generation (RAG), enabling users to explore medicine information, ingredients, uses, side effects and safety precautions through natural-language queries.",

  longDescription:
    "Built a local-first AI-powered medicine information platform using Python, PostgreSQL, Sentence Transformers, FAISS and Mistral 7B through Ollama. The system processes a dataset of approximately 168,460 medicine records containing 22 information fields, including active ingredients, therapeutic uses, side effects, administration instructions and safety information. It implements a hybrid retrieval architecture combining PostgreSQL full-text search and FAISS semantic similarity search using 384-dimensional embeddings generated with all-MiniLM-L6-v2. Retrieved medicine information is passed to Mistral 7B through Ollama to generate context-grounded natural-language responses with source references. The backend is developed using FastAPI, with a responsive HTML, JavaScript and Tailwind CSS frontend. The platform incorporates medical safety guardrails, evidence-based response generation and source attribution to help users access medicine information while distinguishing general information from personalized medical advice.",

  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Generative AI", color: "green-text-gradient" },
    { name: "RAG", color: "pink-text-gradient" },
    { name: "Mistral 7B", color: "blue-text-gradient" },
    { name: "Ollama", color: "green-text-gradient" },
    { name: "FAISS", color: "pink-text-gradient" },
    { name: "Sentence Transformers", color: "blue-text-gradient" },
    { name: "PostgreSQL", color: "green-text-gradient" },
    { name: "FastAPI", color: "pink-text-gradient" },
    { name: "NLP", color: "blue-text-gradient" },
    { name: "Tailwind CSS", color: "green-text-gradient" },
    { name: "JavaScript", color: "pink-text-gradient" },
  ],

  image: mediknow,
  images: [],

  videoUrl:
    "https://www.loom.com/share/a113cffa6bbf46f9896fdee13a1140c8",

  reportLink:
    "https://drive.google.com/file/d/1P8ybvFSXFgTZM5xMpkKwt4mqbUST9DdJ/view?usp=sharing",
},

{
  name: "CivicBot – AI-Powered UK Council Assistant",

  description:
    "Developed an AI-powered council chatbot using Retrieval-Augmented Generation (RAG) to help UK residents access accurate, council-specific information across three local authorities: Erewash Borough Council, Amber Valley Borough Council and Derby City Council.",

  longDescription:
    "Built a Python-based RAG chatbot using GPT-4o-mini and OpenAI embeddings, processing 142 council information records across three UK councils. Implemented FAISS vector search with Top-50 semantic retrieval and metadata filtering to retrieve relevant, council-specific information and generate context-grounded responses with source citations. Designed the retrieval pipeline to improve answer relevance and reduce hallucinations by grounding responses in retrieved council information. Developed a FastAPI backend with Pydantic request validation, per-IP rate limiting and OpenAI API error handling to support reliable request processing. The platform aims to automate routine resident enquiries through 24/7 conversational support, targeting a 30% reduction in manual council enquiry-handling workload.",

  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Generative AI", color: "green-text-gradient" },
    { name: "RAG", color: "pink-text-gradient" },
    { name: "GPT-4o-mini", color: "blue-text-gradient" },
    { name: "OpenAI Embeddings", color: "green-text-gradient" },
    { name: "FAISS", color: "pink-text-gradient" },
    { name: "Semantic Search", color: "blue-text-gradient" },
    { name: "FastAPI", color: "green-text-gradient" },
    { name: "Pydantic", color: "pink-text-gradient" },
    { name: "Metadata Filtering", color: "blue-text-gradient" },
    { name: "API Development", color: "green-text-gradient" },
  ],

  image: civicBot,
  images: [],

  videoUrl:
    "https://www.loom.com/share/b2491870effe4cc49808860659dc8185",

  reportLink:
    "https://drive.google.com/file/d/1Jph14QcuhgGJg_72XvUaVEeGY1hvzFrj/view?usp=sharing",
},


  
{
  name: "Synthetic Bank – AI-Powered Banking Analytics",
  description:
    "Developed an AI-driven synthetic banking platform to analyse UK retail banking behaviour under changing macroeconomic conditions using machine learning, time-series analysis and synthetic data generation.",

  longDescription:
    "This project analyses UK macroeconomic and retail banking data from 2008 to 2025 using Python, Pandas, NumPy, Scikit-Learn and statistical modelling. It integrates Bank of England, ONS and FCA datasets to predict mortgage approvals, savings, current accounts, consumer credit and credit card lending. The platform uses Linear Regression, Random Forest, XGBoost and Logistic Regression for predictive modelling and economic-regime classification. CTGAN and TVAE generate synthetic banking customers, with TVAE achieving 92.73% overall data quality. The system generates 2.16 million customer-month records and includes interactive dashboards, customer evolution analysis and interest-rate stress testing through a full-stack application.",

  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Machine Learning", color: "green-text-gradient" },
    { name: "Scikit-Learn", color: "pink-text-gradient" },
    { name: "CTGAN & TVAE", color: "blue-text-gradient" },
    { name: "FastAPI", color: "green-text-gradient" },
    { name: "Next.js & React", color: "pink-text-gradient" },
    { name: "SQLite", color: "blue-text-gradient" },
    { name: "Time Series Analysis", color: "green-text-gradient" },
  ],

  image: syntheticBank,
  images: [],
  videoUrl: "https://www.loom.com/share/b2491870effe4cc49808860659dc8185",

  reportLink: "https://drive.google.com/file/d/1POJ384UuMOL5Q_MbsdMqkPQ_UrN287R1/view?usp=sharing",
},

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
   
  },
];

export { services, experiences, projects };
