import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';

import { HeaderStyled, HeaderList } from './Header.styled';
// import { Container } from '/src/components/reusable';

const iconLinks = [
  {
    path: 'https://www.linkedin.com/in/oleksii-korotenko-379613219/',
    icon: <BsLinkedin size={28} />,
  },
  { path: 'https://github.com/ToyEye', icon: <BsGithub size={28} /> },
  { path: 'alexey.korotenko90@gmail.com', icon: <BiLogoGmail size={28} /> },
  { path: 'https://t.me/ToyEye', icon: <BsTelegram size={28} /> },
];

const Header = () => {
  return (
    <HeaderStyled>
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
