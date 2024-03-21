import { PlatformBox } from './Platform.styled';

export const Platform = ({ isPlatformOpen, isOpenedLast, sectionWidth }) => {
  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'platform' ? '4' : '1',
      width: (sectionWidth / 10) * 4,
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
