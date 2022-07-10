import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Home: NextPage = () => (
  <Layout>
    <p className="text-primary text-2xl">hello, world!</p>
    <h1 className="text-secondary mt-4 w-full">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
        obcaecati!
      </p>
    </h1>
    <p className="text-secondary mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium
      illum voluptate architecto voluptas eum minima, nemo exercitationem
      asperiores reprehenderit.
    </p>
    <p className="text-secondary mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima
      blanditiis itaque earum, maxime quidem voluptates architecto molestiae
      expedita assumenda accusamus id quod sapiente autem ratione officiis
    </p>
    <p className="text-secondary mt-4">
      quibusdam dolores consequuntur iure eum et! Itaque, officia porro sequi in
      facilis officiis atque neque perferendis est reprehenderit rerum excepturi
      animi fuga cupiditate!
    </p>

    <h2 className="text-primary text-2xl mt-[7.3125rem]">
      things i&#39;ve built:{' '}
    </h2>
    <div className="min-h-fit mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[4.75rem]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default Home;
