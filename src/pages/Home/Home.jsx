import { Skills } from '/src/components/Home/Skills/Skills';
import AboutMe from '/src/components/Home/AboutMe';
import { Experience } from '/src/components/Home/Experience/Experience';
import Education from '/src/components/Home/Education/Education';

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
