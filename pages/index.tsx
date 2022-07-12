import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Home: NextPage = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Skills />
  </div>
);

export default Home;
