import useSize from '@react-hook/size';
import { Navigation } from 'components/Navigation/Navigation';
import { useRef, useState } from 'react';
import { ReactComponent as LoginIcon } from '../../img/svg/loginIcon.svg';
import {
  Header,
  HeaderText,
  HeaderWrapper,
  LeadBtn,
  Logo,
  LogoLink,
  MobileMenuBtn,
  MobileMenuIcon,
  PhoneNumber,
  PlatformLink,
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
    <Header ref={headerEl}>
      <HeaderWrapper>
        <LogoLink href="https://www.ap-education.com.ua/">
          <Logo />
        </LogoLink>
        <MobileMenuBtn onClick={toggleMenu}>
          <HeaderText>МЕНЮ</HeaderText> <MobileMenuIcon />
        </MobileMenuBtn>
      </HeaderWrapper>
      {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
      {width < 1 && (
        <PhoneNumber href="tel:+380638989102">+380638989102</PhoneNumber>
      )}
      {width >= 768 && (
        <LeadBtn onClick={toggleModal}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
      )}

      {width >= 768 && (
        <PlatformLink onClick={toggleMenu}>
          <HeaderText>УВІЙТИ</HeaderText> <LoginIcon />
        </PlatformLink>
      )}
    </Header>
  );
};
