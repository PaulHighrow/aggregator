import { ReactComponent as loveIcon } from 'img/svg/love.svg';
import { ReactComponent as screamIcon } from 'img/svg/scream.svg';
import styled from 'styled-components';

import { heroImgsIndex } from '../../img/hero/heroImgs';
import jpegBg from '../../img/hero/skillhub-grad-only-bg.jpg';

const { flagWebp } = heroImgsIndex;

export const HeroSection = styled.section`
  position: relative;
  margin-top: 80px;
  background-color: var(--main-color);
  background-image: url(${jpegBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
  min-height: 500px;
  display: flex;
  align-items: end;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const ScreamTopIcon = styled(screamIcon)`
  position: absolute;
  top: 46px;
  left: 48px;
  width: 107px;
  height: 102px;

  @media screen and (min-width: 480px) {
    width: 125px;
    height: 120px;
  }

  @media screen and (min-width: 768px) {
    width: 143px;
    height: 138px;
  }
`;

export const ScreamBotIcon = styled(screamIcon)`
  position: absolute;
  bottom: 100px;
  right: 70px;
  width: 136px;
  height: 136px;

  @media screen and (min-width: 480px) {
    bottom: 110px;
    right: 75px;
    width: 204px;
    height: 204px;
  }

  @media screen and (min-width: 768px) {
    bottom: 125px;
    right: 85px;
    width: 272px;
    height: 272px;
  }
`;

export const LoveTopIcon = styled(loveIcon)`
  position: absolute;
  top: 136px;
  right: 36px;
  width: 88px;
  height: 85px;

  @media screen and (min-width: 480px) {
    top: 136px;
    right: 44px;
    width: 96px;
    height: 93px;
  }

  @media screen and (min-width: 768px) {
    top: 367px;
    right: 52px;
    width: 106px;
    height: 102px;
  }
`;

export const LoveBotIcon = styled(loveIcon)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 71px;
  height: 69px;

  @media screen and (min-width: 480px) {
    bottom: 12px;
    left: 12px;
  }

  @media screen and (min-width: 768px) {
    bottom: 67px;
    left: 67px;
    width: 89px;
    height: 86px;
  }

  @media screen and (min-width: 1024px) {
    bottom: 67px;
    left: 187px;
    width: 89px;
    height: 86px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  color: var(--text-color);
  text-shadow: 0px 17px 50px rgba(0, 0, 0, 0.25);
  /* -webkit-text-stroke: 2px var(--main-color); */
  font-family: var(--secondary-font-family);
  font-size: 50px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 480px;
    font-size: 80px;
  }

  @media screen and (min-width: 1024px) {
    width: 640px;
    font-size: 100px;
  }
`;

export const SubTitle = styled(Title)`
  top: 35%;
  text-shadow: 0px 5px 14px rgba(0, 0, 0, 0.25);
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 45px;
  }
`;

export const BtnUnderlay = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 15%;
`;

export const HeroLeadBtn = styled.button`
  position: relative;
  width: 280px;
  height: 45px;
  padding: 10px 10px;

  text-align: center;
  border-radius: 47px;

  font-size: 20px;
  font-weight: 700;
  border: none;
  outline: transparent;

  background-color: var(--text-color);

  @media screen and (min-width: 480px) {
    width: 320px;
    height: 55px;
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 360px;
    height: 65px;
    font-size: 30px;
  }

  /* &::before {
    position: absolute;
    opacity: 1;
    left: -30px;
    top: -30px;
    content: '';
    background: url(${flagWebp});
    background-repeat: no-repeat;
    background-size: contain;
    width: 96px;
    height: 60px;

    @media screen and (min-width: 480px) {
      left: -35px;
      top: -35px;
      width: 120px;
      height: 75px;
    }

    @media screen and (min-width: 768px) {
      left: -40px;
      top: -40px;
      width: 144px;
      height: 90px;
    }
  } */

  &::after {
    position: absolute;
    left: -5px;
    top: -5px;
    z-index: -1;
    content: '';
    width: 280px;
    height: 45px;
    background-color: var(--secondary-color);
    transform: rotate(-1.205deg);
    border-radius: 47px;
    box-shadow: 0px 0px 45px 10px #00000054;
    transition: box-shadow var(--animation-global),
      transform var(--animation-global);

    @media screen and (min-width: 480px) {
      width: 320px;
      height: 55px;
    }

    @media screen and (min-width: 768px) {
      width: 360px;
      height: 65px;
    }
  }

  &:hover::after {
    z-index: -1;
    transform: rotate(2.41deg);
    box-shadow: 0px 0px 22px 5px #c9c5d7;
  }
`;
