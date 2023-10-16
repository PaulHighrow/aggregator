import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy';
import {
  EdCenterArrow,
  EdCenterArrowInView,
  EdCenterArrowMobile,
  EdCenterArrowMobileInView,
  EdCenterBackground,
  EdCenterNavigation,
  EdCenterSection,
  EdCenterSubTitle,
  EdCenterTitle,
  EdCenterWrapper,
  EdVideoToggler,
  MoreBtn,
  MoreBtnBox,
  NavigationItem,
  VideoBox,
  VideoLimiter
} from './EdCenter.styled';

export const EdCenter = ({ toggleModal }) => {
  const listItems = ['Англійська мова', 'Польська мова', 'Німецька мова'];
  const videoUrls = [
    'https://youtu.be/cJH4FUP99rA?si=clJ5upwIiebB7Fzt',
    'https://youtu.be/RRKiBZi9moY?si=83dwA-AgfQRqIqZV',
    'https://youtu.be/NEe6hl7msfs?si=V8YaLMy1gqtR6vys',
  ];

  const [course, setCourse] = useState('Англійська мова');
  const [videoUrl, setVideoUrl] = useState(videoUrls[0]);
  const edCenterEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(edCenterEl);

  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  const toggleCourse = (item, i) => {
    setCourse(course => (course = item));
    setVideoUrl(videoUrl => (videoUrl = videoUrls[i]));
  };

  return (
    <EdCenterBackground>
      <EdCenterSection id="edcenter" ref={edCenterEl}>
        <Box>
          <EdCenterTitle>
            НАВЧАЛЬНИЙ <EdCenterSubTitle>ЦЕНТР</EdCenterSubTitle>
          </EdCenterTitle>
          <EdCenterWrapper>
            <VideoLimiter>
              <VideoBox>
                <ReactPlayer
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
                  url={videoUrl}
                />
              </VideoBox>
            </VideoLimiter>
            <MoreBtnBox>
              <EdCenterNavigation ref={ref}>
                {listItems.map((item, i) => (
                  <NavigationItem key={i}>
                    <EdVideoToggler
                      className={course === item ? 'selected' : ''}
                      onClick={() => toggleCourse(item, i)}
                    >
                      {item}
                      {width < 768 ? (
                        <>
                          {inView && (
                            <EdCenterArrowMobileInView
                              style={{ animationDelay: `${i}s` }}
                            />
                          )}
                          <EdCenterArrowMobile className="on-hover" />
                        </>
                      ) : (
                        <>
                          {inView && (
                            <EdCenterArrowInView
                              style={{ animationDelay: `${i * 400}ms` }}
                            />
                          )}
                          <EdCenterArrow className="on-hover" />
                        </>
                      )}
                    </EdVideoToggler>
                  </NavigationItem>
                ))}
              </EdCenterNavigation>
              <MoreBtn onClick={toggleModal}>ДЕТАЛЬНІШЕ</MoreBtn>
            </MoreBtnBox>
          </EdCenterWrapper>
        </Box>
      </EdCenterSection>
    </EdCenterBackground>
  );
};
