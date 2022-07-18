import { motion } from 'framer-motion';
import { FiTwitter, FiGithub, FiInbox } from 'react-icons/fi';
import useMobile from '../hooks/useMobile';

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
      delay: 1.4
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

const socials = [
  {
    name: 'Twitter',
    icon: <FiTwitter className="mx-auto w-7 h-7 text-[#484848]" />
  },
  {
    name: 'Github',
    icon: <FiGithub className="mx-auto w-7 h-7 text-[#484848]" />
  },
  {
    name: 'Email',
    icon: <FiInbox className="mx-auto w-7 h-7 text-[#484848]" />
  }
];

const Hero = () => {
  const { isMobile } = useMobile();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-9 h-auto lg:h-screen lg:max-screen">
      <div className="relative flex row-span-4 col-span-1 lg:col-span-7">
        <motion.div
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          className="absolute h-[1px] bottom-0 bg-black"
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="my-auto w-full px-4 lg:px-[7.1875rem]"
        >
          <motion.div variants={item}>
            <h1 className="text-[1.5rem] font-primary">arcetros</h1>
            <h1 className="text-gray-600 mt-2 text-base font-headline">
              <span>front-end/ui ux developer</span>
            </h1>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-x-10 mt-12 lg:mt-[6.5625rem] font-headline"
          >
            <motion.h1 id="item-1" variants={item}>
              ABOUT
            </motion.h1>
            <motion.div id="item-2" variants={item}>
              PROJECTS
            </motion.div>
            <motion.h2 id="item-3" variants={item}>
              CONTACTS
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative row-span-6 col-span-1 lg:col-span-4 ">
        <motion.div
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          className="absolute h-[0.5px] -bottom-[0.5px] right-0 bg-black z-10"
        />
        <motion.div
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }}
          initial={{ height: '0%' }}
          animate={{ height: '100%' }}
          className="absolute w-[0.5px] top-0 bg-black z-10 hidden lg:block"
        />
        <motion.div
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }}
          initial={{ height: '0%' }}
          animate={{ height: '100%' }}
          className="absolute w-[0.5px] top-0 right-0 bg-black z-10"
        />
        <motion.img
          layoutId="heroImg"
          src="/download.jpg"
          alt="adsf"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative order-last lg:order-none row-span-4 col-span-1 lg:col-span-1 my-4 lg:my-0">
        <motion.div
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          className="absolute h-[0.5px] -bottom-[0.5px] right-0 bg-black z-10 hidden lg:block"
        />
        <div className="flex mx-auto h-full gap-x-5 items-center px-4 py-8 lg:py-0 lg:px-0">
          <div className="block lg:hidden">My Socials: </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex gap-x-5 mx-0 lg:mx-auto flex-row lg:flex-col h-full justify-evenly font-headline"
          >
            {socials.map(social => {
              return isMobile ? (
                <span key={social.name} className="underline">
                  {social.name}
                </span>
              ) : (
                <motion.div variants={item} key={social.name}>
                  {social.icon}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="flex row-span-5 col-span-1 lg:col-span-7 border-b border-black lg:border-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="px-4 my-8 lg:px-[7.1875rem] w-full lg:my-auto"
        >
          <motion.p
            variants={item}
            className="text-primary text-3xl font-secondary"
          >
            Solving real user problems and create thoughtful and beautiful
            experiences are root of this work
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex mt-12 gap-x-4"
          >
            <motion.div
              variants={item}
              className="w-fit relative group scale-[1.01] hover:scale-100 transition duration-300 ease-in-out h-full"
            >
              <button
                type="button"
                className="bg-slate-600 text-gray-50 font-medium font-headline rounded-md w-full border-slate-700 solid border p-3"
              >
                GET IN TOUCH
              </button>
              <div className="px-4 py-2 bg-slate-800 rounded-md absolute w-full h-full top-0 -z-10 translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-200 ease-in-out" />
            </motion.div>
            <motion.div
              variants={item}
              className="w-fit relative group scale-[1.01] hover:scale-100 transition duration-300 ease-in-out h-full"
            >
              <button
                type="button"
                className="bg-white text-slate-800 font-medium font-headline rounded-md w-full border-slate-800 solid border p-3"
              >
                SEE PROJECTS
              </button>
              <div className="px-4 py-2 bg-slate-800 rounded-md absolute w-full h-full top-0 -z-10 translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-200 ease-in-out" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative flex row-span-3 col-span-1 order-2 lg:order-last lg:col-span-4">
        <motion.div
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6
          }}
          initial={{ height: '0%' }}
          animate={{ height: '100%' }}
          className="absolute w-[0.5px] bottom-0 left-0 bg-black z-10 hidden lg:block"
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="container font-primary px-4 my-8 lg:m-auto"
        >
          <motion.div variants={item}>
            <p>Hi! I&#39;m Mufid.</p>
            <p className="mt-4">
              I&#39;am a{' '}
              <strong className="font-headline">front-end developer</strong>{' '}
              with a passion of building accessible, responsive and fast
              performant JAMstack sites !
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
