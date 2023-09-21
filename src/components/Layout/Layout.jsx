import { Outlet } from 'react-router-dom';

import Header from '/src/components/Header';
import Aside from '/src/components/Aside';

import { ContentWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Aside />

        <main>
          <Outlet />
        </main>
      </ContentWrapper>
    </div>
  );
};

export default Layout;
