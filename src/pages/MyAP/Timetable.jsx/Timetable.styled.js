import styled from 'styled-components';
import { TimetableBtnIcon } from '../MyAPPanel/MyAPPanel.styled';
import { Link } from 'react-router-dom';

export const TimetableBox = styled.div`
  position: absolute;
  top: 142px;
  right: 120px;
  z-index: 5;

  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  font-family: var(--my-ap-font-family);

  overflow: hidden;
  border-radius: 20px;
  padding: 0 20px;
  height: 226px;
  width: 362px;
`;

export const TimetableHeading = styled.h3`
  padding: 9px 0;

  color: #525266;
  border-bottom: 1px solid #0000000d;
  margin-bottom: -1px;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TimetableIcon = styled(TimetableBtnIcon)``;

export const TimetableBody = styled.div`
  display: flex;
  justify-content: center;

  font-size: 14px;
  line-height: 1.2;
  color: #525266;
`;

export const TimetableWebinars = styled.div`
  padding: 0 22.5px;
  position: relative;

  &::before {
    content: '';
    height: 132px;
    width: 1px;

    position: absolute;
    top: 21px;
    right: 0;
    z-index: 1;

    background-color: #0000000d;
  }
`;

export const TimetableSpeakings = styled.div`
  padding: 0 22.5px;
`;

export const TimetableLessonType = styled.span`
  display: block;
  padding: 6px 0;

  text-align: center;
  width: 118px;

  border-bottom: 1px solid var(--accent-color);
  margin-bottom: -1px;
`;

export const TimetableLessonLink = styled(Link)`
  display: block;
  padding: 5px 0;
  margin-top: 6px;
  height: 26px;

  position: relative;

  text-align: center;
  text-decoration: none;
  width: 100%;
  color: #000;
  font-weight: 400;
  border: 1.5px solid #525266;

  border-radius: 5px;
  overflow: hidden;
  background: transparent;

  transition: all var(--animation-global);

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

  &:hover,
  &:focus {
    border: 1.5px solid transparent;
    color: #fff;
    font-weight: 500;

    &::before {
      opacity: 1;
    }
  }
`;

export const TimetableLessonLinkText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  transform: translate(-50%, -50%);
`;
