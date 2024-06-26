import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/carSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
  const user = useSelector(selectUser);
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' />
      </a>
      <MenuGroup>
        <a href='#'>Model S</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
      </MenuGroup>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <MenuIconContainer>
          <MenuIcon onClick={() => setBurgerStatus(true)} />
        </MenuIconContainer>
      </RightMenu>
      <BurgerNav status={burgerStatus}>
        <CloseContainer>
          <Close onClick={() => setBurgerStatus(false)} />
        </CloseContainer>

        <li>
          <a href='#'>Model S</a>
        </li>
        <li>
          <a href='#'>Model 3</a>
        </li>
        <li>
          <a href='#'>Model Y</a>
        </li>
        <li>
          <a href='#'>Model X</a>
        </li>
        <li>
          <a href='#'>Solar Roof</a>
        </li>
        <li>
          <a href='#'>Solar Panel</a>
        </li>
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-In</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
        <li>
          <a href='#'>Semi</a>
        </li>
        <li>
          <a href='#'>Charging</a>
        </li>
        <li>
          <a onClick={() => auth.signOut()} href='#'>
            Logout
          </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  a {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  width: 300px;
  background: white;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  list-style: none;
  transform: ${props => (props.status ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
  li {
    :hover {
      background-color: lightgray;
      color: black;
    }
    padding: 15px 0;
    a {
      font-weight: 600;
      padding-left: 10px;
    }
  }
`;
