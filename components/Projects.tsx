import React from 'react';

const FeautredItem = () => {
  return (
    <div className="border-t border-black grid grid-cols-1 lg:grid-cols-12 grid-rows-9 h-auto lg:min-h-[50vh]">
      <div className="flex flex-col row-span-full col-span-1 lg:col-span-7 border-r border-black">
        <div className="w-full ml-auto pl-0 lg:pl-[7.1875rem]">
          <div className="mt-[3.125rem] px-4 lg:px-0 pb-4 border-b border-black">
            <span className="font-secondary">PROJECT FILE</span>
          </div>
        </div>
        <div className="w-full ml-auto pl-0  lg:pl-[7.1875rem]">
          <div className="mt-4 pb-4 border-b px-4 lg:px-0 border-black">
            <span className="font-secondary">TITLE</span>
            <h2 className="text-[2.25rem] pr-0 lg:pr-2">Project Name</h2>
          </div>
        </div>
        <div className="w-full ml-auto pl-0  lg:pl-[7.1875rem]">
          <div className="mt-4 pb-4 border-b px-4 lg:px-0 border-black">
            <span className="font-secondary">STACK</span>
            <h2 className="text-[1.5rem] pr-0 lg:pr-2">
              stack1, stack2, stack3, stack4
            </h2>
          </div>
        </div>
        <div className="w-full ml-auto mb-[3.125rem]  pl-0 lg:px-0 lg:pl-[7.1875rem]">
          <div className="mt-4 pb-4 px-4 lg:px-0 border-black">
            <span className="font-secondary">INTRODUCTION</span>
            <p className="text-base pr-0 lg:pr-2 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, incidunt architecto! Autem enim ipsa perspiciatis
              dolorum nam, sit inventore. Laudantium voluptates sit non autem?
              Dolorum, error hic animi laboriosam in iure. Officia harum
              recusandae vel possimus id, animi consequatur, veritatis autem ex
              labore corrupti velit alias consectetur fuga inventore quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="border-t border-black">
      <div className="border-b border-black">
        <div className="py-11 flex items-center justify-between px-4 lg:px-[7.1875rem]">
          <h2 className="text-[1.125rem] lg:text-4xl">FEATURED PROJECTS</h2>
          <span className="underline text-xs lg:text-[1.5rem]">SEE ALL</span>
        </div>
        <div className="border-b border-black">
          <FeautredItem />
          <FeautredItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;
