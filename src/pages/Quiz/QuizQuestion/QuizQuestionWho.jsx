import books from '../../../img/quiz/books.png';
import hat from '../../../img/quiz/hat.png';
import laptop from '../../../img/quiz/laptop.png';
import {
  BackgroundFilterBottomLeft,
  BackgroundFilterTopRight,
  BackgroungStarSmall,
  BookEmoji,
  HatImg,
  LaptopImg,
  Logo,
  NextPageBtn,
  Pagination,
  PreviousPageBtn,
  Question,
  QuizBox,
  QuizButton,
  QuizButtonBox,
} from '../Quiz.styled';

export const QuizQuestionWho = ({ continueQuiz, previousQuestion }) => {
  return (
    <>
      <QuizBox>
        <Logo />
        <Question>Для кого цікавить вивчення мови?</Question>
        <QuizButtonBox>
          <QuizButton onClick={continueQuiz}>Для себе</QuizButton>
          <QuizButton onClick={continueQuiz}>Для дитини</QuizButton>
        </QuizButtonBox>
        <BackgroundFilterTopRight />
        <BackgroundFilterBottomLeft />
        <BackgroungStarSmall />
        <LaptopImg src={laptop} alt="Blurred laptop" width="67" />
        <BookEmoji src={books} alt="Book emoji" width="112" />
        <HatImg src={hat} alt="Blurred alumni hat" width="110" />
        <Pagination>
          <PreviousPageBtn
            onClick={previousQuestion}
          ></PreviousPageBtn>{' '}
          <NextPageBtn></NextPageBtn>
        </Pagination>
      </QuizBox>
    </>
  );
};
