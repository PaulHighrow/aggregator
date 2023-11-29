import styled from 'styled-components';

export const StreamSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  max-height: 100vh;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & iframe {
    border: none;
    display: block;
  }
`;

export const ChatBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: max-content;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & > iframe {
    border: none;
    display: block;
  }
`;

export const ChatBtn = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  display: block;
  width: 70px;
  height: 70px;
  font-size: 20px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const KahootBtn = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 140px;
  right: 50px;
  display: block;
  width: 70px;
  height: 70px;
  font-size: 20px;
  border-radius: 50%;
  margin: 0 auto;
`;
