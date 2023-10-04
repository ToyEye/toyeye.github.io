import { Skills } from '/src/components/Home/Skills/Skills';
import AboutMe from '/src/components/Home/AboutMe';
import { Experience } from '/src/components/Home/Experience/Experience';

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
