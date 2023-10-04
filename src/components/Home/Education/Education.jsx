import { Section, Container } from '/src/components/reusable';
import {
  EducationStyles,
  EducationList,
  SubTitle,
  EducationPeriod,
} from './Education.styled';

import educationData from './educationData/educationData.json';

const Education = () => {
  return (
    <Section>
      <Container>
        <EducationStyles>EDUCATION</EducationStyles>

        <EducationList>
          {educationData.map(({ name, position, period }) => (
            <li key={name}>
              <SubTitle>{name}</SubTitle>
              <p>{position}</p>
              <EducationPeriod>{period}</EducationPeriod>
            </li>
          ))}
        </EducationList>
      </Container>
    </Section>
  );
};

export default Education;
