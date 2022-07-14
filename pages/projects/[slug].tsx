import type { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getProjectFromSlug, getSlugs, ProjectMeta } from '@/src/api';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta;
}

const ProjectPage = ({ project }: { project: MDXPost }) => {
  return (
    <>
      <Head>
        <title>{project.meta.title}</title>
      </Head>
      <div className="max-w-[100ch] m-auto h-full">
        <h1 className="py-8">{project.meta.title}</h1>
        <MDXRemote {...project.source} components={{ Image }} />
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
