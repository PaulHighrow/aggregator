import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';

export const SupportBox = styled.div`
  overflow: scroll;
  background-color: white;
  position: absolute;
  border-radius: 20px;
  top: 0;
  left: 0;

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(-100%);
  }

  &.shown {
    transform: translateX(0);
  }
`;

export const SupportBackground = styled(StreamsBackgroundWrapper)`
  background-position: right -70px bottom 0px;
  background-size: auto 33%;

  @media screen and (min-width: 768px) {
    background-position: center bottom 25px;
    background-size: auto 40%;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -115px bottom -115px;
    background-size: auto 55%;
  }
`;

export const SupportFAQBox = styled.div`
  padding: 20px 40px 20px 65px;

  @media screen and (min-width: 768px) {
    padding: 28px 32px 28px 95px;
  }

  @media screen and (min-width: 1280px) {
    padding: 36px 40px 36px 95px;
  }
`;

export const FAQHeading = styled.h3`
  color: var(--main-color);
  font-size: 32px;
  font-family: var(--title-font-family);
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FAQListItem = styled.li``;

export const FAQListQuestion = styled.span`
  display: inline-block;
  text-decoration: underline;
  color: var(--main-color);
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 6px;

  transition: color var(--animation-global);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;

export const FAQListAnswer = styled.p`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;
