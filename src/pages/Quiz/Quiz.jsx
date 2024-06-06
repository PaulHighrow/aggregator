import { useState } from 'react';
import { QuizQuestionLang } from './QuizQuestion/QuizQuestionLang';
import { QuizQuestionWho } from './QuizQuestion/QuizQuestionWho';
import { QuizTitle } from './QuizTitle/QuizTitle';

export const Quiz = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const beginQuiz = () => {
    setActiveSlide(1);
  };
  const continueQuiz = () => {
    setActiveSlide(slide => (slide += 1));
  };
  const previousQuestion = () => {
    setActiveSlide(slide => (slide - 1));
  };

  return (
    <>
      {activeSlide === 0 && <QuizTitle beginQuiz={beginQuiz} />}
      {activeSlide === 1 && <QuizQuestionLang continueQuiz={continueQuiz} activeSlide={activeSlide} previousQuestion={previousQuestion}/>}
      {activeSlide === 2 && <QuizQuestionWho continueQuiz={continueQuiz} previousQuestion={previousQuestion}/>}
    </>
  );
};
