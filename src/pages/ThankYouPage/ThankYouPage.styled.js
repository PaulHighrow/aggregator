import styled from 'styled-components';
import blurEllipsePNG from '../../img/bg/thank-you.png';
import thankYouPersonPNG from '../../img/bg/thank-you-person.png';
import blurEllipseWebp from '../../img/bg/thank-you.webp';
import thankYouPersonWebp from '../../img/bg/thank-you-person.webp';
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../img/svg/social-links/facebook-outline.svg';
import { ReactComponent as InstagramIcon } from '../../img/svg/social-links/instagram-outline.svg';
import { ReactComponent as TikTokIcon } from '../../img/svg/social-links/tiktok-outline.svg';
import { ReactComponent as YouTubeIcon } from '../../img/svg/social-links/youtube-outline.svg';
import { ReactComponent as ThankYouArrowIcon } from '../../img/svg/ty-arrow.svg';
import { ReactComponent as HeroStarIcon } from '../../img/svg/heroStar.svg';

export const ThankYouHeader = styled.header`
  position: fixed;

  font-family: var(--new-font-family);

  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 20px;
  height: 44px;
  background-color: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.18) 0 2px 3px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform var(--animation-global);

  @media screen and (min-width: 400px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 42px;
    height: 60px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 120px;
  }

  &.hidden {
    transform: translateY(-90px);
  }

  &.shown {
    transform: translateY(0px);
  }
`;

export const ThankYouSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  padding: 96px 20px 52px 20px;

  background-position: left -485px bottom -60px, right -485px top 100px,
    right 28px bottom 92px;
  background-image: image-set(
      url(${blurEllipseWebp}) type('image/webp'),
      url(${blurEllipsePNG}) type('image/png')
    ),
    image-set(
      url(${blurEllipseWebp}) type('image/webp'),
      url(${blurEllipsePNG}) type('image/png')
    );
  background-size: 602px 602px, 602px 602px, 429px 429px;
  background-repeat: no-repeat, no-repeat;

  font-family: var(--new-font-family);

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-left: 120px;
    padding-bottom: 70px;
    padding-right: 0;

    height: 100vh;
    background-position: left -715px center, right -715px center,
      right 28px bottom 92px;
    background-image: image-set(
        url(${blurEllipseWebp}) type('image/webp'),
        url(${blurEllipsePNG}) type('image/png')
      ),
      image-set(
        url(${blurEllipseWebp}) type('image/webp'),
        url(${blurEllipsePNG}) type('image/png')
      ),
      image-set(
        url(${thankYouPersonWebp}) type('image/webp'),
        url(${thankYouPersonPNG}) type('image/png')
      );
    background-size: 975px 975px, 975px 975px, 612px 612px;
    background-repeat: no-repeat, no-repeat;
  }

  @media screen and (min-width: 1920px) {
    background-position: left -715px center, right -715px center,
      right 89px top 61px;
    background-image: image-set(
        url(${blurEllipseWebp}) type('image/webp'),
        url(${blurEllipsePNG}) type('image/png')
      ),
      image-set(
        url(${blurEllipseWebp}) type('image/webp'),
        url(${blurEllipsePNG}) type('image/png')
      ),
      image-set(
        url(${thankYouPersonWebp}) type('image/webp'),
        url(${thankYouPersonPNG}) type('image/png')
      );
    background-size: 975px 975px, 975px 975px, 798px 798px;
    background-repeat: no-repeat, no-repeat;
  }
`;

export const ThankYouPicture = styled.picture`
  width: 100%;
  height: 100%;

  @media screen and (min-width:1280px) {
    display: none;
  }
`;

export const ThankYouImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-bottom: 125px;
`;

export const ThankYouTextWrapper = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 30%;
    left: 120px;

    max-width: 643px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 805px;
  }
`;

export const ThankYouHeading = styled.h1`
  font-size: 30px;
  text-align: center;

  margin-bottom: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    line-height: 1.2;
    font-weight: 700;
  }

  @media screen and (min-width: 1920px) {
    font-size: 50px;
  }
`;

export const ThankYouDesc = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1280px) {
    text-align: start;
    font-size: 18px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 8px;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`;

export const MainLinkBtn = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #fff;

  width: 100%;
  max-width: 360px;

  padding: 20px 60px;
  background: linear-gradient(322deg, #0f645b 23.22%, #09c6cc 110.01%), #0f645b;
  border-radius: 50px;
  font-family: var(--new-font-family);
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.48px;

  @media screen and (min-width: 1280px) {
    width: auto;
  }

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    font-size: 20px;
    letter-spacing: 0.6px;
  }
`;

export const LinkBtn = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #000;

  width: 100%;
  max-width: 360px;

  font-size: 16px;
  font-weight: 700;

  padding: 20px 45px;
  border-radius: 50px;
  line-height: 1;
  letter-spacing: 0.48px;
  border: 2px var(--main-color) solid;

  @media screen and (min-width: 1280px) {
    width: auto;
  }

  @media screen and (min-width: 1920px) {
    padding: 20px 60px;
    font-size: 20px;
    letter-spacing: 0.6px;
  }
`;

export const SocialsBox = styled.div`
  position: absolute;
  bottom: 52px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  max-width: 240px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
    left: 120px;
    transform: translateX(0%);
    max-width: unset;
  }

  @media screen and (min-width: 1920px) {
    bottom: 180px;
  }
`;

export const SocialsText = styled.p`
  text-align: center;
  font-size: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
`;

export const SocialsLinkWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialLogoLink = styled.a`
  width: 44px;
  height: 44px;

  border-radius: 50%;
  background-color: var(--main-color);

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    width: 60px;
    height: 60px;
  }
`;

const socialBtnStyles =
  'color: #fff; width: 24px; height: 24px; transition: color var(--animation-global), transform var(--animation-global), filter var(--animation-global); ';

const socialBtnStylesFullHD = 'width: 40px; height: 40px;';

const socialBtnStylesOnHover =
  'color: var(--accent-color);  transform: scale(1.2);  filter: drop-shadow(0px 0px 0.5px #00000054);';

export const InstagramBtn = styled(InstagramIcon)`
  ${socialBtnStyles}

  @media screen and (min-width: 1920px) {
    ${socialBtnStylesFullHD}
  }

  ${SocialLogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const FacebookBtn = styled(FacebookIcon)`
  ${socialBtnStyles}

  @media screen and (min-width: 1920px) {
    ${socialBtnStylesFullHD}
  }

  ${SocialLogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const TikTokBtn = styled(TikTokIcon)`
  ${socialBtnStyles}

  @media screen and (min-width: 1920px) {
    ${socialBtnStylesFullHD}
  }

  ${SocialLogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const YouTubeBtn = styled(YouTubeIcon)`
  ${socialBtnStyles}

  @media screen and (min-width: 1920px) {
    ${socialBtnStylesFullHD}
  }

  ${SocialLogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const HeroTopStar = styled(HeroStarIcon)`
  position: absolute;
  left: 16px;
  bottom: -39px;

  width: 32px;
  height: 32px;

  @media screen and (min-width: 1280px) {
    top: -25px;
    right: -114px;
    left: unset;
    bottom: unset;

    width: 48px;
    height: 48px;
  }

  @media screen and (min-width: 1920px) {
    top: -146px;
    right: -114px;

    width: 60px;
    height: 60px;
  }
`;

export const HeroBottomStar = styled(HeroStarIcon)`
  position: absolute;
  bottom: 198px;
  right: -36px;

  width: 72px;
  height: 72px;

  @media screen and (min-width: 1280px) {
    bottom: 52px;
    right: 135px;

    width: 81px;
    height: 81px;
  }

  @media screen and (min-width: 1920px) {
    bottom: 129px;
    right: 185px;

    width: 111px;
    height: 111px;
  }
`;

export const ThankYouArrow = styled(ThankYouArrowIcon)`
  position: absolute;
  right: -10px;
  bottom: 185px;

  width: 23px;
  height: 81px;
  transform: rotate(-10deg);

  @media screen and (min-width: 1280px) {
    right: -35px;
    bottom: 56px;

    width: 32px;
    height: 115px;
    transform: rotate(-26deg);
  }

  @media screen and (min-width: 1920px) {
    right: -50px;
    bottom: 33px;

    width: 42px;
    height: 151px;
    transform: rotate(-12deg);
  }
`;
