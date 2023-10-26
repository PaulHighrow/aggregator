import useSize from '@react-hook/size';
import { HeaderText, LeadBtn, PlatformLink } from 'components/Menu/Menu.styled';
import { useState } from 'react';
import { ReactComponent as LoginIcon } from '../../img/svg/invertedLoginIcon.svg';
import {
  MenuButtonsWrapper,
  NavigationItem,
  NavigationLink,
  NavigationList,
  StyledNavigation,
} from './Navigation.styled';

export const Navigation = ({ toggleMenu, toggleModal, className }) => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);
  // eslint-disable-next-line
  const [__, setIsOpen] = useState(false);

  const nodeList = [];
  document.querySelectorAll('[id]').forEach(node => nodeList.push(node));
  const filteredNodeList = nodeList.filter(
    node =>
      !!node.className &&
      (node.nodeName === 'HEADER' ||
        node.nodeName === 'SECTION' ||
        node.nodeName === 'H4')
  );

  const props =
    width < 768
      ? { spy: true, smooth: true, onClick: toggleMenu, offset: -60 }
      : { spy: true, smooth: true, onClick: toggleMenu };

  const handleNavBtn = () => {
    setIsOpen(isOpen => !isOpen);
    toggleMenu();
    toggleModal();
  };

  return (
    <StyledNavigation className={className}>
      <MenuButtonsWrapper>
        {width < 768 && (
          <>
            <PlatformLink href="https://online.ap.education/" target="_blank">
              <HeaderText>УВІЙТИ</HeaderText> <LoginIcon />
            </PlatformLink>
            <LeadBtn onClick={handleNavBtn}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
          </>
        )}
      </MenuButtonsWrapper>
      <NavigationList>
        {filteredNodeList.map((node, i) => {
          if (i === 0) {
            return null;
          }
          console.log(node.id);
          return (
            <NavigationItem key={i}>
              <NavigationLink to={width < 768 ? node.id : filteredNodeList[i-1].id} {...props}>
                {node.outerText.split('\n')[0]}
              </NavigationLink>
            </NavigationItem>
          );
        })}
        {/* <NavigationItem>
          <NavigationLink to={width > 768 ? 'header' : 'hero'} {...props}>
            Головна
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="howitworks" {...props}>
            Як це працює
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="edcenter" {...props}>
            Навчальний центр
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="admissions" {...props}>
            Бюро кар'єри
          </NavigationLink>
        </NavigationItem> 
        <NavigationItem>
          <NavigationLink to="translations" {...props}>
            Бюро перекладів
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="examcenter" {...props}>
            Екзаменаційний центр
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="aboutus" {...props}>
            Про нас
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="contacts" {...props}>
            Контакти
          </NavigationLink>
        </NavigationItem>*/}
      </NavigationList>
    </StyledNavigation>
  );
};
