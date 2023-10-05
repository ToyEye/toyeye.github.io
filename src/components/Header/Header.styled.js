import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;

  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primaryLightColor};

  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
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
    color: #609dda;
  }

  a {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const BurgerBtn = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: transparent;

  border: none;

  transition: 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  &:is(:focus, :hover) {
    transform: scale(1.2);
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
