import { Box } from 'components/Box/Box.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import ReactPlayer from 'react-player';
import {
  LeadBtnWrapper,
  ReviewsBackground,
  ReviewsSection,
  ReviewsSubTitle,
  ReviewsText,
  ReviewsTextBox,
  ReviewsTitle,
  ReviewsVideoWrapper,
  VideoBox,
  VideoLimiter,
} from './Reviews.styled';
import { ReviewsMarquee } from './ReviewsMarquee/ReviewsMarquee';

export const Reviews = ({ toggleModal }) => {
  return (
    <ReviewsBackground>
      <ReviewsSection id="reviews">
        <Box>
          <ReviewsTitle>
            <ReviewsSubTitle>ВІДГУКИ</ReviewsSubTitle> ПРО КУРС
          </ReviewsTitle>
          <ReviewsVideoWrapper>
            <VideoLimiter>
              <VideoBox>
                <ReactPlayer
                  loop={true}
                  controls={true}
                  muted={true}
                  playing={true}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  width="100%"
                  height="100%"
                  url="https://youtu.be/qj-w9wzo76Q?si=EBLs8ap7W_RqBsXe"
                />
              </VideoBox>
            </VideoLimiter>
            <ReviewsTextBox>
              <ReviewsText>
                Відгуки наших клієнтів вражають, адже кожен студент отримує в
                подарунок сучасний ноутбук-трансформер - потужний інструмент для
                досягнення нових висот як у навчанні так і у повсякденному
                житті. Приєднуйтесь до нас вже сьогодні!
              </ReviewsText>
              <LeadBtnWrapper>
                <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
              </LeadBtnWrapper>
            </ReviewsTextBox>
          </ReviewsVideoWrapper>
        </Box>
        <ReviewsMarquee toggleModal={toggleModal} />
      </ReviewsSection>
    </ReviewsBackground>
  );
};
