// src/components/sections/Works.tsx

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const getVideoEmbedUrl = (videoUrl: string) => {
  try {
    const url = new URL(videoUrl);
    if (url.hostname === "loom.com" || url.hostname.endsWith(".loom.com")) {
      url.pathname = url.pathname.replace(/^\/share\//, "/embed/");
      return url.toString();
    }
  } catch {
    // Keep non-URL video sources unchanged so the iframe can handle them.
  }

  return videoUrl;
};

// -------------------------------
// PROJECT CARD
// -------------------------------
type ProjectCardProps = {
  index: number;
  onOpen: () => void;
} & TProject;

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  onOpen,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-[330px] cursor-pointer"
      onClick={onOpen}
    >
      <Tilt
        tiltEnable
        glareEnable
        glareColor="#915EFF"
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        className="w-full h-full"
      >
        <div
          className="
            bg-[#1a1a22] border border-[#2a2a35]
            rounded-2xl p-5
            w-[330px] h-[520px]
            flex flex-col justify-between
            shadow-xl
            hover:shadow-[0_0_30px_#915EFF]/40
            transition-all duration-300
          "
        >
          {/* IMAGE */}
          <div className="h-[230px] w-full overflow-hidden rounded-xl">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="mt-4 flex-1">
            <h3 className="text-[22px] font-bold text-white">{name}</h3>
            <p className="text-secondary text-[14px] mt-2">{description}</p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} text-[14px]`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {/* MORE DETAILS */}
          <p className="text-[13px] text-[#915EFF] mt-4 font-semibold">
             Click for more details
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

// -------------------------------
// WORKS SECTION
// -------------------------------
const Works = () => {
  const [activeProject, setActiveProject] = useState<TProject | null>(null);

  const handlePrev = () => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.name === activeProject.name);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setActiveProject(projects[prevIndex]);
  };

  const handleNext = () => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((p) => p.name === activeProject.name);
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    setActiveProject(projects[nextIndex]);
  };

  return (
    <>
      {/* HEADER */}
      <Header useMotion={true} {...config.sections.works} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.works.content}
      </motion.p>

      {/* GRID */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
            onOpen={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* ---------------------------------------------
          PROJECT MODAL
      ---------------------------------------------- */}
      {activeProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[2000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            key={activeProject.name}
            initial={{ opacity: 0, y: 60 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", duration: 0.6 },
            }}
            className="
              bg-[#1d1d25] border border-[#915EFF]/40
              shadow-[0_0_40px_#915EFF]
              rounded-2xl 
              p-7 w-full max-w-[750px] relative
              max-h-[90vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute right-5 top-4 text-white text-2xl hover:text-[#915EFF] transition"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            {/* MAIN IMAGE */}
            <img
              src={activeProject.image}
              className="w-full h-[220px] rounded-xl object-cover mt-6"
            />

            {/* VIDEO SECTION */}
            {activeProject.videoUrl && (
              <div className="mt-5 w-full rounded-xl overflow-hidden relative pb-[56.25%]">
                {activeProject.videoUrl.endsWith(".mp4") ? (
                  <video
                    src={activeProject.videoUrl}
                    controls
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  />
                ) : (
                  <iframe
                    src={getVideoEmbedUrl(activeProject.videoUrl)}
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            )}

            {/* TITLE */}
            <h2 className="text-white text-3xl font-bold mt-5">
              {activeProject.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-secondary mt-3 text-[15px] leading-[22px]">
              {activeProject.longDescription || activeProject.description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              {activeProject.reportLink && (
                <button
                  className="bg-gray-700 hover:bg-gray-600 w-full py-2 rounded-lg text-white"
                  onClick={() => window.open(activeProject.reportLink!, "_blank")}
                >
                  Report
                </button>
              )}

              {activeProject.githubLink && (
                <button
                  className="
                    bg-[#24292f] hover:bg-[#333]
                    w-full py-2 rounded-lg text-white
                    flex items-center justify-center gap-2
                  "
                  onClick={() => window.open(activeProject.githubLink!, "_blank")}
                >
                  <img src={github} className="w-4 h-4" /> GitHub
                </button>
              )}
            </div>

            {/* NEXT / PREV */}
            <div className="flex justify-between items-center mt-8">
              <button
                className="bg-[#915EFF]/30 hover:bg-[#915EFF]/50 px-5 py-2 rounded-lg text-white font-semibold"
                onClick={handlePrev}
              >
                ← Previous
              </button>

              <button
                className="bg-[#915EFF]/30 hover:bg-[#915EFF]/50 px-5 py-2 rounded-lg text-white font-semibold"
                onClick={handleNext}
              >
                Next →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
