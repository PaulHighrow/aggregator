import { KahootBox } from './Kahoots.styled';

export const Kahoots = () => {
  return (
    <>
      <KahootBox>
        <iframe
          title="kahoot-direct"
          src="https://kahoot.it/challenge/01891171?challenge-id=83f139cf-a515-4a63-a3ae-4e592634d7a4_1701070810030&amp;embed=true"
          name="kahoot-embed"
          scrolling="no"
          frameBorder="0"
          allowfullscreen=""
          width="650px"
          height="700px"
        ></iframe>
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
