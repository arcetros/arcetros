import { useState } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { getAllProjects, ProjectMeta } from '@/src/api';
import Hero from '@/src/components/Hero';
import Skills from '@/src/components/Skills';
import Projects from '@/src/components/Projects';
import History from '@/src/components/History';
import Footer from '@/src/components/Footer';

const Home = ({ projects }: { projects: ProjectMeta[] }) => {
  const [isLoading, setIsLoading] = useState(true);

  const container = {
    show: {
      transition: {
        staggerChildren: 1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 0.75
      }
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: 'easeInOut',
        duration: 0.8
      }
    }
  };

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6
      }
    }
  };

  return (
    <LayoutGroup key="test">
      <AnimatePresence>
        <div className="overflow-x-hidden">
          {isLoading ? (
            <motion.div
              variants={container}
              onAnimationComplete={() => setIsLoading(false)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="h-screen flex flex-col items-center justify-center w-full"
            >
              <motion.img
                src="/download.jpg"
                variants={itemMain}
                initial="hidden"
                animate="show"
                exit="exit"
                alt="Photo"
                layoutId="heroImg"
                className="w-32 h-32 z-0"
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              />
              <motion.h1 variants={item} className="font-headline mt-2">
                hello :)
              </motion.h1>
            </motion.div>
          ) : (
            <>
              <Hero />
              <Skills />
              <Projects projects={projects} />
              <History />
              <Footer />
            </>
          )}
        </div>
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default Home;

export async function getStaticProps() {
  const projects = getAllProjects()
    .slice(0, 3)
    .map(project => project.meta);

  return { props: { projects } };
}
