import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import History from '../components/History';

const Home: NextPage = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Skills />
    <Projects />
    <History />
  </div>
);

export default Home;
