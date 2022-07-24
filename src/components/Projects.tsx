/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectMeta } from '@/src/api';

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

const FeautredItem = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <>
      {projects.map(project => (
        <div className="relative grid grid-cols-1 lg:grid-cols-12  h-auto lg:min-h-[50vh]">
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
            className="absolute left-0 top-0 w-full h-[1px] bg-black z-20"
          />
          <motion.div
            variants={container}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
            className="relative flex flex-col row-span-full col-span-1 lg:col-span-7"
          >
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
              className="absolute right-0 top-0 h-full w-[1px] bg-black"
            />
            <motion.div
              variants={item}
              className="w-full ml-auto pl-0 lg:pl-[7.1875rem]"
            >
              <div className="mt-[3.125rem] px-4 lg:px-0 pb-4 border-b border-black">
                <span className="font-secondary">PROJECT FILE</span>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="w-full ml-auto pl-0  lg:pl-[7.1875rem]"
            >
              <div className="mt-4 pb-4 border-b px-4 lg:px-0 border-black">
                <span className="font-secondary">TITLE</span>
                <h2 className="text-[2.25rem] pr-0 lg:pr-2">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="flex w-full ml-auto pl-0  lg:pl-[7.1875rem]"
            >
              <div className="w-1/2 p-4 border-b lg:px-0 border-black">
                <span className="font-secondary">STACK</span>
                <h2 className="text-[1.5rem] pr-0 lg:pr-2">
                  {project.stacks.join(', ')}
                </h2>
              </div>
              <div className="w-1/2 p-4 border-b border-l lg:px-0 border-black">
                <div className="block ml-4">
                  <h2 className="font-secondary">Visit Site</h2>
                  <Link href={project.live} passHref>
                    <a
                      target="_blank"
                      className="text-[1.5rem] pr-0 lg:pr-2 underline"
                    >
                      Visit {project.title}
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="w-full ml-auto mb-[3.125rem]  pl-0 lg:px-0 lg:pl-[7.1875rem]"
            >
              <div className="mt-4 pb-4 px-4 lg:px-0 border-black">
                <span className="font-secondary">INTRODUCTION</span>
                <p className="text-base pr-0 lg:pr-2 mt-4">
                  {project.introduction}{' '}
                  <span className="ml-2 font-bold hover:underline">
                    <Link href={`/projects/${project.slug}`}>Read More</Link>
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={container}
            initial="hidden"
            whileInView="show"
            className="col-span-5"
          >
            <motion.div
              variants={item}
              className="relative min-h-[40vh] lg:min-h-0 h-full w-full"
            >
              <Image
                src={project.img}
                alt="Test"
                layout="fill"
                objectFit="cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </>
  );
};

const Projects = ({ projects }: { projects: ProjectMeta[] }) => {
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
        className="absolute right-0 top-0 w-full h-[1px] bg-black z-20"
      />
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

      <motion.div
        viewport={{ once: true }}
        variants={container}
        initial="hidden"
        whileInView="show"
        className="py-11 flex items-center justify-between px-4 lg:px-[7.1875rem]"
      >
        <motion.h2 variants={item} className="text-[1.125rem] lg:text-4xl">
          FEATURED PROJECTS
        </motion.h2>
        <motion.span
          variants={item}
          className="underline text-xs lg:text-[1.5rem]"
        >
          SEE ALL
        </motion.span>
      </motion.div>
      <FeautredItem projects={projects} />
    </div>
  );
};

export default Projects;
