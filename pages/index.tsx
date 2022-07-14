import { getAllProjects, ProjectMeta } from '@/src/api';
import Hero from '@/src/components/Hero';
import Skills from '@/src/components/Skills';
import Projects from '@/src/components/Projects';
import History from '@/src/components/History';
import Footer from '@/src/components/Footer';

const Home = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Skills />
      <Projects projects={projects} />
      <History />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const projects = getAllProjects()
    .slice(0, 3)
    .map(project => project.meta);

  return { props: { projects } };
}
