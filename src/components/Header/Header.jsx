import { useContext } from 'react';
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

import { MyContext } from '/src/components/Context/Context';
import { HeaderStyled, HeaderList, BurgerBtn } from './Header.styled';

const iconLinks = [
  {
    path: 'https://www.linkedin.com/in/oleksii-korotenko-379613219/',
    icon: <BsLinkedin size={28} />,
  },
  { path: 'https://github.com/ToyEye', icon: <BsGithub size={28} /> },
  {
    path: 'mailto:alexey.korotenko90@gmail.com',
    icon: <BiLogoGmail size={28} />,
  },
  { path: 'https://t.me/ToyEye', icon: <BsTelegram size={28} /> },
];

const Header = () => {
  const { showModal, toggleValue } = useContext(MyContext);

  const onClickMenuBtn = () => {
    toggleValue(!showModal);
  };

  return (
    <HeaderStyled>
      <BurgerBtn onClick={onClickMenuBtn}>
        <GiHamburgerMenu size={24} />
      </BurgerBtn>
      <HeaderList>
        {iconLinks.map(({ path, icon }) => (
          <li key={path}>
            <a href={path}>{icon}</a>
          </li>
        ))}
      </HeaderList>
    </HeaderStyled>
  );
};

export default Header;
