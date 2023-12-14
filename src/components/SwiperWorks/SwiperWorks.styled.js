import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const StyledSlide = styled(SwiperSlide)`
  max-width: 180px;

  @media screen and (min-width: 768px) {
    max-width: 270px;
  }
`;
