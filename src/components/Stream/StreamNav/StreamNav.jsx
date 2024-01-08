import {
  StreamNavDescription,
  StreamNavItem,
  StreamNavLink,
  StreamNavList,
  StreamNavTitle,
  StreamNavigation,
  StreamNavigationBox,
} from './StreamNav.styled';

export const StreamNav = () => {
  return (
    <>
      <StreamNavigationBox>
        <StreamNavigation>
          <StreamNavTitle>Вітаємо на сторінці онлайн-уроків!</StreamNavTitle>
          <StreamNavDescription>
            Щоб знайти потрібну трансляцію, просто оберіть рівень або мову:
          </StreamNavDescription>
          <StreamNavList>
            {/* <StreamNavItem>
              <StreamNavLink to={'/streams/a0'}> A0</StreamNavLink>
            </StreamNavItem> */}
            <StreamNavItem>
              <StreamNavLink to={'/streams/a1'}>A1</StreamNavLink>
            </StreamNavItem>
            <StreamNavItem>
              <StreamNavLink to={'/streams/a2'}>A2</StreamNavLink>
            </StreamNavItem>
            <StreamNavItem>
              <StreamNavLink to={'/streams/b1'}>B1</StreamNavLink>
            </StreamNavItem>
            <StreamNavItem>
              <StreamNavLink to={'/streams/deutsch'}>Німецька</StreamNavLink>
            </StreamNavItem>
            <StreamNavItem>
              <StreamNavLink to={'/streams/polski'}>Польська</StreamNavLink>
            </StreamNavItem>
          </StreamNavList>
        </StreamNavigation>
        {/* <Schedule /> */}
      </StreamNavigationBox>
    </>
  );
};
