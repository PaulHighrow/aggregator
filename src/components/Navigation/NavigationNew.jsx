import useSize from '@react-hook/size';
import {
  HeaderText,
  MobileMenuIcon,
  PlatformLink,
} from 'components/Menu/Menu.styled';
import { useState } from 'react';
import { ReactComponent as LoginIcon } from '../../img/svg/invertedLoginIcon.svg';
import {
  MenuButtonsWrapper,
  MenuCoursesArrowLeft,
  MenuCoursesArrowRight,
  MenuCoursesWrapperNew,
  NavigationAnchor,
  NavigationItem,
  NavigationLinkNew,
  NavigationList,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNew,
  NavigationNavLink,
  StyledNavigationNew,
} from './Navigation.styled';

export const NavigationNew = ({ toggleMenu, className }) => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);
  const [isCourseListOpen, setIsCourseListOpen] = useState(false);

  const toggleCourseList = () => {
    setIsCourseListOpen(isOpen => !isOpen);
  };

  const props =
    width < 768
      ? { spy: true, smooth: true, onClick: toggleMenu, offset: -30 }
      : { spy: true, smooth: true, onClick: toggleMenu, offset: -40 };

  return (
    <StyledNavigationNew className={className}>
      {width < 1280 && (
        <MenuButtonsWrapper>
          <PlatformLink href="https://online.ap.education/" target="_blank">
            <HeaderText>УВІЙТИ</HeaderText> <LoginIcon />
          </PlatformLink>
        </MenuButtonsWrapper>
      )}

      <NavigationList>
        <NavigationItem key={0}>
          <NavigationLinkNew to={'/new'}>Головна</NavigationLinkNew>
        </NavigationItem>
        <NavigationItem key={1}>
          <NavigationLinkNew to={'/school'}>AP School</NavigationLinkNew>
        </NavigationItem>
        <NavigationItem key={2}>
          <NavigationLinkNew to={'/university'}>
            AP University
          </NavigationLinkNew>
        </NavigationItem>
        <NavigationItem key={3}>
          <MenuCoursesWrapperNew>
            <NavigationMenuNew onClick={toggleCourseList}>
              {width < 1280 && width > 500 && <MenuCoursesArrowLeft />} Мовні
              курси
              {width < 500 && <MenuCoursesArrowRight />}
              {width >= 1280 && <MobileMenuIcon />}
            </NavigationMenuNew>
            <NavigationMenuList
              className={
                isCourseListOpen ? 'course-list-open' : 'course-list-closed'
              }
            >
              <NavigationMenuItem>
                <NavigationNavLink to={'/'}>Англійська</NavigationNavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationNavLink to={'/deutsch'}>Німецька</NavigationNavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationNavLink to={'/polski'}>Польська</NavigationNavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </MenuCoursesWrapperNew>
        </NavigationItem>
        <NavigationItem key={4}>
          <NavigationAnchor to={'aboutus'} {...props}>
            Про нас
          </NavigationAnchor>
        </NavigationItem>
        <NavigationItem key={5}>
          <NavigationAnchor to={'contacts'} {...props}>
            Контакти
          </NavigationAnchor>
        </NavigationItem>
      </NavigationList>
    </StyledNavigationNew>
  );
};
