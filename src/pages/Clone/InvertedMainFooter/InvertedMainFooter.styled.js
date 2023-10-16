
import styled from 'styled-components';

import { PiMapPinDuotone } from 'react-icons/pi';
import { Link } from 'react-scroll';
import { ReactComponent as FacebookIcon } from '../../../img/svg/social-links/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../img/svg/social-links/instagram.svg';
import { ReactComponent as TikTokIcon } from '../../../img/svg/social-links/tiktok.svg';
import { ReactComponent as YouTubeIcon } from '../../../img/svg/social-links/youtube.svg';
import { Logo, LogoLink } from '../InvertedMenu/InvertedMenu.styled';

export const Footer = styled.footer`
  background-color: var(--secondary-color);
`;

export const FooterBox = styled.div`
  padding: 30px 32px;

  @media screen and (min-width: 768px) {
    padding: 36px 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 55px;
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLeftBox = styled.div``;

export const IconBox = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 96px;
  }
`;

export const FooterLogoLink = styled(LogoLink)`
margin: 0 auto;
  margin-bottom: 30px;
`

export const FooterLogo = styled(Logo)`
  height: 50px;
  display: block;
  flex-shrink: 0;
  
  height: 100%;
  transition: transform var(--animation-global), filter var(--animation-global);

  ${LogoLink}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #00000054);
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  width: max-content;
  gap: 25px;
  margin: 0 auto;
  margin-bottom: 36px;
  align-items: center;
`;

const socialBtnStyles =
  'fill: var(--accent-color); width: 40px; height: 40px; transition: fill var(--animation-global), transform var(--animation-global), filter var(--animation-global); ';

const socialBtnStylesOnHover =
  'fill: #fff;  transform: scale(1.2);  filter: drop-shadow(0px 0px 5px #00000054);';

export const InstagramBtn = styled(InstagramIcon)`
  ${socialBtnStyles}

  ${LogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const FacebookBtn = styled(FacebookIcon)`
  ${socialBtnStyles}

  ${LogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const TikTokBtn = styled(TikTokIcon)`
  ${socialBtnStyles}

  ${LogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const YouTubeBtn = styled(YouTubeIcon)`
  ${socialBtnStyles}

  ${LogoLink}:hover & {
    ${socialBtnStylesOnHover}
  }
`;

export const LeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    align-items: start;
    gap: 22px;
    margin: 0;
  }
`;

export const LeadDesc = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--main-color);
  letter-spacing: 1.8px;

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }

  @media screen and (min-width: 1280px) {
    font-size: 22px;
    text-align: left;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    gap: 113px;
  }
`;

export const FooterListItem = styled.li`
  margin: 0 auto;
`;

export const LinkListTitle = styled.h4`
  text-align: center;
  color: var(--main-color);
  font-size: 28px;
  letter-spacing: 1.4px;
  margin-bottom: 8px;
  -webkit-text-stroke: 0.5px var(--main-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    text-align: left;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 160px;
`;

export const LinkListItem = styled.li`
  text-align: center;
  font-size: 22px;
  -webkit-text-stroke: 0.2px var(--main-color);

  @media screen and (min-width: 768px) {
    letter-spacing: 1px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    text-align: left;
    -webkit-text-stroke: 0.5px var(--main-color);
  }
`;

export const FooterNavLink = styled(Link)`
  position: relative;
  color: var(--main-color);
  cursor: pointer;
  text-decoration: none;
  transition: color var(--animation-global), -webkit-text-stroke var(--animation-global);

  &:hover,
  &:focus {
    color: var(--accent-color);
    -webkit-text-stroke: 0.2px var(--accent-color);

    @media screen and (min-width: 1280px) {
      -webkit-text-stroke: 0.5px var(--accent-color);
    }
  }
`;

export const FooterLink = styled.a`
  position: relative;
  color: var(--main-color);
  cursor: pointer;
  text-decoration: none;
  transition: color var(--animation-global), -webkit-text-stroke var(--animation-global);

  &:hover,
  &:focus {
    color: var(--accent-color);
    -webkit-text-stroke: 0.2px var(--accent-color);

    @media screen and (min-width: 1280px) {
      -webkit-text-stroke: 0.5px var(--accent-color);
    }
  }
`;

export const MapPointer = styled(PiMapPinDuotone)`
  width: 30px;
  height: 30px;
`;
