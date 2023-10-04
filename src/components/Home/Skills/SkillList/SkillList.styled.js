import styled from 'styled-components';

export const SkillListStyled = styled.ul`
  display: grid;
  grid-template-columns: ${({ lang }) => {
    return !lang ? '2fr 2fr' : '1fr';
  }};

  column-gap: 35px;
  row-gap: 25px;

  list-style: circle;
  list-style-position: inside;

  li {
    color: ${({ theme }) => theme.colors.accentColorOpacity};

    span {
      color: ${({ theme }) => theme.colors.primaryDarkColor};
    }
  }
`;
