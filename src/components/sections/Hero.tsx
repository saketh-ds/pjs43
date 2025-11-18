
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import herobg from "../../assets/herobg.png"; // ✅ Import the background image

const Hero = () => {
  return (
    <section
      className={`relative mx-auto h-screen w-full bg-cover bg-no-repeat bg-center`} // ✅ Tailwind background classes
      style={{ backgroundImage: `url(${herobg})` }} // ✅ Apply background image
    >
      {/* ====== Hero Content ====== */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left vertical line and dot */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* Main text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      {/* ====== 3D Computer Model ====== */}
      <ComputersCanvas />

      {/* Scroll indicator removed ✅ */}
    </section>
  );
};

export default Hero;
