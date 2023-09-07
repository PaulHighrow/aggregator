import useSize from '@react-hook/size';
import {
  NavigationItem,
  NavigationLink,
  NavigationList,
  StyledNavigation,
} from './Navigation.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';

export const Navigation = ({ toggleMenu, toggleModal }) => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const props = { spy: true, smooth: true, onClick: toggleMenu };
  const offsetProps = { ...props, offset: -73 };

  return (
    <StyledNavigation>
      {width < 768 && (
        <LeadBtn onClick={toggleModal}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
      )}
      <NavigationList>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="hero" {...offsetProps}>
              Головна
            </NavigationLink>
          ) : (
            <NavigationLink to="hero" {...props}>
              Головна
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="howitworks" {...offsetProps}>
              Як це працює
            </NavigationLink>
          ) : (
            <NavigationLink to="howitworks" {...props}>
              Як це працює
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="edcenter" {...offsetProps}>
              Навчальний центр
            </NavigationLink>
          ) : (
            <NavigationLink to="edcenter" {...props}>
              Навчальний центр
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="admissions" {...offsetProps}>
              Бюро кар'єри
            </NavigationLink>
          ) : (
            <NavigationLink to="admissions" {...props}>
              Бюро кар'єри
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="translations" {...offsetProps}>
              Бюро перекладів
            </NavigationLink>
          ) : (
            <NavigationLink to="translations" {...props}>
              Бюро перекладів
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="examcenter" {...offsetProps}>
              Екзаменаційний центр
            </NavigationLink>
          ) : (
            <NavigationLink to="examcenter" {...props}>
              Екзаменаційний центр
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="aboutus" {...offsetProps}>
              Про нас
            </NavigationLink>
          ) : (
            <NavigationLink to="aboutus" {...props}>
              Про нас
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="contacts" {...offsetProps}>
              Контакти
            </NavigationLink>
          ) : (
            <NavigationLink to="contacts" {...props}>
              Контакти
            </NavigationLink>
          )}
        </NavigationItem>
      </NavigationList>
    </StyledNavigation>
  );
};
