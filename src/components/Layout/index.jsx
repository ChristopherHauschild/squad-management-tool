import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Container, Main } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />

      <Main>
        <div>{children}</div>
      </Main>

      <Footer />
    </Container>
  );
};

export default Layout;
