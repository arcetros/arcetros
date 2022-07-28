import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      when: 'beforeChildren',
      staggerChildren: 0.2,
      duration: 0.2,
      delay: 0.5
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const Skills = () => {
  return (
    <div className="mt-[0.1px] relative grid grid-cols-1 lg:grid-cols-12 min-h-fit lg:min-h-screen">
      <motion.div
        initial={{ width: '0%' }}
        viewport={{ once: true }}
        whileInView={{
          width: '100%',
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }
        }}
        className="absolute top-0 left-0 bg-black h-[1px]"
      />
      <motion.div
        variants={container}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        exit="exit"
        className="hidden lg:flex col-span-1 lg:col-span-4"
      >
        <motion.div
          variants={item}
          className="m-auto relative min-h-[40vh] h-[70%] w-full"
        >
          <Image
            layout="fill"
            src="/assembly.png"
            alt="Test"
            objectFit="contain"
            className="p-8"
          />
        </motion.div>
      </motion.div>
      <div className="relative flex col-span-1  lg:col-span-8">
        <motion.div
          initial={{ height: '0%' }}
          viewport={{ once: true }}
          whileInView={{
            height: '100%',
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6
            }
          }}
          className="left-0 top-0 w-[1px] bg-black hidden lg:block"
        />
        <motion.div
          variants={container}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          exit="exit"
          className="flex flex-col lg:flex-row px-4 py-8 items-start gap-x-16 m-auto lg:px-[7.3125rem]"
        >
          <motion.h2 variants={item} className="text-4xl">
            Skills
          </motion.h2>
          <motion.div
            variants={item}
            className="flex flex-col mt-8 lg:mt-0 gap-y-8 lg:gap-y-[4.375rem]"
          >
            <p className="mt-2 lg:mt-0">
              Digital projects thrive when designers understand how they will be
              built. Just as an architect understands how a structure is
              created, the same should be true on the web.
            </p>
            <div className="block lg:hidden m-auto relative min-h-[40vh] h-[70%] w-full">
              <img
                src="/assembly.png"
                alt="Test"
                className="p-8 object-cover"
              />
            </div>
            <motion.div variants={item}>
              <div className="flex justify-between items-center border-b border-black">
                <h3 className="font-secondary text-2xl">DIGITAL</h3>
                <span>1</span>
              </div>
              <p className="mt-2">
                I design with usability in mind, striving to create projects
                that are accessible to all. I&#39;m comfortable with most design
                tools, but I often prefer prototyping directly in a web browser.
                I&#39;m passionate about interaction animations.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <div className="flex justify-between items-center border-b border-black">
                <h3 className="font-secondary text-2xl">DEVELOPMENT</h3>
                <span>1</span>
              </div>
              <p className="mt-2">
                Developing a conceptual idea into something engaging and
                functional can be equally satisfying. My approach is project
                dependant, aiming to select the right tools for the job, rather
                than what&#39;s popular at the time.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
