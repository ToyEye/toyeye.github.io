import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-left: 10px;
  padding-top: 10px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1260px) {
    width: 100%;
    padding-left: 16px;
    padding-top: 16px;
  }
`;
