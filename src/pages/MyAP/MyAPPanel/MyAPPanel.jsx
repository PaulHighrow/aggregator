import { useState } from 'react';
import {
  APPanel,
  APPanelBtn,
  CalendarBtnIcon,
  CupBtnIcon,
  PanelBackdrop,
  SearchBtnIcon,
} from './MyAPPanel.styled';

export const MyAPPanel = () => {
  const [isBackdropShown, setIsBackdropShown] = useState(false);

  const toggleSearch = () => {
    setIsBackdropShown(isBackdropShown => !isBackdropShown);
  };

  const toggleRating = () => {
    setIsBackdropShown(isBackdropShown => !isBackdropShown);
  };

  const toggleCalendar = () => {
    setIsBackdropShown(isBackdropShown => !isBackdropShown);
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
    </>
  );
};
