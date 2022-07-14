/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectMeta } from '@/src/api';

const FeautredItem = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <>
      {projects.map(project => (
        <div className="border-t border-black grid grid-cols-1 lg:grid-cols-12  h-auto lg:min-h-[50vh]">
          <div className="flex flex-col row-span-full col-span-1 lg:col-span-7 border-r border-black">
            <div className="w-full ml-auto pl-0 lg:pl-[7.1875rem]">
              <div className="mt-[3.125rem] px-4 lg:px-0 pb-4 border-b border-black">
                <span className="font-secondary">PROJECT FILE</span>
              </div>
            </div>
            <div className="w-full ml-auto pl-0  lg:pl-[7.1875rem]">
              <div className="mt-4 pb-4 border-b px-4 lg:px-0 border-black">
                <span className="font-secondary">TITLE</span>
                <h2 className="text-[2.25rem] pr-0 lg:pr-2">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
              </div>
            </div>
            <div className="flex w-full ml-auto pl-0  lg:pl-[7.1875rem]">
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
            </div>
            <div className="w-full ml-auto mb-[3.125rem]  pl-0 lg:px-0 lg:pl-[7.1875rem]">
              <div className="mt-4 pb-4 px-4 lg:px-0 border-black">
                <span className="font-secondary">INTRODUCTION</span>
                <p className="text-base pr-0 lg:pr-2 mt-4">
                  {project.introduction}{' '}
                  <span className="ml-2 font-bold hover:underline">
                    <Link href={`/projects/${project.slug}`}>Read More</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="relative min-h-[40vh] lg:min-h-0 h-full w-full">
              <Image
                src={project.img}
                alt="Test"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Projects = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <div className="border-t border-black">
      <div className="border-b border-black">
        <div className="py-11 flex items-center justify-between px-4 lg:px-[7.1875rem]">
          <h2 className="text-[1.125rem] lg:text-4xl">FEATURED PROJECTS</h2>
          <span className="underline text-xs lg:text-[1.5rem]">SEE ALL</span>
        </div>
        <FeautredItem projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
