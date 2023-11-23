import { VideoBox, VideoLimiter } from 'components/AboutUs/AboutUs.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import ReactPlayer from 'react-player/lazy';
import {
  MarqueeBackdrop,
  MarqueeCloseBtn,
  ModalDesc,
  ModalHeader,
  ModalWindow,
} from './MarqueeModal.styled';

const serviceList = [
  {
    title: 'From Zero To Hero',
    videoUrl: 'https://youtu.be/ohJM0wno6ng?si=liFJa4bva-vuL9vv',
    desc: 'Скільки разів була потреба вивчити англійську? А скільки разів доводилось повертатись на вже пройдений курс і пригадувати? Ми теж колись починали з нуля, все розуміємо. Тому й розробили курс, з яким ти точно вивчиш!',
  },
  {
    title: 'Навчальна платформа',
    videoUrl: 'https://youtu.be/ncDw4CGMn2o',
    desc: 'Вивчення англійської - це легко та захоплююче. Звісно, якщо вчитись на нашій платформі!',
  },
  {
    title: 'Письмова гарантія',
    videoUrl: 'https://youtu.be/5rv1gMjVcPw?si=J8r8AxB01p8V6pQB',
    desc: 'Ваш успіх є для нас пріоритетом, і ми стежимо, щоб кожен учень досягав своїх мовних цілей. Тому ми не лише обіцяємо, але й письмово гарантуємо ваш успіх.',
  },
  {
    title: 'Ноутбук в подарунок',
    videoUrl: 'https://youtu.be/gU88cKEW_II',
    desc: 'Отримайте в подарунок ноутбук трансформер, обраний з урахуванням вашого комфорту та сучасних вимог. З ним відкривається ще більше можливостей для навчання та творчості!',
  },
  {
    title: 'Close to You',
    videoUrl: 'https://youtu.be/rAxJr_PZmII',
    desc: 'Наш унікальний формат, що розроблявся за участю психологів та педагогів. Разом з ним навчання стає ще цікавіше та зручніше!',
  },
];

export const MarqueeModal = ({ closeMarqueeModal, toggleModal, id }) => {
  const toggleLeadForm = () => {
    toggleModal();
    closeMarqueeModal();
  };

  return (
    <>
      <MarqueeBackdrop onClick={closeMarqueeModal} />
      <ModalWindow>
        <MarqueeCloseBtn onClick={closeMarqueeModal}>
          <CloseIcon />
        </MarqueeCloseBtn>
        <ModalHeader>{serviceList[id].title}</ModalHeader>

        <VideoLimiter>
          <VideoBox>
            <ReactPlayer
              playing={true}
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
              url={serviceList[id].videoUrl}
            />
          </VideoBox>
        </VideoLimiter>

        <ModalDesc>{serviceList[id].desc}</ModalDesc>
        <LeadBtn onClick={toggleLeadForm}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
      </ModalWindow>
    </>
  );
};
