import { Section, Container } from '/src/components/reusable/';
import { Avatar, Greetings, WhoI, About, DownloadLink } from './AboutMe.styled';

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Avatar src="https://placehold.co/300x300?text=Hello+World" />
        <Greetings> Hello! My name is Alex</Greetings>
        <WhoI>
          I`m a front-end web developer. <br /> I can write clean code and
          pixel-perfect design.
        </WhoI>
        <About>
          I have good knowledge of HTML, CSS, JavaScript,React and NodeJS. In
          addition, I have hands-on experience with Agile/Scrum. course work
          methodology
        </About>

        <DownloadLink download href="/src/assets/cv.pdf">
          Download CV
        </DownloadLink>
      </Container>
    </Section>
  );
};

export default AboutMe;
