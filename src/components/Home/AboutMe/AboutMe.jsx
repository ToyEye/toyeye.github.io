import { Section, Container } from '/src/components/reusable/';
import { Avatar, Greetings } from './AboutMe.styled';

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Avatar src="https://placehold.co/300x300?text=Hello+World" />
        <Greetings> Hello! My name is Alex</Greetings>
      </Container>
    </Section>
  );
};

export default AboutMe;
