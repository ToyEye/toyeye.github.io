import styled from 'styled-components';

export const ExpTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const WorkList = styled.ul`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 30px;

  @media screen and (min-width: 768px) {
    width: 760px;
    grid-template-columns: 1fr 1fr;
  }
`;
