import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => (
  <Layout>
    <p className="text-primary text-2xl">hello, world!</p>
    <h1 className="text-secondary mt-4 w-full">
      <p>
        my name is Mufid Arkanu and i&#39;m a front end developer based on
        Indonesia
      </p>
    </h1>
    <p className="text-secondary mt-4">
      i mainly work within the React ecosystem, i&#39;ve been sharpen my skills
      and building projects to apply what i&#39;ve learnt.
    </p>

    <h2 className="text-primary text-2xl mt-[7.3125rem]">
      things i&#39;ve built:{' '}
    </h2>
    <div className="min-h-fit mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 place-content-evenly  gap-x-4 gap-y-[4.75rem]">
        <div className="border border-secondary min-h-[228px] max-w-[18.3125rem] shadow-box max-h-max">
          t
        </div>
        <div className="border border-secondary min-h-[228px] max-w-[18.3125rem] shadow-box max-h-max">
          t
        </div>
        <div className="border border-secondary min-h-[228px] max-w-[18.3125rem] shadow-box max-h-max">
          t
        </div>
        <div className="border border-secondary min-h-[228px] max-w-[18.3125rem] shadow-box max-h-max">
          t
        </div>
        <div className="border border-secondary min-h-[228px] max-w-[18.3125rem] shadow-box max-h-max">
          t
        </div>
        <div className="border border-secondary min-h-[228px] max-w-[18.3125rem] shadow-box max-h-max">
          t
        </div>
      </div>
    </div>
    <footer className="mt-[9.875rem]">
      <div className="flex justify-between items-center">
        <div>
          <p>Created by arcetros</p>
          <p>Built with Next JS</p>
        </div>
        <div>socials</div>
      </div>
    </footer>
  </Layout>
);

export default Home;
