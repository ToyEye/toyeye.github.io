import { Section, Container } from '/src/components/reusable';
import {
  PortfolioTitleStyled,
  AboutPortfolioDescr,
} from './AboutPortfolio.styled';

const AboutPortfolio = () => {
  return (
    <Section>
      <Container>
        <PortfolioTitleStyled>Portfolio</PortfolioTitleStyled>
        <AboutPortfolioDescr>
          Let me present my portfolio. It will definitely be expanded.
        </AboutPortfolioDescr>
      </Container>
    </Section>
  );
};

export default AboutPortfolio;
