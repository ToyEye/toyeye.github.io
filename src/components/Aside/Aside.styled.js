import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AsideStyled = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 150px 50px;

  transform: translateX(-100%);
  transition: 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  background-color: ${({ theme }) => theme.colors.asideBgColor};

  &.active {
    transform: translateX(0);
  }

  @media screen and (min-width: 1280px) {
    position: fixed;
    display: block;
    width: 270px;
    height: 100vh;
    transform: translateX(0);
    padding: 150px 100px;
  }
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;

  line-height: 1.17;

  color: ${({ theme }) => theme.colors.primaryLightColor};
`;

export const Position = styled(Name)`
  margin-bottom: 100px;

  font-size: 20px;
  font-weight: 500;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  width: 200px;
  font-size: 26px;
  line-height: 1.17;
  color: ${({ theme }) => theme.colors.primaryLightColor};

  transition: 350ms cubic-bezier(0.19, 1, 0.22, 1);

  &:is(:hover, :focus) {
    transform: scale(1.2);
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 50%;
    height: 1px;
    transform: scale(0);
    background-color: ${({ theme }) => theme.colors.primaryLightColor};

    transition: 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &.active {
    &::after {
      transform: scale(1);
    }
  }
`;
