import React from 'react';
import { motion } from 'framer-motion';

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

const Item = () => {
  return (
    <motion.div
      variants={item}
      className="flex items-center justify-between pb-4 border-b border-slate-300"
    >
      <div>
        <h3 className="font-secondary text-[1.5rem]">Work Place</h3>
        <span className="text-slate-400">Description</span>
      </div>
      <span className="text-slate-400">Date Time</span>
    </motion.div>
  );
};

const History = () => {
  return (
    <div className="relative">
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
        className="absolute right-0 bottom-0 w-full h-[1px] bg-black z-20"
      />
      <div className="relative">
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
          className="absolute left-0 bottom-0 w-full h-[1px] bg-black z-20"
        />
        <div className="py-11 flex items-center px-4 lg:px-[7.1875rem]">
          <h2 className="text-[1.125rem] lg:text-4xl">HISTORY</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-rows-4 h-auto lg:min-h-[40vh]">
        <div className="relative px-4 lg:px-[7.1875rem] col-span-3 row-span-full">
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
            className="absolute right-0 top-0 w-[1px] bg-black z-20"
          />
          <motion.div
            viewport={{ once: true }}
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-y-16 my-8 lg:my-16"
          >
            <Item />
            <Item />
            <Item />
          </motion.div>
        </div>
        <div className="col-span-3 row-span-2">
          <motion.div
            viewport={{ once: true }}
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative flex flex-col gap-y-8 justify-center p-4 lg:p-16 h-full border-t lg:border-t-0 border-black"
          >
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
              className="absolute right-0 bottom-0 h-[1px] bg-black z-20"
            />
            <motion.h2 variants={item} className="font-secondary text-[1.5rem]">
              What&#39;s next?
            </motion.h2>
            <motion.p variants={item}>
              I&#39;m currently looking for freelance or full time position
              opportunities, my inbox is always open. Whether for a potential
              project or just to say hi, I&#39;ll try my best to answer your
              email!
            </motion.p>
            <motion.div
              variants={item}
              className="w-fit relative group scale-[1.01] hover:scale-100 transition duration-300 ease-in-out "
            >
              <button
                type="button"
                className="bg-slate-600 text-gray-50 font-medium font-secondary rounded-md w-full border-slate-700 solid border p-3"
              >
                GET IN TOUCH
              </button>
              <div className="px-4 py-2 bg-slate-800 rounded-md absolute w-full h-full top-0 -z-10 translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-200 ease-in-out" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default History;
