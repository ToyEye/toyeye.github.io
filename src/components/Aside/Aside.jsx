import {
  NavList,
  AsideStyled,
  NavLinkStyled,
  Name,
  Position,
} from './Aside.styled';
import { routes } from '/src/routes/routes.js';

const Aside = () => {
  return (
    <AsideStyled>
      <Name>Oleksii Korotenko</Name>
      <Position>Front-end Developer</Position>
      <NavList>
        {routes.map(({ id, path, text }) => (
          <NavLinkStyled key={id} to={path}>
            {text}
          </NavLinkStyled>
        ))}
      </NavList>
    </AsideStyled>
  );
};

export default Aside;
