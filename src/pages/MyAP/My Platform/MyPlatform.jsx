import { MyPlatformBox } from './MyPlatform.styled';

export const MyPlatform = () => {
  return (
    <>
      <MyPlatformBox>
        <iframe
          id="platform-window"
          title="platform-pin"
          src="https://online.ap.education/school/"
          width="100%"
          height="100%"
        ></iframe>
      </MyPlatformBox>
    </>
  );
};