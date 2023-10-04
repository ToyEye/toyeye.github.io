import Work from './Work/Work';
import { Section, Container } from '/src/components/reusable';

import paritet from './Work/workData/paritet.json';
import goit from './Work/workData/goit.json';

export const Experience = () => {
  return (
    <Section>
      <Container>
        <Work work={goit} />
        <Work work={paritet} />
      </Container>
    </Section>
  );
};
