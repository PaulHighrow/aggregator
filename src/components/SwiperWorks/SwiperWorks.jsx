import useSize from '@react-hook/size';
import {
  HeroMarqueeSoundBtn,
  MarqueeChild,
  MarqueeOverlay,
  MarqueeText,
  MarqueeVideo,
} from 'components/Hero/HeroMarquee/HeroMarquee.styled';
import { MarqueeModal } from 'components/MarqueeModal/MarqueeModal';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlide } from './SwiperWorks.styled';

export const SwiperWorks = ({ toggleModal }) => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);
  const modalId = useRef(NaN);
  const [isMarqueeModalOpen, setIsMarqueeModalOpen] = useState(false);

  const handleToggleModal = e => {
    modalId.current = e.currentTarget.getAttribute('data-id');
    setIsMarqueeModalOpen(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeMarqueeModal = () => {
    setIsMarqueeModalOpen(isOpen => (isOpen = false));
    modalId.current = 0;
    !document.body.style.overflowY && isMarqueeModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isMarqueeModalOpen) {
        closeMarqueeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      {isMarqueeModalOpen && (
        <MarqueeModal
          closeMarqueeModal={closeMarqueeModal}
          toggleModal={toggleModal}
          id={modalId.current}
        />
      )}
      <Swiper
        slidesPerView={
          width < 768
            ? Math.floor((width - 30 * Math.floor(width / 180)) / 180)
            : Math.floor((width - 30 * Math.floor(width / 270)) / 270)
        }
        spaceBetween={30}
        speed={5000}
        touchRatio={10}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        loop={true}
        updateOnWindowResize={true}
        modules={[Autoplay]}
      >
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={0} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={1} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={2} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={3} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={4} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={0} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={1} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={2} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={3} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={4} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={0} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={1} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={2} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={3} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
        <SwiperSlide
          style={width < 768 ? { maxWidth: '180px' } : { maxWidth: '270px' }}
        >
          <StyledSlide data-id={4} onClick={handleToggleModal}>
            <MarqueeChild>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};
