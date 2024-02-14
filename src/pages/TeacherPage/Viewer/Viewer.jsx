import { ViewerBox } from './Viewer.styled';

export const Viewer = ({ isViewerOpen, isOpenedLast, sectionWidth }) => {
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
      <ViewerBox
        className={isViewerOpen ? 'shown' : 'hidden'}
        style={{ ...supportBoxStylesHandler() }}
      >
        <iframe
          id="3d-window"
          title="3d-pin"
          src="https://3dviewer.net/#"
          width="100%"
          height="100%"
        ></iframe>
      </ViewerBox>
    </>
  );
};
