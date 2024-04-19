import { SectionTitleNew } from 'components/HowItWorks/HowItWorks.styled';
import { useInView } from 'react-intersection-observer';
import {
  ReviewsDescription,
  ReviewsSectionNew,
  ReviewsTitleBox,
} from './Reviews.styled';
import { ReviewsSwiper } from './ReviewsSwiper/ReviewsSwiper';

export const ReviewsNew = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <ReviewsSectionNew id="reviews-anchor" ref={ref}>
      <ReviewsTitleBox>
        <SectionTitleNew>Відгуки</SectionTitleNew>
        <ReviewsDescription>
          Дякуємо, що обираєте навчання у нас. Кожне ваше повідомлення, фото чи
          відео про ваш успіх та навчання потрапляє у саме сердечко.
        </ReviewsDescription>
      </ReviewsTitleBox>
      {inView && <ReviewsSwiper />}
    </ReviewsSectionNew>
  );
};
