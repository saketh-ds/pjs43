type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "PS Saketh — Portfolio",
    fullName: "PS Saketh",
    email: "sakethpakala@gmail.com",
  },
  hero: {
    name: "PS Saketh",
    p: ["A Graduate Data Analytics Professional and Data & AI Enthusiast"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I transform data into actionable insights by 
      building predictive models that drive better outcomes. I also
       develop intelligent chatbots and leverage cloud services
        to deliver scalable solutions. My expertise spans Business 
        Intelligence, Data Visualization, Machine Learning,  and databases such as Apache, with tools like R,Python,Java,Tableau, Looker, and GCP. I’m a quick learner who collaborates closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "showcasing my skills, knowledge, and achievements.",
      h2: "Certifications & Publications.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects highlight my skills and experience through real-world examples of my work. Each project includes a brief description, along with links to code repositories and live demos. They demonstrate my ability to tackle complex problems, work with diverse technologies, and manage projects efficiently..`,
    },
  },
};
