import styled from 'styled-components';

export const EducationStyles = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const EducationList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  list-style-position: inside;
  list-style: circle;
  color: ${({ theme }) => theme.colors.accentColorOpacity};
`;

export const SubTitle = styled.h4`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.primaryDarkColor};
`;

export const EducationPeriod = styled.p`
  font-size: 12px;
`;
