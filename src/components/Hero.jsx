import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import img from "../assets/yera.png";
import pdf from "../assets/yeran.pdf";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Main content container */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left decorative section */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text and image container */}
        <div className="flex flex-row items-center gap-10">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Yeran</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I work on predictive analytics, deep learning, <br className="sm:block hidden" />
              and innovative applications that drive actionable insights.
            </p>
            <a
              href={pdf}
              download="Yeran_Portfolio.pdf" // Optional: specify a default file name for download
              className="inline-block mt-10 px-6 py-3 text-white border-2 border-[#915EFF] bg-transparent rounded-lg hover:bg-[#915EFF] hover:text-white transition-colors">
              Download CV
            </a>



            <div>

            </div>


          </div>

          {/* Centered image next to text */}
          <img
            src={img}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full p-1 purple-glow"
            alt="Yera"
          />

        </div>
      </div>

      {/* Lower section */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
