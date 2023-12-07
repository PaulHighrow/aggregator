import { VideoLimiter } from 'components/AboutUs/AboutUs.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import {
  MarqueeBackIcon,
  MarqueeForwardIcon
} from 'components/MarqueeModal/MarqueeModal.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import {
  MarqueeBackdrop,
  MarqueeCloseBtn,
  ModalWindow,
  ReviewNextBtn,
  ReviewPrevBtn,
  ReviewVideoBox,
} from './ReviewModal.styled';
import { reviewList } from './reviewList';

export const ReviewModal = ({ closeMarqueeModal, toggleModal, id }) => {
  const [modalId, setModalId] = useState(parseInt(id));
  const length = reviewList.length;

  const toggleLeadForm = () => {
    closeMarqueeModal();
    toggleModal();
  };

  const handlePrevClick = () => {
    modalId <= 0
      ? setModalId(id => (id = length - 1))
      : setModalId(id => (id -= 1));
  };

  const handleNextClick = () => {
    modalId >= length - 1
      ? setModalId(id => (id = 0))
      : setModalId(id => (id += 1));
  };

  useEffect(() => {
    const onRightArrowNext = event => {
      if (event.code === 'ArrowRight') {
        handleNextClick();
      }
    };
    
    const onLeftArrowPrev = event => {
      if (event.code === 'ArrowLeft') {
        handlePrevClick();
      }
    };

    window.addEventListener('keydown', onRightArrowNext);
    window.addEventListener('keydown', onLeftArrowPrev);

    return () => {
      window.removeEventListener('keydown', onRightArrowNext);
      window.removeEventListener('keydown', onLeftArrowPrev);
    };
  });

  return (
    <>
      <MarqueeBackdrop onClick={closeMarqueeModal} />
      <ModalWindow>
        <MarqueeCloseBtn onClick={closeMarqueeModal}>
          <CloseIcon />
        </MarqueeCloseBtn>

        <VideoLimiter>
          <ReviewPrevBtn onClick={handlePrevClick}>
            <MarqueeBackIcon />
          </ReviewPrevBtn>
          <ReviewNextBtn onClick={handleNextClick}>
            <MarqueeForwardIcon />
          </ReviewNextBtn>
          <ReviewVideoBox>
            <ReactPlayer
              playing={true}
              loop={true}
              controls={true}
              style={{
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              width="100%"
              height="100%"
              url={reviewList[modalId].videoUrl}
            />
          </ReviewVideoBox>
        </VideoLimiter>

        <LeadBtn onClick={toggleLeadForm}> Я ТЕЖ ТАК ХОЧУ! </LeadBtn>
      </ModalWindow>
    </>
  );
};
