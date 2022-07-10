import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const ProjectCard = () => (
  <div className="w-full border border-secondary min-h-[228px] max-w-none lg:max-w-[18.3125rem] shadow-box max-h-max">
    <div className="flex flex-col justify-between px-5 py-[2.125rem] h-full">
      <div className="flex items-center justify-between">
        <div className="w-20 h-20 bg-secondary rounded-[20px]" />
        <BsThreeDots className="w-6 h-6 text-secondary" />
      </div>
      <div className="flex flex-col gap-y-1">
        <h2>Project Name</h2>
        <p className="text-xs">Descriptions</p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
