import useSize from '@react-hook/size';
import { Navigation } from 'components/Navigation/Navigation';
import { useRef, useState } from 'react';
import { ReactComponent as LoginIcon } from '../../img/svg/invertedLoginIcon.svg';
import {
  Header,
  HeaderText,
  HeaderWrapper,
  LeadBtn,
  Logo,
  LogoRoute,
  MobileMenuBtn,
  MobileMenuIcon,
  PlatformLink
} from './Menu.styled';

export const Menu = ({ toggleModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(headerEl);

  const toggleMenu = () => {
    setIsMenuOpen(isOpen => !isOpen);
  };

  return (
    <>
      <Header id="header" ref={headerEl}>
        <HeaderWrapper>
          <LogoRoute to="/">
            <Logo />
          </LogoRoute>
          <MobileMenuBtn onClick={toggleMenu}>
            <HeaderText>МЕНЮ</HeaderText> <MobileMenuIcon />
          </MobileMenuBtn>
        </HeaderWrapper>
        {width >= 768 && (
          <LeadBtn onClick={toggleModal}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
        )}
        {width >= 768 && (
          <PlatformLink href="https://online.ap.education/" target="_blank">
            <HeaderText>УВІЙТИ</HeaderText> <LoginIcon />
          </PlatformLink>
        )}
      </Header>
      <Navigation
        toggleMenu={toggleMenu}
        toggleModal={toggleModal}
        className={isMenuOpen ? 'nav-open' : 'nav-closed'}
      />
    </>
  );
};
