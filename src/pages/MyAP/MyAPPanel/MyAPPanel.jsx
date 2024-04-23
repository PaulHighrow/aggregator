import { useEffect, useState } from 'react';
import { LessonFinder } from '../LessonFinder/LessonFinder';
import {
  APPanel,
  APPanelBtn,
  CalendarBtnIcon,
  CupBtnIcon,
  PanelBackdrop,
  SearchBtnIcon,
  PanelHideLeftSwitch,
  PanelHideRightSwitch,
  PanelHideSwitch,
} from './MyAPPanel.styled';

export const MyAPPanel = ({ lessons }) => {
  const [isBackdropShown, setIsBackdropShown] = useState(false);
  const [isLessonFinderShown, setIsLessonFinderShown] = useState(false);
  const [isRatingShown, setIsRatingShown] = useState(false);
  const [isCalendarShown, setIsCalendarShown] = useState(false);
  const [isButtonBoxShown, setIsButtonBoxShown] = useState(true);

  const toggleButtonBox = () => {
    setIsButtonBoxShown(isShown => !isShown);
  };

  const hideBackdrop = () => {
    setIsBackdropShown(false);
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsCalendarShown(false);
  };

  const toggleSearch = () => {
    !isBackdropShown &&
      (!isRatingShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      (!isRatingShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsRatingShown(false);
    setIsCalendarShown(false);
    setIsLessonFinderShown(isLessonFinderShown => !isLessonFinderShown);
  };

  const toggleRating = () => {
    !isBackdropShown &&
      (!isLessonFinderShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      (!isLessonFinderShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsLessonFinderShown(false);
    setIsCalendarShown(false);
    setIsRatingShown(isRatingShown => !isRatingShown);
  };

  const toggleCalendar = () => {
    !isBackdropShown &&
      (!isRatingShown || !isLessonFinderShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      (!isRatingShown || !isLessonFinderShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsCalendarShown(isCalendarShown => !isCalendarShown);
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isBackdropShown) {
        hideBackdrop();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      {isBackdropShown && <PanelBackdrop onClick={hideBackdrop} />}
      <PanelHideSwitch id="no-transform" onClick={toggleButtonBox}>
        {isButtonBoxShown ? <PanelHideRightSwitch /> : <PanelHideLeftSwitch />}
      </PanelHideSwitch>
      <APPanel className={isButtonBoxShown ? '' : 'hidden'}>
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
