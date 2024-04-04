import useSize from '@react-hook/size';
import { NavigationNew } from 'components/Navigation/NavigationNew';
import { useRef, useState } from 'react';
import { ReactComponent as LoginIcon } from '../../img/svg/invertedLoginIcon.svg';
import {
  HeaderNew,
  HeaderText,
  HeaderWrapper,
  LogoNew,
  LogoRoute,
  MenuBurgerIcon,
  NewMobileMenuBtn,
  PlatformLink
} from './Menu.styled';

export const MenuNew = ({ toggleModal }) => {
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
      <HeaderNew id="header" ref={headerEl} className={show ? 'shown' : 'hidden'}>
        <HeaderWrapper>
          <LogoRoute to="/">
            <LogoNew />
          </LogoRoute>

          {width < 1280 && (
            <NewMobileMenuBtn onClick={toggleMenu}>
              <MenuBurgerIcon />
            </NewMobileMenuBtn>
          )}
        </HeaderWrapper>
        {/* {width >= 768 && (
          <LeadBtn onClick={toggleModal}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
        )} */}
        {width >= 1280 && (
          <NavigationNew
            toggleMenu={toggleMenu}
            toggleModal={toggleModal}
            className={'nav-open'}
          />
        )}

        {width >= 1280 && (
          <PlatformLink href="https://online.ap.education/" target="_blank">
            <HeaderText>УВІЙТИ</HeaderText> <LoginIcon />
          </PlatformLink>
        )}
      </HeaderNew>
      {width < 1280 && (
        <NavigationNew
          toggleMenu={toggleMenu}
          toggleModal={toggleModal}
          className={isMenuOpen ? 'nav-open' : 'nav-closed'}
        />
      )}
    </>
  );
};
