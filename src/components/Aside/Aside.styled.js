import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AsideStyled = styled.aside`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 400px;
    height: 100vh;
    padding: 150px 100px;

    background-color: ${({ theme }) => theme.colors.asideBgColor};
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
