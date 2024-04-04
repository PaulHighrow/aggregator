import useSize from '@react-hook/size';
import {
  HeaderTextNew,
  MobileMenuIcon,
  PlatformLinkNew,
} from 'components/Menu/Menu.styled';
import { useState } from 'react';

import {
  MenuButtonsWrapper,
  MenuCoursesArrowLeft,
  MenuCoursesArrowRight,
  MenuCoursesWrapperNew,
  MyAPLogin,
  NavigationAnchorNew,
  NavigationItemNew,
  NavigationLinkNew,
  NavigationListNew,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNew,
  NavigationNavLink,
  StyledNavigationNew
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
      <NavigationListNew>
        <NavigationItemNew key={0}>
          <NavigationLinkNew to={'/new'}>Головна</NavigationLinkNew>
        </NavigationItemNew>
        <NavigationItemNew key={1}>
          <NavigationLinkNew to={'/school'}>AP School</NavigationLinkNew>
        </NavigationItemNew>
        <NavigationItemNew key={2}>
          <NavigationLinkNew to={'/university'}>
            AP University
          </NavigationLinkNew>
        </NavigationItemNew>
        <NavigationItemNew key={3}>
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
        </NavigationItemNew>
        <NavigationItemNew key={4}>
          <NavigationAnchorNew to={'aboutus'} {...props}>
            Про нас
          </NavigationAnchorNew>
        </NavigationItemNew>
        <NavigationItemNew key={5}>
          <NavigationAnchorNew to={'contacts'} {...props}>
            Контакти
          </NavigationAnchorNew>
        </NavigationItemNew>
      </NavigationListNew>
      {width < 1280 && (
        <MenuButtonsWrapper>
          <PlatformLinkNew href="https://online.ap.education/" target="_blank">
            <HeaderTextNew>Увійти</HeaderTextNew> <MyAPLogin />
          </PlatformLinkNew>
        </MenuButtonsWrapper>
      )}
    </StyledNavigationNew>
  );
};
