import {
  StreamNavigation,
  StreamNavigationBox,
} from 'components/Stream/StreamNav/StreamNav.styled';
import {
  ServiceNavDescription,
  ServiceNavItem,
  ServiceNavLink,
  ServiceNavList,
  ServiceNavTitle,
  TelegramLogo,
  ViberLogo,
} from './ServiceNav.styled';

export const ServiceNav = () => {
  return (
    <>
      <StreamNavigationBox>
        <StreamNavigation>
          <ServiceNavTitle>
            Оберіть месенджер, в якому вам буде зручно спілкуватись з менеджером
            сервісу:
          </ServiceNavTitle>
          <ServiceNavDescription>
            Не забудьте написати ваше прізвище та ім'я першим повідомленням!
          </ServiceNavDescription>
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
