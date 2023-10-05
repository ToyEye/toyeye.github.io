import { Section, Container } from '/src/components/reusable';
import {
  PortfolioListStyled,
  PortfolioItem,
  PortfolioLink,
  PortfolioDeskr,
} from './PortfolioList.styled';

import portfolioData from '../portfolioData/portfolioData.json';

const PortfolioList = () => {
  return (
    <Section>
      <Container>
        <PortfolioListStyled>
          {portfolioData.map(
            ({ name, technologies, description, pathOnLive, image }) => (
              <PortfolioItem key={name}>
                <img src={image} alt={name} />

                <div>
                  <PortfolioLink
                    href={pathOnLive}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </PortfolioLink>
                  <PortfolioDeskr>{description}</PortfolioDeskr>
                  <p>Technologies: {technologies}</p>
                </div>
              </PortfolioItem>
            )
          )}
        </PortfolioListStyled>
      </Container>
    </Section>
  );
};

export default PortfolioList;
