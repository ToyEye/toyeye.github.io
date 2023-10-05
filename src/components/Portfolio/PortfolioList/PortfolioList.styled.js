import styled from 'styled-components';

export const PortfolioListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const PortfolioItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    img {
      width: 460px;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const PortfolioLink = styled.a`
  display: block;
  margin-bottom: 20px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accentColor};

  transition: 350ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.accentColorOpacity};
  }
`;

export const PortfolioDeskr = styled.p`
  margin-bottom: 15px;
`;
