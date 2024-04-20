import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant, slideIn } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <div className='xl:mt-0 xl:flex-row flex-col flex gap-10 overflow-hidden'>
        <h2 className={`${styles.sectionHeadText} text-[#E882C1]`}>
          Joie Cafe About
        </h2>
        <p className='text-[#FF66C4]'>
          We are Joie: Asian-Owned, Women-Owned, and LGBQT+ Owned Coffee Shop in Seattle, WA
          <br />
          At Joie we want to bring “cups of joy” to everyone with our Vietnamese Coffee. We hope to bring happiness to others with our presence in Ballard. We know a lot of people have been waiting for us to open since early Fall of 2023. We went through some tough obstacles to get here and finally get to open our doors to everyone in May 2024. We started with a unique vision for a coffee shop and getting to share it with others is truly a dream come true. We can’t wait to meet you all!

        </p>
      </div >
    </>
  );
};

export default SectionWrapper(About, "about");