import styled from 'styled-components';

export const Avatar = styled.img`
  /* border-radius: 50%;
  margin: 0 auto; */
`;

export const AvatarWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Greetings = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 18px;
`;

export const WhoI = styled.h1`
  margin-top: 20px;
  text-align: center;
  letter-spacing: 0.02em;

  margin-bottom: 15px;
`;

export const About = styled.p`
  margin-bottom: 35px;

  text-align: center;
  font-size: 16px;
  letter-spacing: 0.02em;
`;

export const DownloadLink = styled.a`
  display: block;
  margin: 0 auto;

  max-width: 160px;
  padding: 15px 15px;

  text-align: center;
  color: ${({ theme }) => theme.colors.primaryLightColor};
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 12px;

  transition: 450ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColorOpacity};
  }
`;
