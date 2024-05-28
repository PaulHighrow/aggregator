import styled from 'styled-components';
import { ReactComponent as BoxSwitchLeft } from '../../../img/svg/btnbox-switch-left-gray.svg';
import { ReactComponent as BoxSwitchRight } from '../../../img/svg/btnbox-switch-right-gray.svg';
import { ReactComponent as CalendarIcon } from '../../../img/svg/myap/calendar.svg';
import { ReactComponent as CupIcon } from '../../../img/svg/myap/cup.svg';
import { ReactComponent as SearchIcon } from '../../../img/svg/myap/search.svg';
import {
  NameReverse,
  NameReverseBtn,
} from 'components/Stream/Kahoots/Kahoots.styled';

export const PanelBackdrop = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  background-color: #00000080;
  z-index: 4;
  opacity: 1;

  transition: opacity var(--animation-global);

  &.hidden {
    opacity: 0;
    pointer-events: none;

    transition: opacity var(--animation-global);
  }
`;

export const APPanel = styled.div`
  width: 60px;
  height: 145px;

  position: absolute;
  top: 142px;
  right: 38px;
  z-index: 5;
  border-radius: 21px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(200%);
  }
`;

export const APPanelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  color: #bebecc;
  transition: color var(--animation-global);

  &:hover svg {
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.16));
  }
`;

export const SearchBtnIcon = styled(SearchIcon)`
  height: 30px;
  width: 30px;

  &.active {
    color: #525266;
  }
`;

export const FaqSearchBtnIcon = styled(SearchIcon)`
  height: 16px;
  width: 16px;
  color: #bebecc;

  transition: color var(--animation-global);
`;

export const CupBtnIcon = styled(CupIcon)`
  height: 30px;
  width: 30px;

  &.active {
    color: #525266;
  }
`;

export const CalendarBtnIcon = styled(CalendarIcon)`
  height: 30px;
  width: 30px;

  &.active {
    color: #525266;
  }
`;

export const PanelHideSwitch = styled.div`
  position: absolute;
  top: 118px;
  right: 0;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  z-index: 10;

  width: 12px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  border-radius: 4px;

  &:hover * {
    stroke: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    top: 213px;
    transform: translateY(-50%);
  }
`;

export const PanelHideLeftSwitch = styled(BoxSwitchLeft)`
  stroke: #525266;
  transition: stroke var(--animation-global);
`;

export const PanelHideRightSwitch = styled(BoxSwitchRight)`
  stroke: #525266;
  transition: stroke var(--animation-global);
`;

export const IframeSetLinkButton = styled(NameReverseBtn)`
  top: -36px;
  left: 50%;

  transform: translateX(-50%);

  z-index: 5;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    background-color: none;
  }
`;

export const IframeSetLinkIcon = styled(NameReverse)`
  color: #525266;
`;
