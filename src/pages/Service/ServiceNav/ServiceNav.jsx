import {
    StreamNavDescription,
    StreamNavTitle,
    StreamNavigation,
    StreamNavigationBox
} from 'components/Stream/StreamNav/StreamNav.styled';
import { ServiceNavItem, ServiceNavLink, ServiceNavList, TelegramLogo, ViberLogo } from './ServiceNav.styled';

export const ServiceNav = () => {
  return (
    <>
      <StreamNavigationBox>
        <StreamNavigation>
          <StreamNavTitle>У вас проблеми? Розкажіть нам про них!</StreamNavTitle>
          <StreamNavDescription>Для цього скористайтесь одним з наших чат-ботів:</StreamNavDescription>
          <ServiceNavList>
            <ServiceNavItem>
              <ServiceNavLink to={'/service/viber'}>
                <ViberLogo />
              </ServiceNavLink>
            </ServiceNavItem>
            <ServiceNavItem>
              <ServiceNavLink to={'/service/tg'}>
                <TelegramLogo />
              </ServiceNavLink>
            </ServiceNavItem>
          </ServiceNavList>
        </StreamNavigation>
        {/* <Schedule /> */}
      </StreamNavigationBox>
    </>
  );
};
