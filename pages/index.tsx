import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home: NextPage = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Skills />
    <Projects />
  </div>
);

export default Home;
