import styled from 'styled-components';
import blurEllipsePNG from '../../img/bg/thank-you.png';
import blurEllipseWebp from '../../img/bg/thank-you.webp';
import { Link } from 'react-router-dom';

export const ThankYouSection = styled.section`
  position: relative;
  height: 100vh;
  padding-top: 60px;
  padding-left: 120px;
  padding-bottom: 70px;
  overflow: hidden;

  background-position: left -715px center, right -715px center;
  background-image: image-set(
      url(${blurEllipseWebp}) type('image/webp'),
      url(${blurEllipsePNG}) type('image/png')
    ),
    image-set(
      url(${blurEllipseWebp}) type('image/webp'),
      url(${blurEllipsePNG}) type('image/png')
    );
  background-size: 975px 975px, 975px 975px;
  background-repeat: no-repeat, no-repeat;
`;

export const ThankYouTextWrapper = styled.div`
  position: absolute;
  top: 309px;
  left: 120px;

  max-width: 982px;

  font-family: var(--new-font-family);
`;

export const ThankYouHeading = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ThankYouDesc = styled.p`
  font-size: 32px;
  margin-bottom: 80px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const MainLinkBtn = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  padding: 20px 60px;
  background: linear-gradient(322deg, #0f645b 23.22%, #09c6cc 110.01%), #0f645b;
  border-radius: 50px;
  font-family: var(--new-font-family);
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.48px;
`;

export const LinkBtn = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #000;

  font-size: 16px;
  font-weight: 700;

  padding: 20px 60px;
  border-radius: 50px;
  border: 2px var(--main-color) solid;
`;
