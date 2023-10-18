import useSize from '@react-hook/size';
import { StyledUpButton, UpArrow } from './UpButton.styled';

export const UpButton = () => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const props =
    width < 768
      ? { spy: true, smooth: true, offset: -73 }
      : { spy: true, smooth: true };

  return (
    <StyledUpButton to={width >= 768 ? 'header' : 'hero'} {...props}>
      <UpArrow />
    </StyledUpButton>
  );
};
