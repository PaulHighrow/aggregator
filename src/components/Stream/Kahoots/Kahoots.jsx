import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { CloseLogo, IFrameLoaderWrapper, KahootCloseBtn } from '../Stream.styled';
import {
  KahootBackground,
  KahootBox
} from './Kahoots.styled';

export const Kahoots = ({ sectionWidth, sectionHeight, toggleKahoot }) => {
  const desktopWidth = (sectionWidth / 3) * 2;
  const mobileWidth = (sectionWidth / 3) * 2;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <KahootBox>
        <KahootBackground>
          <iframe
            id="kahoot-window"
            onLoad={() => {
              setIsLoading(isLoading => false);
            }}
            title="kahoot-pin"
            src="https://kahoot.it/"
            frameBorder="0"
            width={sectionWidth > 768 ? desktopWidth : mobileWidth}
            height={sectionHeight}
          ></iframe>
          {isLoading && (
            <IFrameLoaderWrapper>
              <ColorRing
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#0f645b', '#0B4943', '#073D37', '#0B4943', '#0f645b']}
              />
            </IFrameLoaderWrapper>
          )}
        </KahootBackground>
        <KahootCloseBtn onClick={toggleKahoot}>
          <CloseLogo />
        </KahootCloseBtn>
      </KahootBox>
    </>
  );
};
