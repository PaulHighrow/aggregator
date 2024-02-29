import useSize from '@react-hook/size';
import { DesktopSwiperNew } from './VersionSwipers/DesktopSwiperNew';
import { MobileSwiperNew } from './VersionSwipers/MobileSwiperNew';

export const HeroSwiperNew = () => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  return <>{width < 768 ? <MobileSwiperNew /> : <DesktopSwiperNew />}</>;
};
