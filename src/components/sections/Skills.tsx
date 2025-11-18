// src/components/sections/Skills.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css"; // ✅ FIXED IMPORT

const categories = [
  {
    title: "Analytics & Machine Learning",
    bullets: [
      "Python (Pandas, NumPy, scikit-learn, TensorFlow/Keras)",
      "Data Cleaning & Preprocessing",
      "Feature Engineering",
      "Exploratory Data Analysis (EDA)",
      "Supervised & Unsupervised Learning",
      "Model Tuning & Evaluation (GridSearch, Cross-Validation)"
    ]
  },
  {
    title: "Business Intelligence & Databases",
    bullets: [
      "Power BI (DAX, Power Query)",
      "Tableau (Dashboards & Storytelling)",
      "SQL (PostgreSQL, MySQL)",
      "Data Modeling & ETL Pipelines",
      "Reporting Automation"
    ]
  },
  {
    title: "Data Engineering & Tools",
    bullets: [
      "Git / GitHub (Version Control)",
      "Jupyter / Google Colab",
      "API Integration & Flask / Gradio prototypes",
      "Cloud Deployment (Hugging Face Spaces, Render)",
      "Unity & Blender (AR/VR) — basic"
    ]
  },
  {
    title: "Domain Knowledge",
    bullets: [
      "Marketing & Customer Insights",
      "Operations & Supply Chain Analytics",
      "Fraud & Risk Analytics",
      "Finance & Revenue Reporting",
      "Healthcare & Clinical Data Analysis"
    ]
  }
];

const Card = ({ title, bullets }: { title: string; bullets: string[] }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={styles.cardWrapper}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 18) * -1;
        const rotateY = (x - centerX) / 18;
        setRotate({ x: rotateX, y: rotateY });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <motion.article
        className={styles.card}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        <div className={styles.cardReflection}></div>

        <div className={styles.cardInner}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <ul className={styles.list}>
            {bullets.map((b) => (
              <li key={b} className={styles.listItem}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section className={styles.wrap} id="skills">
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>
          A snapshot of my data science & engineering toolkit.
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map((c) => (
          <Card key={c.title} title={c.title} bullets={c.bullets} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
