import React from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsFillEnvelopeFill } from 'react-icons/bs';

interface ISocials {
  icon: React.ReactNode;
  text: string;
}

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

const Socials = ({ icon, text }: ISocials) => (
  <div className="flex items-center gap-x-2 text-secondary hover:text-black cursor-pointer">
    {icon}
    <span>{text}</span>
  </div>
);

const Footer = () => (
  <footer className="my-8 px-4 lg:px-[7.1875rem]">
    <motion.div
      viewport={{ once: true }}
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4"
    >
      <motion.div variants={item}>
        <p>
          Created by{' '}
          <span className="hover:underline cursor-pointer">arcetros</span>
        </p>
        <p>Built with Next JS</p>
      </motion.div>
      <motion.div className="flex" variants={item}>
        {/* Change this to next link later */}
        <div className="flex items-center gap-x-4">
          <Socials icon={<BsGithub />} text="arcetros" />
          <Socials icon={<BsFillEnvelopeFill />} text="0arcetros@gmail.com" />
        </div>
      </motion.div>
    </motion.div>
  </footer>
);

export default Footer;
