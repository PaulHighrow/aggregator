import { KahootBox } from './Kahoots.styled';

export const Kahoots = () => {
  return (
    <>
      <KahootBox>
        <iframe
          title="kahoot-pin"
          src="https://kahoot.it/&amp;embed=true"
          name="kahoot-embed"
          scrolling="no"
          frameBorder="0"
          allowfullscreen=""
          width="650px"
          height="700px"
        ></iframe>
      </KahootBox>
    </>
  );
};
