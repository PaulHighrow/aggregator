import { PlatformBox } from './Platform.styled';

export const Platform = ({ isPlatformOpen, isOpenedLast, sectionWidth }) => {
  const desktopWidth = sectionWidth / 2;
  const mobileWidth = (sectionWidth / 3) * 2;

  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'support' ? '4' : '1',
      width: sectionWidth > 1280 ? `${desktopWidth}px` : `${mobileWidth}px`,
    };
  };

  return (
    <>
      <PlatformBox
        className={isPlatformOpen ? 'shown' : 'hidden'}
        style={{ ...supportBoxStylesHandler() }}
      >
        <iframe
          id="platform-window"
          title="platform-pin"
          src="https://online.ap.education/school/"
          width="100%"
          height="100%"
        ></iframe>
      </PlatformBox>
    </>
  );
};
