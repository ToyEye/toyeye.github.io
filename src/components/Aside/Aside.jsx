import { useContext } from 'react';

import {
  NavList,
  AsideStyled,
  NavLinkStyled,
  Name,
  Position,
} from './Aside.styled';

import { MyContext } from '/src/components/Context/Context';

import { routes } from '/src/routes/routes.js';

const Aside = () => {
  const { showModal } = useContext(MyContext);

  const isActive = showModal ? 'active' : '';

  return (
    <AsideStyled className={isActive}>
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
