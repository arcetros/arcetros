import React from 'react';
import { BsGithub, BsFillEnvelopeFill } from 'react-icons/bs';

interface ISocials {
  icon: React.ReactNode;
  text: string;
}

const Socials = ({ icon, text }: ISocials) => (
  <div className="flex items-center gap-x-2 text-secondary hover:text-black cursor-pointer">
    {icon}
    <span>{text}</span>
  </div>
);

const Footer = () => (
  <footer className="my-8 px-4 lg:px-[7.1875rem]">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4">
      <div>
        <p>
          Created by{' '}
          <span className="hover:underline cursor-pointer">arcetros</span>
        </p>
        <p>Built with Next JS</p>
      </div>
      <div className="flex">
        {/* Change this to next link later */}
        <div className="flex items-center gap-x-4">
          <Socials icon={<BsGithub />} text="arcetros" />
          <Socials icon={<BsFillEnvelopeFill />} text="0arcetros@gmail.com" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
