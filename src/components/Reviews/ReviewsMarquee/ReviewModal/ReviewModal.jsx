import { VideoLimiter } from 'components/AboutUs/AboutUs.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import ReactPlayer from 'react-player/lazy';
import {
  MarqueeBackdrop,
  MarqueeCloseBtn,
  ModalWindow,
  ReviewVideoBox,
} from './ReviewModal.styled';

const reviewList = [
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview1.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview2.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview3.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview4.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview5.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview6.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview7.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview8.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview9.webm',
  },
  {
    videoUrl:
      'https://ap.education/static/video/reviews/fullReviews/fullReview10.webm',
  },
];

export const ReviewModal = ({ closeMarqueeModal, toggleModal, id }) => {
  const toggleLeadForm = () => {
    closeMarqueeModal();
    toggleModal();
  };

  return (
    <>
      <MarqueeBackdrop onClick={closeMarqueeModal} />
      <ModalWindow>
        <MarqueeCloseBtn onClick={closeMarqueeModal}>
          <CloseIcon />
        </MarqueeCloseBtn>

        <VideoLimiter>
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
              url={reviewList[id].videoUrl}
            />
          </ReviewVideoBox>
        </VideoLimiter>

        <LeadBtn onClick={toggleLeadForm}> Я ТЕЖ ТАК ХОЧУ! </LeadBtn>
      </ModalWindow>
    </>
  );
};
