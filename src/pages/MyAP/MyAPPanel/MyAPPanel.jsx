import { useState } from 'react';
import {
  APPanel,
  APPanelBtn,
  CalendarBtnIcon,
  CupBtnIcon,
  PanelBackdrop,
  SearchBtnIcon,
} from './MyAPPanel.styled';
import { LessonFinder } from '../LessonFinder/LessonFinder';

export const MyAPPanel = ({ lessons }) => {
  const [isBackdropShown, setIsBackdropShown] = useState(false);
  const [isLessonFinderShown, setIsLessonFinderShown] = useState(false);
  const [isRatingShown, setIsRatingShown] = useState(false);
  const [isCalendarShown, setIsCalendarShown] = useState(false);

  const toggleSearch = () => {
    !isBackdropShown &&
      (!isRatingShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => !isBackdropShown);
    setIsRatingShown(false);
    setIsCalendarShown(false);
    setIsLessonFinderShown(isLessonFinderShown => !isLessonFinderShown);
  };

  const toggleRating = () => {
    !isBackdropShown &&
      (!isLessonFinderShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => !isBackdropShown);
    setIsLessonFinderShown(false);
    setIsCalendarShown(false);
    setIsRatingShown(isRatingShown => !isRatingShown);
  };

  const toggleCalendar = () => {
    !isBackdropShown &&
      (!isRatingShown || !isLessonFinderShown) &&
      setIsBackdropShown(isBackdropShown => !isBackdropShown);
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsCalendarShown(isCalendarShown => !isCalendarShown);
  };

  return (
    <>
      {isBackdropShown && <PanelBackdrop />}
      <APPanel>
        <APPanelBtn onClick={toggleSearch}>
          <SearchBtnIcon />
        </APPanelBtn>
        <APPanelBtn onClick={toggleRating}>
          <CupBtnIcon />
        </APPanelBtn>
        <APPanelBtn onClick={toggleCalendar}>
          <CalendarBtnIcon />
        </APPanelBtn>
      </APPanel>

      {isLessonFinderShown && <LessonFinder lessons={lessons} />}
    </>
  );
};
