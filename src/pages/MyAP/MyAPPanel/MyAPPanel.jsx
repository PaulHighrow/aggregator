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
  TimetableBtnIcon,
} from './MyAPPanel.styled';
import { Timetable } from '../Timetable.jsx/Timetable';

export const MyAPPanel = ({
  lessons,
  link,
  user,
  points,
  montlyPoints,
  setPlatformIframeLink,
}) => {
  const [isBackdropShown, setIsBackdropShown] = useState(false);
  const [isLessonFinderShown, setIsLessonFinderShown] = useState(false);
  const [isRatingShown, setIsRatingShown] = useState(false);
  const [isCalendarShown, setIsCalendarShown] = useState(false);
  const [isTimetableShown, setIsTimetableShown] = useState(false);
  const [isButtonBoxShown, setIsButtonBoxShown] = useState(true);
  const [isDisclaimerTimeoutActive, setIsDisclaimerTimeoutActive] =
    useState(true);

  const toggleButtonBox = () => {
    hideBackdrop();
    setIsButtonBoxShown(isShown => !isShown);
  };

  const flatPoints = Object.values(points).flatMap(user => user);
  const flatMonthlyPoints = Object.values(montlyPoints).flatMap(user => user);

  const hideBackdrop = () => {
    setIsBackdropShown(false);
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsCalendarShown(false);
    setIsTimetableShown(false);
  };

  const toggleSearch = () => {
    !isBackdropShown &&
      (!isRatingShown || !isCalendarShown || !isTimetableShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      !isRatingShown &&
      !isCalendarShown &&
      !isTimetableShown &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsRatingShown(false);
    setIsCalendarShown(false);
    setIsTimetableShown(false);
    setIsLessonFinderShown(isLessonFinderShown => !isLessonFinderShown);
  };

  const toggleRating = () => {
    !isBackdropShown &&
      (!isLessonFinderShown || !isCalendarShown || !isTimetableShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      !isLessonFinderShown &&
      !isCalendarShown &&
      !isTimetableShown &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsLessonFinderShown(false);
    setIsCalendarShown(false);
    setIsTimetableShown(false);
    setIsRatingShown(isRatingShown => !isRatingShown);
  };

  const toggleCalendar = () => {
    !isBackdropShown &&
      (!isRatingShown || !isLessonFinderShown || !isTimetableShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      !isRatingShown &&
      !isLessonFinderShown &&
      !isTimetableShown &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsTimetableShown(false);
    setIsCalendarShown(isCalendarShown => !isCalendarShown);
  };

  const toggleTimetable = () => {
    !isBackdropShown &&
      (!isRatingShown || !isLessonFinderShown || !isCalendarShown) &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = true));
    isBackdropShown &&
      !isRatingShown &&
      !isLessonFinderShown &&
      !isCalendarShown &&
      setIsBackdropShown(isBackdropShown => (isBackdropShown = false));
    setIsLessonFinderShown(false);
    setIsRatingShown(false);
    setIsCalendarShown(false);
    setIsTimetableShown(isTimetableShown => !isTimetableShown);
  };

  const toggleTooltip = e => {
    !isDisclaimerTimeoutActive &&
      e.currentTarget.classList.toggle('tooltip-open');
  };

  const toggleTooltipTimeout = () => {
    const resetBtnEl = document.querySelector('#reset-btn');

    if (isDisclaimerTimeoutActive) {
      setTimeout(() => {
        resetBtnEl.classList.add('tooltip-open');
      }, 10000);

      setTimeout(() => {
        resetBtnEl.classList.remove('tooltip-open');
        setIsDisclaimerTimeoutActive(false);
      }, 20000);
    }
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isBackdropShown) {
        hideBackdrop();
      }
    };
    toggleTooltipTimeout();

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
          <APPanelResetBtn
            id="reset-btn"
            onMouseEnter={e => toggleTooltip(e)}
            onMouseOut={e => toggleTooltip(e)}
          >
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
        <APPanelBtn onClick={toggleTimetable}>
          <TimetableBtnIcon className={isTimetableShown && 'active'} />
        </APPanelBtn>
      </APPanel>

      {isLessonFinderShown && (
        <LessonFinder
          lessons={lessons}
          user={user}
          setPlatformIframeLink={setPlatformIframeLink}
        />
      )}
      {isRatingShown && (
        <Points
          user={user}
          flatPoints={flatPoints}
          flatMonthlyPoints={flatMonthlyPoints}
        />
      )}
      {isCalendarShown && <Attendance user={user} />}
      {isTimetableShown && <Timetable user={user} />}
    </>
  );
};
