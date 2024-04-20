import { motion } from "framer-motion";
import { heroImages } from "../constants";
import { styles } from "../styles";


const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`relative inset-0 top-[120px] max-w-7xl  mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-columns-3xs justify-center items-center mt-5'>
          <h1 className={`${styles.heroHeadText} text-[#FF66C4]`}>
            Joie Cafe Hero
          </h1>
        </div>
        {/* slideshow */}
        <div className=''>
        </div>
      </div>

      {/* slider */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#FF66C4] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-5 rounded-full bg-[#FF66C4] mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  );
};

export default Hero;
