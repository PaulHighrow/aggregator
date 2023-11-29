import { KahootBox } from './Kahoots.styled';

export const Kahoots = ({ sectionWidth, sectionHeight }) => {
  const desktopWidth = (sectionWidth / 3) * 2;
  const mobileWidth = (sectionWidth / 3) * 2;

  return (
    <>
      <KahootBox>
        <iframe
          title="kahoot-pin"
          src="https://kahoot.it/"
          frameBorder="0"
          width={sectionWidth > 768 ? desktopWidth : mobileWidth}
          height={sectionHeight}
        ></iframe>
      </KahootBox>
    </>
  );
};