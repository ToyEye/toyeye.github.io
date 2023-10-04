import Work from './Work/Work';
import { Section, Container } from '/src/components/reusable';

import { ExpTitle, WorkList } from './Experience.styled';

import paritet from './Work/workData/paritet.json';
import goit from './Work/workData/goit.json';

const workExp = [
  { id: 'goit', work: goit },
  { id: 'paritet', work: paritet },
];

export const Experience = () => {
  return (
    <Section>
      <Container>
        <ExpTitle>WORK EXPERIENCE</ExpTitle>

        <WorkList>
          {workExp.map(({ id, work }) => (
            <Work key={id} work={work} />
          ))}
        </WorkList>
      </Container>
    </Section>
  );
};
