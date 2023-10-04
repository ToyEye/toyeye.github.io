import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('/src/fonts/montserrat-v26-latin-regular.woff2') format('woff2'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('/src/fonts/montserrat-v26-latin-500.woff2') format('woff2'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('/src/fonts/montserrat-v26-latin-700.woff2') format('woff2'); 
}

  * {
    margin: 0;
    padding:0
  }

  body {
    font-family:'Montserrat',sans-serif ;
    color: ${({ theme }) => theme.colors.primaryDarkColor};
    font-size: 16px;
    letter-spacing: 0.02em;
  }

  img {
    display:block;
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  a  {
    text-decoration: none;
    color:inherit;
  }

`;
