import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import {
  ExamNavigationLink,
  NavigationItem,
  TranslationTextWrapper,
  TranslationsNavigation,
  TranslationsSection,
  TranslationsSubTitle,
  TranslationsTitle,
  TranslationsWrapper,
  VideoBox,
  VideoLimiter,
} from './Translations.styled';

export const Translations = () => {
  const boxEl = useRef();
  const videoUrls = {
    mobileUrl: 'https://youtu.be/Ujz1YjEEqyk?si=8crApB-nqbzlqihQ',
    notMobileUrl: 'https://youtube.com/shorts/H1aAX1Fk9_Y?si=IeCfKVC_lkdAi267',
  };
  // eslint-disable-next-line
  const [width, _] = useSize(boxEl);

  return (
    <TranslationsSection id="translations">
      <Box ref={boxEl}>
        <TranslationsWrapper>
          <TranslationTextWrapper>
            <TranslationsTitle>
              БЮРО <TranslationsSubTitle>ПЕРЕКЛАДІВ</TranslationsSubTitle>
            </TranslationsTitle>
            <TranslationsNavigation>
              <NavigationItem>
                <ExamNavigationLink>Англійська</ExamNavigationLink>
              </NavigationItem>
              <NavigationItem>
                <ExamNavigationLink>Польська</ExamNavigationLink>
              </NavigationItem>
              <NavigationItem>
                <ExamNavigationLink>Німецька</ExamNavigationLink>
              </NavigationItem>
            </TranslationsNavigation>
          </TranslationTextWrapper>
          <VideoLimiter>
            <VideoBox>
              <ReactPlayer
                playing
                loop={true}
                controls={true}
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                width="100%"
                height="100%"
                url={
                  width >= 768 ? videoUrls.notMobileUrl : videoUrls.mobileUrl
                }
              />
            </VideoBox>
          </VideoLimiter>
        </TranslationsWrapper>
      </Box>
    </TranslationsSection>
  );
};
