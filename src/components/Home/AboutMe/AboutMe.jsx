import { Section, Container } from '/src/components/reusable/';
import { Avatar, Greetings, WhoI } from './AboutMe.styled';

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
      </Container>
    </Section>
  );
};

export default AboutMe;
