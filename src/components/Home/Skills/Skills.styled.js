import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  margin: 0 auto;
  display: grid;

  grid-template-columns: 1fr;

  grid-gap: 40px 20px;

  @media screen and (min-width: 768px) {
    width: 760px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const SkillsTitle = styled.h2`
  margin-bottom: 25px;
`;
