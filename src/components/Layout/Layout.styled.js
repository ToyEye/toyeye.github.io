import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  padding-top: 50px;

  main {
    width: 100%;

    @media screen and (min-width: 1280px) {
      margin-left: 470px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-top: 0;
  }
`;
