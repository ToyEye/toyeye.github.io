import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: absolute;

  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primaryLightColor};
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  padding-left: 15px;
  padding-right: 15px;

  li:nth-child(1) {
    color: #0a66c2;
  }

  li:nth-child(3) {
    color: #d24138;
  }

  li:nth-child(4) {
    color: #0a66c2;
  }

  a {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
