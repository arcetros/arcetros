/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getProjectFromSlug, getSlugs, ProjectMeta } from '@/src/api';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta;
}

const components = {
  h2: (props: any) => <h2 className="text-2xl my-4 underline" {...props} />,
  p: (props: any) => (
    <p className="my-4" {...props}>
      {props.children}
    </p>
  )
};

const ProjectPage = ({ project }: { project: MDXPost }) => {
  return (
    <>
      <Head>
        <title>{project.meta.title}</title>
      </Head>
      <div className="flex flex-col w-full">
        <div className="w-full max-w-[966px] mx-auto py-8">
          <Link href="/">
            <span className="hover:underline text-gray-500 cursor-pointer">
              go back home
            </span>
          </Link>
          <h1 className="font-secondary text-gray-800 text-5xl mt-4">
            {project.meta.title}
          </h1>
          <p className="my-4">{project.meta.introduction}</p>
          <table>
            <tbody>
              <tr>
                <th className="text-left pr-4">stack:</th>
                <td>{project.meta.stacks.join(', ')}</td>
              </tr>

              <tr>
                <th className="text-left pr-4">code:</th>
                <td>
                  <Link href={project.meta.code} passHref>
                    <a target="_blank" className="underline">
                      Visit Repository
                    </a>
                  </Link>
                </td>
              </tr>

              <tr>
                <th className="text-left pr-4">live site:</th>
                <td>
                  <Link href={project.meta.live} passHref>
                    <a target="_blank" className="underline">
                      Visit {project.meta.title}
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-t border-black">
          <div className="max-w-[966px] py-8 mx-auto">
            <MDXProvider components={components}>
              <MDXRemote {...project.source} components={{ Image }} />
            </MDXProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getProjectFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ]
    }
  });

  return { props: { project: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
