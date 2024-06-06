import de from '../../../img/quiz/de.png';
import gb from '../../../img/quiz/gb.png';
import pl from '../../../img/quiz/pl.png';
import {
  BackgroundFilterBottomLeft,
  BackgroundFilterTopRight,
  BackgroungStarSmall,
  FlagEmoji,
  Logo,
  NextPageBtn,
  Pagination,
  PreviousPageBtn,
  Question,
  QuizBox,
  QuizButton,
  QuizButtonBox,
  QuizButtonContent,
} from '../Quiz.styled';

export const QuizQuestionLang = ({ continueQuiz, activeSlide, previousQuestion }) => {
  return (
    <>
      <QuizBox>
        <Logo />
        <Question>Вивчення якої мови вас цікавить?</Question>
        <QuizButtonBox>
          <QuizButton onClick={continueQuiz}>
            <QuizButtonContent>
              <FlagEmoji src={gb} alt="Great Britain flag emoji" width="21" />
              Англійська
            </QuizButtonContent>
          </QuizButton>
          <QuizButton onClick={continueQuiz}>
            <QuizButtonContent>
              <FlagEmoji src={de} alt="Germany flag emoji" width="21" />
              Німецька
            </QuizButtonContent>
          </QuizButton>
          <QuizButton onClick={continueQuiz}>
            <QuizButtonContent>
              <FlagEmoji src={pl} alt="Poland flag emoji" width="21" /> Польська
            </QuizButtonContent>
          </QuizButton>
        </QuizButtonBox>
        <BackgroundFilterTopRight />
        <BackgroundFilterBottomLeft />
        <BackgroungStarSmall />
        <Pagination>
          <PreviousPageBtn
            className={activeSlide - 1 < 1 && 'disabled'}
            disabled={activeSlide - 1 < 1 && true}
            onClick={previousQuestion}
          ></PreviousPageBtn>{' '}
          <NextPageBtn></NextPageBtn>
        </Pagination>
      </QuizBox>
    </>
  );
};
