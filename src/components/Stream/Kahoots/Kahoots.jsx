import { KahootBox } from './Kahoots.styled';

export const Kahoots = ({ sectionWidth, sectionHeight }) => {
  console.log(sectionHeight);
  const desktopWidth = sectionWidth / 3;
  const mobileWidth = sectionWidth / 5 * 2;

  return (
    <>
      <KahootBox>
        <iframe
          title="kahoot-pin"
          src="https://kahoot.it/&amp;embed=true"
          name="kahoot-embed"
          frameBorder="0"
          width={sectionWidth > 768? desktopWidth : mobileWidth}
          height={sectionHeight}
        ></iframe>
      </KahootBox>
    </>
  );
};
