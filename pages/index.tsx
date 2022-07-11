import type { NextPage } from 'next';
import Image from 'next/image';
import { BsTwitter, BsGithub, BsEnvelopeFill } from 'react-icons/bs';
import useMobile from '../hooks/useMobile';

const Home: NextPage = () => {
  const { isMobile } = useMobile();

  return (
    <div className="min-h-screen font-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-9 h-auto lg:h-screen">
        <div className="flex row-span-4 col-span-1 lg:col-span-7 border-b border-black">
          <div className="my-auto w-full px-4 py-8 lg:px-[7.1875rem]">
            <h1 className="text-[1.5rem] font-primary">arcetros</h1>
            <h1 className="text-gray-400 mt-2 text-base font-secondary">
              <span>Front End/UI UX Developer</span>
            </h1>
            <div className="flex gap-x-10 mt-12 lg:mt-[6.5625rem] font-secondary">
              <p>ABOUT</p>
              <p>PROJECT</p>
              <p>CONTACT</p>
            </div>
          </div>
        </div>
        <div className="row-span-6 col-span-1 lg:col-span-4 border-b border-r border-l border-black">
          <div className="relative min-h-[40vh] lg:min-h-0 h-full w-full">
            <Image
              src="/download.jpg"
              alt="Photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="order-last lg:order-none row-span-4 col-span-1 lg:col-span-1 border-b border-black my-4 lg:my-0">
          <div className="flex mx-auto h-full gap-x-5 items-center px-4 py-8 lg:py-0 lg:px-0">
            <div className="block lg:hidden">My Socials: </div>
            <div className="flex gap-x-5 mx-0 lg:mx-auto flex-row lg:flex-col h-full justify-evenly">
              {isMobile && <span className="underline">Twitter</span>}
              {!isMobile && (
                <BsTwitter className="mx-auto w-6 lg:w-12 h-6 lg:h-12  text-[#484848]" />
              )}
              {isMobile && <span className="underline">Github</span>}
              {!isMobile && (
                <BsGithub className="mx-auto w-6 lg:w-12 h-6 lg:h-12 text-[#484848]" />
              )}
              {isMobile && <span className="underline">Email</span>}
              {!isMobile && (
                <BsEnvelopeFill className="mx-auto w-6 lg:w-12 h-6 lg:h-12 text-[#484848]" />
              )}
            </div>
          </div>
        </div>
        <div className="flex row-span-5 col-span-1 lg:col-span-7 border-b border-black lg:border-none">
          <div className="px-4 my-8 lg:px-[7.1875rem] lg:my-auto w-full ">
            <p className="text-3xl font-secondary">
              Solving real user problems and create thoughtful and beautiful
              experiences are root of this work
            </p>
          </div>
        </div>
        <div className="flex border-l-0 lg:border-l border-b lg:border-b-0 border-black row-span-3 col-span-1 order-2 lg:order-last lg:col-span-4">
          <div className="container font-primary px-4 my-8 lg:my-auto w-full ">
            <p>Hello! my name is Mufid Arkanu</p>
            <p className="mt-2">
              My love of beautiful websites made me curious about how they were
              made. I adore building accessible, responsive and fast code. Read
              more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
