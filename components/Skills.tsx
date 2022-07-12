import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-9 h-auto lg:h-screen border-t-none lg:border-t border-black">
      <div className="flex row-span-full col-span-1 lg:col-span-4">
        <div className="m-auto relative min-h-[40vh] lg:min-h-0 h-[70%] w-full">
          <Image
            src="/assembly.png"
            alt="Photo"
            layout="fill"
            objectFit="contain"
            className="p-8"
            priority
          />
        </div>
      </div>
      <div className="flex row-span-full col-span-1 border-l-none lg:border-l border-black lg:col-span-8">
        <div className="flex flex-col lg:flex-row px-4 py-8 items-start gap-x-16 m-auto lg:px-[7.3125rem]">
          <h2 className="text-4xl">Skills</h2>
          <div className="flex flex-col gap-y-[4.375rem]">
            <p className="mt-2 lg:mt-0">
              Digital projects thrive when designers understand how they will be
              built. Just as an architect understands how a structure is
              created, the same should be true on the web.
            </p>
            <div className="container">
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
            </div>
            <div className="container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
