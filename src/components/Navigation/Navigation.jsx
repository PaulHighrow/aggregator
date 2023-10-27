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
      ? { spy: true, smooth: true, onClick: toggleMenu, offset: -30 }
      : { spy: true, smooth: true, onClick: toggleMenu, offset: -40 };

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
          return (
            <NavigationItem key={i}>
              <NavigationLink to={node.id} {...props}>
                {node.outerText.split('\n')[0]}
              </NavigationLink>
            </NavigationItem>
          );
        })}
      </NavigationList>
    </StyledNavigation>
  );
};
