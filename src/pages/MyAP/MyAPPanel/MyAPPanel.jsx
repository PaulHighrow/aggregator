import { useEffect, useState } from 'react';
import { Attendance } from '../Attendance/Attendance';
import { LessonFinder } from '../LessonFinder/LessonFinder';
import { Points } from '../Points/Points';
import {
  APPanel,
  APPanelBtn,
  APPanelResetBtn,
  CalendarBtnIcon,
  CupBtnIcon,
  IframeResetLinkButton,
  IframeSetLinkIcon,
  PanelBackdrop,
  PanelHideLeftSwitch,
  PanelHideRightSwitch,
  PanelHideSwitch,
  SearchBtnIcon,
} from './MyAPPanel.styled';

export const MyAPPanel = ({
  lessons,
  link,
  user,
  points,
  setPlatformIframeLink,
}) => {
  const [isBackdropShown, setIsBackdropShown] = useState(false);
  const [isLessonFinderShown, setIsLessonFinderShown] = useState(false);
  const [isRatingShown, setIsRatingShown] = useState(false);
  const [isCalendarShown, setIsCalendarShown] = useState(false);
  const [isButtonBoxShown, setIsButtonBoxShown] = useState(true);

  const toggleButtonBox = () => {
    hideBackdrop();
    setIsButtonBoxShown(isShown => !isShown);
  };

  const flatPoints = Object.values(points).flatMap(user => user);

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
      !isRatingShown &&
      !isCalendarShown &&
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
      !isLessonFinderShown &&
      !isCalendarShown &&
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
      !isRatingShown &&
      !isLessonFinderShown &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsCalendarShown(isCalendarShown => !isCalendarShown);
  };

  const toggleTooltip = () => {
    const resetBtnEl = document.querySelector('#reset-btn');

    setTimeout(() => {
      resetBtnEl.classList.add('tooltip-open');
    }, 5000);

    setTimeout(() => {
      resetBtnEl.classList.remove('tooltip-open');
    }, 15000);
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isBackdropShown) {
        hideBackdrop();
      }
    };
    toggleTooltip();

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      <PanelBackdrop
        onClick={hideBackdrop}
        className={isBackdropShown ? '' : 'hidden'}
      />

      <PanelHideSwitch id="no-transform" onClick={toggleButtonBox}>
        {isButtonBoxShown ? <PanelHideRightSwitch /> : <PanelHideLeftSwitch />}
      </PanelHideSwitch>
      <APPanel className={isButtonBoxShown ? '' : 'hidden'}>
        <IframeResetLinkButton>
          <APPanelResetBtn id="reset-btn">
            <IframeSetLinkIcon
              onClick={() => {
                setPlatformIframeLink(link + ' ');
              }}
            />
          </APPanelResetBtn>
        </IframeResetLinkButton>
        <APPanelBtn onClick={toggleSearch}>
          <SearchBtnIcon className={isLessonFinderShown && 'active'} />
        </APPanelBtn>
        <APPanelBtn onClick={toggleRating}>
          <CupBtnIcon className={isRatingShown && 'active'} />
        </APPanelBtn>
        <APPanelBtn onClick={toggleCalendar}>
          <CalendarBtnIcon className={isCalendarShown && 'active'} />
        </APPanelBtn>
      </APPanel>

      {isLessonFinderShown && (
        <LessonFinder
          lessons={lessons}
          user={user}
          setPlatformIframeLink={setPlatformIframeLink}
        />
      )}
      {isRatingShown && <Points user={user} flatPoints={flatPoints} />}
      {isCalendarShown && <Attendance user={user} />}
    </>
  );
};
