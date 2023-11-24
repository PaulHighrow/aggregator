import {
  MarqueeChild,
  MarqueeOverlay,
  MarqueeVideo,
  StyledMarquee,
} from 'components/Reviews/ReviewsMarquee/ReviewsMarquee.styled';

export const ReviewsMarquee = () => {
  return (
    <>
      <StyledMarquee autoFill={true} pauseOnHover={true}>
        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review1.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review1.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review2.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review2.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review3.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review3.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review4.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review4.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review5.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review5.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review6.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review6.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review7.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review7.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review8.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review8.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review9.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review9.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
        <MarqueeChild>
          <MarqueeOverlay />
          <MarqueeVideo autoPlay loop playsInline muted={true}>
            <source
              src="https://ap.education/static/video/review10.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/review10.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
      </StyledMarquee>
    </>
  );
};
