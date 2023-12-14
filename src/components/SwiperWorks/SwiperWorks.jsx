import useSize from '@react-hook/size';
import {
  HeroMarqueeSoundBtn,
  MarqueeChild,
  MarqueeOverlay,
  MarqueeText,
  MarqueeVideo,
} from 'components/Hero/HeroMarquee/HeroMarquee.styled';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { StyledSlide } from './SwiperWorks.styled';

export const SwiperWorks = () => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);
  console.log(Math.floor(width / 180));
  console.log(Math.floor(width / 270));
  return (
    <>
      <Swiper
        slidesPerView={
          width < 768 ? Math.floor(width / 180) : Math.floor(width / 270)
        }
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <StyledSlide>
          <MarqueeChild id={0}>
            <MarqueeOverlay>
              <HeroMarqueeSoundBtn />
              <MarqueeText>From Zero to Hero</MarqueeText>
            </MarqueeOverlay>
            <MarqueeVideo
              autoPlay={true}
              loop
              playsInline
              muted={true}
              poster="../../../img/hero/hero-marquee/posters/poster1.webp"
            >
              <source
                src="https://ap.education/static/video/previews/preview1.webm"
                type="video/webm"
              />
              <source
                src="https://ap.education/static/video/previews/preview1.mp4"
                type="video/mp4"
              />
            </MarqueeVideo>
          </MarqueeChild>
        </StyledSlide>
        <StyledSlide>
          <MarqueeChild id={1}>
            <MarqueeOverlay>
              <HeroMarqueeSoundBtn />
              <MarqueeText>Навчальна платформа</MarqueeText>
            </MarqueeOverlay>
            <MarqueeVideo
              autoPlay={true}
              loop
              playsInline
              muted={true}
              poster="../../../img/hero/hero-marquee/posters/poster2.webp"
            >
              <source
                src="https://ap.education/static/video/previews/preview2.webm"
                type="video/webm"
              />
              <source
                src="https://ap.education/static/video/previews/preview2.mp4"
                type="video/mp4"
              />
            </MarqueeVideo>
          </MarqueeChild>
        </StyledSlide>
        <StyledSlide>
          <MarqueeChild id={2}>
            <MarqueeOverlay>
              <HeroMarqueeSoundBtn />
              <MarqueeText>Письмова гарантія</MarqueeText>
            </MarqueeOverlay>
            <MarqueeVideo
              autoPlay={true}
              loop
              playsInline
              muted={true}
              poster="../../../img/hero/hero-marquee/posters/poster3.webp"
            >
              <source
                src="https://ap.education/static/video/previews/preview3.webm"
                type="video/webm"
              />
              <source
                src="https://ap.education/static/video/previews/preview3.mp4"
                type="video/mp4"
              />
            </MarqueeVideo>
          </MarqueeChild>
        </StyledSlide>
        <StyledSlide>
          <MarqueeChild id={3}>
            <MarqueeOverlay>
              <HeroMarqueeSoundBtn />
              <MarqueeText>Ноутбук в подарунок</MarqueeText>
            </MarqueeOverlay>
            <MarqueeVideo
              autoPlay={true}
              loop
              playsInline
              muted={true}
              poster="../../../img/hero/hero-marquee/posters/poster4.webp"
            >
              <source
                src="https://ap.education/static/video/previews/preview4.webm"
                type="video/webm"
              />
              <source
                src="https://ap.education/static/video/previews/preview4.mp4"
                type="video/mp4"
              />
            </MarqueeVideo>
          </MarqueeChild>
        </StyledSlide>
        <StyledSlide>
          <MarqueeChild id={4}>
            <MarqueeOverlay>
              <HeroMarqueeSoundBtn />
              <MarqueeText>Close to You</MarqueeText>
            </MarqueeOverlay>
            <MarqueeVideo
              autoPlay={true}
              loop
              playsInline
              muted={true}
              poster="../../../img/hero/hero-marquee/posters/poster5.webp"
            >
              <source
                src="https://ap.education/static/video/previews/preview5.webm"
                type="video/webm"
              />
              <source
                src="https://ap.education/static/video/previews/preview5.mp4"
                type="video/mp4"
              />
            </MarqueeVideo>
          </MarqueeChild>
        </StyledSlide>
      </Swiper>
    </>
  );
};
