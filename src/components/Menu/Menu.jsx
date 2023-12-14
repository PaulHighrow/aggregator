import useSize from '@react-hook/size';
import { Navigation } from 'components/Navigation/Navigation';
import { useRef, useState } from 'react';
import { ReactComponent as LoginIcon } from '../../img/svg/invertedLoginIcon.svg';
import {
  BurgerMenuIcon,
  Header,
  HeaderText,
  HeaderWrapper,
  LeadBtn,
  Logo,
  LogoRoute,
  MobileMenuBtn,
  MobileMenuIcon,
  NavContainer,
  PlatformLink,
} from './Menu.styled';

export const Menu = ({ toggleModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(headerEl);
  // eslint-disable-next-line
  const [show, __] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(isOpen => !isOpen);
  };

  return (
    <>
      <Header id="header" ref={headerEl} className={show ? 'shown' : 'hidden'}>
        <HeaderWrapper>
          <LogoRoute to="/">
            <Logo />
          </LogoRoute>

          {width < 768 && (
            <LeadBtn onClick={toggleModal}>
              {width >= 400 ? 'ШВИДКА КОНСУЛЬТАЦІЯ' : 'КОНСУЛЬТАЦІЯ'}{' '}
            </LeadBtn>
          )}

          <MobileMenuBtn onClick={toggleMenu}>
            {width >= 768 ? (
              <>
                <HeaderText>МЕНЮ</HeaderText> <MobileMenuIcon />
              </>
            ) : (
              <BurgerMenuIcon />
            )}
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
      <NavContainer className={show ? 'shown' : 'hidden'}>
        <Navigation
          toggleMenu={toggleMenu}
          toggleModal={toggleModal}
          className={isMenuOpen ? 'nav-open' : 'nav-closed'}
        />
      </NavContainer>
    </>
  );
};
