import styled from 'styled-components';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { FormCloseBtn } from 'components/LeadForm/LeadForm.styled';
import { DescriptionTrigger } from 'components/Hero/Hero.styled';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  border-radius: 20px;
  background-color: var(--main-color);
  text-align: center;

  width: 300px;
  padding: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 700px;
    padding: 40px;
  }
`;

export const MarqueeBackdrop = styled(Backdrop)`
  background-color: #000000ab;
`;

export const MarqueeCloseBtn = styled(FormCloseBtn)`
  width: 30px;
  height: 30px;
`;

export const ModalHeader = styled.h4`
  color: var(--accent-color);
  font-family: var(--secondary-font-family);
  font-size: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const ModalDesc = styled.p`
  color: var(--secondary-color);
  font-size: 18px;
  max-height: 145px;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
  @media screen and (min-width: 1280px) {
    max-height: auto;
    overflow-y: hidden;
    font-size: 20px;
  }
`;

export const Details = styled(DescriptionTrigger)`
  margin-bottom: 0;
`;

export const DetailsLink = styled(Link)`
  text-decoration: none;

  &:hover > span,
  &:focus > span {
    color: var(--secondary-color);
  }
`;

export const MarqueeForwardBtn = styled.button`
  position: absolute;
  top: 50%;
  right: -2em;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(-50%);

  transition: all var(--animation-global);

  background-color: #000000ab;
  border-radius: 50%;
  border: none;

  &:hover svg,
  &:focus svg {
    fill: var(--accent-color);
  }

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const MarqueeForwardIcon = styled(IoIosArrowForward)`
  fill: var(--secondary-color);
  width: 30px;
  height: 30px;
`;

export const MarqueeBackBtn = styled.button`
  position: absolute;
  top: 50%;
  left: -2em;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(-50%);

  transition: all var(--animation-global);

  background-color: #000000ab;
  border-radius: 50%;
  border: none;

  &:hover svg,
  &:focus svg {
    fill: var(--accent-color);
  }

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const MarqueeBackIcon = styled(IoIosArrowBack)`
  fill: var(--secondary-color);
  width: 30px;
  height: 30px;
`;
