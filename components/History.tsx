import React from 'react';

const Item = () => {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-slate-300">
      <div>
        <h3 className="font-secondary text-[1.5rem]">Work Place</h3>
        <span className="text-slate-400">Description</span>
      </div>
      <span className="text-slate-400">Date Time</span>
    </div>
  );
};

const History = () => {
  return (
    <div className="border-b border-black">
      <div className="border-b border-black">
        <div className="py-11 flex items-center px-4 lg:px-[7.1875rem]">
          <h2 className="text-[1.125rem] lg:text-4xl">HISTORY</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 grid-rows-4 h-auto lg:min-h-[40vh]">
        <div className="px-4 lg:px-[7.1875rem] col-span-3 border-r row-span-full border-black">
          <div className="flex flex-col gap-y-16 mt-16">
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <div className="col-span-3 row-span-2">
          <div className="flex flex-col gap-y-14 justify-center p-4 lg:p-10 h-full border-b border-t lg:border-t-0 border-black">
            <h2 className="font-secondary text-[1.5rem]">What&#39;s next?</h2>
            <p>
              I&#39;m currently looking for freelance or full time position
              opportunities, my inbox is always open. Whether for a potential
              project or just to say hi, I&#39;ll try my best to answer your
              email!
            </p>
            <div className="w-fit relative group scale-[1.01] hover:scale-100 transition duration-300 ease-in-out ">
              <button
                type="button"
                className="bg-slate-600 text-gray-50 font-medium font-secondary rounded-md w-full border-slate-700 solid border p-3"
              >
                GET IN TOUCH
              </button>
              <div className="px-4 py-2 bg-slate-800 rounded-md absolute w-full h-full top-0 -z-10 translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-200 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
