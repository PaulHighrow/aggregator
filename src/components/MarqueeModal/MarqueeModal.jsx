import { VideoBox, VideoLimiter } from 'components/AboutUs/AboutUs.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import {
  MarqueeBackBtn,
  MarqueeBackIcon,
  MarqueeBackdrop,
  MarqueeCloseBtn,
  MarqueeForwardBtn,
  MarqueeForwardIcon,
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
    videoUrl: 'https://youtu.be/18RbBq_dIDs?si=3eLudDpUJyU6NdpQ',
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
  const [modalId, setModalId] = useState(id);
  const length = serviceList.length;

  const toggleLeadForm = () => {
    closeMarqueeModal();
    toggleModal();
  };

  const handleBackClick = () => {
    console.log(serviceList[modalId]);
    setModalId(modalId =>
      modalId <= 0 ? (modalId = length - 1) : (modalId -= 1)
    );
  };

  const handleForwardClick = () => {
    console.log(serviceList[modalId]);
    setModalId(modalId =>
      modalId >= length - 1 ? (modalId = 0) : (modalId += 1)
    );
  };

  return (
    <>
      <MarqueeBackdrop onClick={closeMarqueeModal} />
      <ModalWindow>
        <MarqueeBackBtn onClick={handleBackClick}>
          <MarqueeBackIcon />
        </MarqueeBackBtn>
        <MarqueeForwardBtn onClick={handleForwardClick}>
          <MarqueeForwardIcon />
        </MarqueeForwardBtn>
        <MarqueeCloseBtn onClick={closeMarqueeModal}>
          <CloseIcon />
        </MarqueeCloseBtn>
        <ModalHeader>{serviceList[modalId].title}</ModalHeader>

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
              url={serviceList[modalId].videoUrl}
            />
          </VideoBox>
        </VideoLimiter>

        <ModalDesc>{serviceList[modalId].desc}</ModalDesc>
        <LeadBtn onClick={toggleLeadForm}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
      </ModalWindow>
    </>
  );
};
