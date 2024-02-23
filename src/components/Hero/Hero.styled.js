import styled, { keyframes } from 'styled-components';
import { ReactComponent as TitleSketchSVG } from '../../img/svg/sketchTitle.svg';
import { ReactComponent as TitleSketchDeuSVG } from '../../img/svg/sketchTitleDeu.svg';
import { ReactComponent as TitleSketchPolSVG } from '../../img/svg/sketchTitlePol.svg';
import { ReactComponent as UnderlineShort } from '../../img/svg/hero-underline-short.svg';
import { ReactComponent as UnderlineLong } from '../../img/svg/hero-underline-long.svg';
import { ReactComponent as HeroSVG } from '../../img/svg/hero-caveat.svg';
import { ReactComponent as HeldenSVG } from '../../img/svg/helden-caveat.svg';
import { ReactComponent as BohateraSVG } from '../../img/svg/bohatera-caveat.svg';

export const HeroSection = styled.section`
  position: relative;
  min-height: 500px;
  padding-top: 60px;
  padding-bottom: 30px;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
    padding-top: 105px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px 0;
    padding-top: 145px;
  }
`;

export const HeroTextWrapper = styled.div``;

export const Title = styled.h1`
  position: relative;
  z-index: 1;

  width: 280px;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  -webkit-text-stroke: 1px var(--main-color);
  margin: 0 auto 15px auto;

  @media screen and (min-width: 360px) {
    width: 300px;
    font-size: 38px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    letter-spacing: 3.5px;
    width: 700px;
    font-size: 70px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 960px) {
    width: 900px;
  }
`;

export const LesserTitle = styled.p`
  position: relative;
  z-index: 1;

  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  -webkit-text-stroke: 1px var(--main-color);
  margin: 0 auto 15px auto;

  @media screen and (min-width: 360px) {
    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 32px;
  }
`;

const sketchAnimation = keyframes`
  0%{
    stroke-dashoffset: 746;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

const sketchDeuAnimation = keyframes`
  0%{
    stroke-dashoffset: 1094;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

const sketchPolAnimation = keyframes`
  0%{
    stroke-dashoffset: 1235;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const TitleBlock = styled.span`
  @media screen and (min-width: 960px) {
    display: block;
  }
`;

export const TitleSketch = styled(TitleSketchSVG)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke-dasharray: 746;
  width: 120px;

  @media screen and (min-width: 768px) {
    width: 270px;
  }

  & path {
    animation-name: ${sketchAnimation};
    animation-duration: 1.1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const TitleSketchDeu = styled(TitleSketchDeuSVG)`
  position: absolute;
  z-index: -1;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke-dasharray: 1095;
  width: 180px;

  @media screen and (min-width: 768px) {
    width: 420px;
  }

  & path {
    animation-name: ${sketchDeuAnimation};
    animation-duration: 1.4s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const TitleSketchPol = styled(TitleSketchPolSVG)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke-dasharray: 1235;
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 540px;
  }

  & path {
    animation-name: ${sketchPolAnimation};
    animation-duration: 1.6s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const SubTitle = styled.span`
  position: relative;
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;
  line-height: 0.7;
  color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    vertical-align: sub;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--main-color);
  margin-bottom: 5px;
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 0 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 55px;
    max-width: 900px;
  }
`;

export const DescriptionMoreText = styled.span`
  transition: opacity var(--animation-global), font-size var(--animation-global),
    margin var(--animation-global), padding var(--animation-global);

  &.more-shown {
  }

  &.more-hidden {
    font-size: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    transition: opacity var(--animation-global),
      font-size var(--animation-global), margin var(--animation-global),
      padding var(--animation-global);
  }
`;

export const DescriptionSiteText = styled.span`
  display: block;
  margin-top: 1em;
`;

export const DescriptionTrigger = styled.span`
  display: block;
  position: relative;
  max-width: max-content;
  margin: 0 auto;
  margin-bottom: 30px;

  font-family: var(--secondary-font-family);
  font-size: 18px;
  font-weight: 700;

  color: var(--accent-color);
  text-align: center;
  text-transform: uppercase;
  transition: all var(--animation-global);

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    color: var(--main-color);
  }
`;

const underlineStyles =
  'position: absolute; width: 100%; bottom: -6px; left: 0px; transform: rotate(-1.5deg);';

export const DescriptionUnderlineShort = styled(UnderlineShort)`
  ${underlineStyles}
`;

export const DescriptionUnderlineLong = styled(UnderlineLong)`
  ${underlineStyles}
`;

const pathsHAnimation = keyframes`
  0%{
    stroke-dashoffset: 1;
  }
  100%{
    stroke-dashoffset: 0;
  }
`;

const pathsAnimation = keyframes`
  0%{
    stroke-dashoffset: 1;
    opacity: 0;
  }
  50%{
    stroke-dashoffset: 1;
  }
  55%{
    opacity: 1;
  }
  100%{
    stroke-dashoffset: 0;
    opacity: 1;
  }
`;

export const HeroVector = styled(HeroSVG)`
  position: absolute;
  width: 100px;
  left: 2px;
  top: -12px;

  @media screen and (min-width: 768px) {
    width: 300px;
    left: -33px;
    top: 20px;
  }

  & .hero-h {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsHAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  & .hero-e {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 350ms;
    animation-fill-mode: both;
  }
  & .hero-r {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 750ms;
    animation-fill-mode: both;
  }
  & .hero-o {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.15s;
    animation-fill-mode: both;
  }
`;

export const HeldenVector = styled(HeldenSVG)`
  position: absolute;
  width: 155px;
  height: 46px;
  left: 2px;

  @media screen and (min-width: 768px) {
    width: 354px;
    /* left: -33px; */
    /* top: 20px; */
    height: auto;
  }

  & .helden-h {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsHAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  & .helden-e1 {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 350ms;
    animation-fill-mode: both;
  }
  & .helden-l {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 750ms;
    animation-fill-mode: both;
  }
  & .helden-d {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.15s;
    animation-fill-mode: both;
  }
  & .helden-e2 {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.45s;
    animation-fill-mode: both;
  }
  & .helden-n {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.75s;
    animation-fill-mode: both;
  }
`;

export const BohateraVector = styled(BohateraSVG)`
  position: absolute;
  width: 187px;
  height: 46px;
  left: 2px;

  @media screen and (min-width: 768px) {
    width: 423px;
    height: auto;
  }

  & .bohatera-b {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsHAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  & .bohatera-o {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 350ms;
    animation-fill-mode: both;
  }
  & .bohatera-h {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 750ms;
    animation-fill-mode: both;
  }
  & .bohatera-a1 {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.15s;
    animation-fill-mode: both;
  }
  & .bohatera-t {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.45s;
    animation-fill-mode: both;
  }
  & .bohatera-e {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 1.75s;
    animation-fill-mode: both;
  }
  & .bohatera-r {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 2.15s;
    animation-fill-mode: both;
  }
  & .bohatera-a2 {
    stroke-dasharray: 1;
    stroke-dashoffset: 2;
    animation-name: ${pathsAnimation};
    animation-duration: 400ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-delay: 2.45s;
    animation-fill-mode: both;
  }
`;
