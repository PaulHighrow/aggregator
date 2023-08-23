import useSize from '@react-hook/size';
import {
  NavigationItem,
  NavigationLink,
  NavigationList,
  StyledNavigation,
} from './Navigation.styled';

export const Navigation = ({ toggleMenu }) => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const props = { spy: true, smooth: true, onClick: toggleMenu };
  const offsetProps = { ...props, offset: -80 };

  return (
    <StyledNavigation>
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
            <NavigationLink to="services" {...offsetProps}>
              Послуги
            </NavigationLink>
          ) : (
            <NavigationLink to="services" {...props}>
              Послуги
            </NavigationLink>
          )}
        </NavigationItem>
        <NavigationItem>
          {width < 768 ? (
            <NavigationLink to="testimonials" {...offsetProps}>
              Відгуки
            </NavigationLink>
          ) : (
            <NavigationLink to="testimonials" {...props}>
              Відгуки
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
