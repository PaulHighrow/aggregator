import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBtnIcon } from '../MyAPPanel/MyAPPanel.styled';
import { ReactComponent as BoxSwitchDown } from '../../../img/svg/btnbox-switch-down.svg';
import { ReactComponent as BoxSwitchUp } from '../../../img/svg/btnbox-switch-up.svg';

export const FinderBox = styled.div`
  position: absolute;
  top: 142px;
  right: 120px;
  z-index: 5;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  border-radius: 20px;
  height: 442px;
  transition: all var(--animation-global);

  &.nothing-found {
    height: unset;
    transition: all var(--animation-global);
  }
`;

export const FinderLabel = styled.label`
  display: block;
  position: relative;
`;

export const FinderIcon = styled(SearchBtnIcon)`
  position: absolute;
  top: 50%;
  left: 20px;

  transform: translateY(-50%);
`;

export const FinderInput = styled.input`
  height: 48px;
  width: 362px;

  overflow: hidden;

  padding: 9px 20px;
  padding-left: 60px;
  border: none;
  outline: transparent;

  font-family: var(--my-ap-font-family);
  font-size: 20px;
  line-height: 20px;
  color: #525266;
  vertical-align: middle;

  &::placeholder {
    color: #bebecc;
    font-size: 16px;
    vertical-align: middle;
    transform: translateY(-2px);
  }
`;

export const FinderLessons = styled.div`
  height: 394px;
  width: 362px;
  padding: 0 20px 13px 20px;

  overflow-y: scroll;
  scrollbar-width: thin;

  /* &::-webkit-scrollbar {
    display: none;
  } */

  background-color: #fff;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #0000000d;
  }
`;

export const FinderMolding = styled.div`
  background-color: var(--secondary-color);
  height: 13px;
`;

export const LessonBox = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: var(--my-ap-font-family);

  gap: 8px;
`;

export const LessonBoxItem = styled.li`
  color: #000;
  padding: 8px 0;
  border-bottom: 1px solid #0000000d;
`;

export const LessonTopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const LessonValuesLogo = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  text-transform: uppercase;
  text-align: center;
  font-size: 7.5px;
  font-weight: 700;
  font-family: var(--secondary-font-family);
  color: var(--secondary-color);
  text-shadow: 0px 1.527px 1.527px rgba(0, 0, 0, 0.25);

  border-radius: 6px;
  background: linear-gradient(322deg, #0f645b -5.61%, #09c6cc 93.88%);
`;

export const LessonValuesList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  gap: 4px;
`;

export const LessonTextValuesBox = styled.div`
  position: relative;
  padding-right: 32px;
  width: 100%;
`;

export const LessonValuesItem = styled.li`
  position: relative;
`;

export const LessonValueName = styled.p`
  color: #525266;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  text-transform: capitalize;
`;

export const LessonValueTopic = styled.p`
  color: #bebecc;
  font-size: 12px;
`;

export const LessonCopyNameButton = styled.button`
  border: none;
  outline: transparent;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  position: absolute;
  top: 0;
  right: 0;
`;

export const LessonPdfBox = styled.div`
  display: block;
`;

export const LessonValuePdfLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: #bebecc;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  gap: 4px;
`;

export const LessonVideoBox = styled.div`
  background-color: #0000004d;
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const PdfWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PdfBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const PdfPreviewBackground = styled.div`
  background-color: #303030;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 3px;
  height: 0;

  transform: scaleY(0);
  transform-origin: top;
  transition: transform 350ms linear, height 350ms linear;

  &:not(:last-child) {
    margin-bottom: 3px;
  }

  &.preview-open {
    height: 150px;
    transform: scaleY(1);
    transition: transform 350ms linear, height 350ms linear;

    & iframe {
      height: 100%;
    }
  }
`;

export const PdfPreviewBackgroundText = styled.span`
  font-size: 24px;
`;

export const PdfPreview = styled.iframe`
  width: 100%;
  height: 0px;
  display: block;

  transition: transform 350ms linear, height 350ms linear;
`;

export const FaqBox = styled.div``;

export const FaqListTrigger = styled.button`
  border: none;
  outline: transparent;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  width: 100%;
  padding: 6px;

  color: #bebecc;
`;

export const FaqList = styled.ul`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;

  transform: scaleY(0);
  transform-origin: top;
  height: 0;

  transition: transform var(--animation-global);

  &.faqlistopen {
    padding: 6px;
    height: auto;
    transform: scaleY(1);
  }
`;

export const FaqListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const FaqListLink = styled.a`
  border-radius: 6px;
  background: linear-gradient(322deg, #0f645b 23.22%, #09c6cc 110.01%), #0f645b;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  position: relative;

  width: 30px;
  height: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;

    transition: opacity var(--animation-global);

    background: linear-gradient(322deg, #09c6cc 23.22%, #0f645b 110.01%),
      #09c6cc;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;

export const FaqListLinkNumber = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  transform: translate(-50%, -50%);

  font-size: 20px;
  font-weight: 700;
  font-family: var(--secondary-font-family);
  color: var(--secondary-color);
  text-shadow: 0px 1.527px 1.527px rgba(0, 0, 0, 0.25);
`;

export const FaqSwitchDown = styled(BoxSwitchDown)`
  width: 14px;
  height: 14px;
`;

export const FaqSwitchUp = styled(BoxSwitchUp)`
  width: 14px;
  height: 14px;
`;
