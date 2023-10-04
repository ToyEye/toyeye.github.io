import styled from 'styled-components';

export const WorkTitle = styled.h3`
  font-size: 16px;

  line-height: 1.33;

  span {
    color: ${({ theme }) => theme.colors.accentColorOpacity};
  }
`;

export const Period = styled.p`
  font-size: 12px;
  line-height: 24px;
`;

export const SubTitle = styled.h4`
  margin-top: 5px;
`;

export const AboutWorkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;

  margin-top: 10px;

  list-style: circle;
  list-style-position: inside;
`;

export const AboutWorkListItem = styled.li`
  color: ${({ theme }) => theme.colors.accentColorOpacity};

  span {
    color: ${({ theme }) => theme.colors.primaryDarkColor};
  }
`;
