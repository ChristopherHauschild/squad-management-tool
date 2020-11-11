import React, { useMemo } from 'react';
import { Menu } from 'antd';

import User from 'components/User';
import logoImg from 'assets/images/logo.svg';

import { Container, HeaderContent, Logo, Title, UserDropdown, UserIcon } from './styles';

const Header = () => {
  const UserMenu = useMemo(
    () => (
      <Menu>
        <Menu.Item>
          <User />
        </Menu.Item>
      </Menu>
    ),
    []
  );

  return (
    <Container>
      <HeaderContent>
        <Logo>
          <img src={logoImg} alt="Logo Venturus" />

          <Title>
            <h1>Squad Management Tool</h1>

            <UserDropdown placement="bottomCenter" trigger="click" overlay={UserMenu}>
              <UserIcon />
            </UserDropdown>
          </Title>
        </Logo>

        <User customHeader />
      </HeaderContent>
    </Container>
  );
};

export default Header;
