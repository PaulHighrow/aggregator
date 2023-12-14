import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const StyledSlide = styled(SwiperSlide)`
  max-width: 180px;
  margin-right: 30px;

  @media screen and (min-width: 768px) {
    max-width: 270px;
  }
`;
