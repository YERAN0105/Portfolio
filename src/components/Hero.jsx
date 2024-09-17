import { motion } from "framer-motion";
import { styles } from "../styles";
import img from "../assets/yera.png";
import pdf from "../assets/yeran.pdf";
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // Import icons

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Main content container */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start sm:gap-5 gap-3`}
      >
        {/* Left decoration + heading */}
        <div className="flex flex-row items-start gap-5">
          {/* Left decorative section */}
          <div className="flex flex-col justify-start items-center mt-1">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-40 h-20 violet-gradient" />
          </div>

          {/* Text content */}
          <div>
            {/* Independent heading */}
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Yeran</span>
            </h1>

            {/* Paragraph + image aligned */}
            <div className="flex flex-row items-start gap-5 mt-4">
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I work on predictive analytics, deep learning, <br className="sm:block hidden" />
                and innovative applications that drive actionable insights.
              </p>

              {/* Image aligned with the paragraph */}
              <img
                src={img}
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full p-1 purple-glow"
                alt="Yera"
              />
            </div>

            <a
              href={pdf}
              download="Yeran_Portfolio.pdf"
              className="inline-block mt-10 px-6 py-3 text-white border-2 border-[#915EFF] bg-transparent rounded-lg hover:bg-[#915EFF] hover:text-white transition-colors">
              Download CV
            </a>
            {/* Social media icons */}
            <div className="mt-4 md:mt-5 flex gap-4">
              <a href="https://github.com/YERAN0105" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl md:text-3xl p-0 hover:text-[#915EFF] hover:glow-effect rounded-full fill-current" />
              </a>
              <a href="https://www.linkedin.com/in/yeran-fernando-1a00772bb/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl md:text-3xl hover:text-[#915EFF] hover:glow-effect fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="absolute bottom-16 sm:bottom-32 w-full flex justify-center items-center">
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
