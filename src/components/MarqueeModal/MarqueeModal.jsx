import { VideoBox, VideoLimiter } from 'components/AboutUs/AboutUs.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import ReactPlayer from 'react-player/lazy';
import {
  MarqueeBackdrop,
  MarqueeCloseBtn,
  ModalDesc,
  ModalHeader,
  ModalWindow,
} from './MarqueeModal.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';

const serviceList = [
  {
    title: 'Вивчення англійської',
    videoUrl: 'https://youtu.be/Sagg08DrO5U?si=FAeZdQ2Zz9ksXsrt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio minima laborum. Recusandae similique deleniti nesciunt cupiditate perferendis corrupti alias minima obcaecati! Saepe, facilis ipsam.',
  },
  {
    title: 'Вивчення німецької',
    videoUrl: 'https://youtu.be/Sagg08DrO5U?si=FAeZdQ2Zz9ksXsrt',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur labore odio repellat? Officia tempora ducimus, obcaecati, sapiente quos, adipisci cupiditate repellendus neque asperiores nulla dolorem.',
  },
  {
    title: 'Вивчення польської',
    videoUrl: 'https://youtu.be/Sagg08DrO5U?si=FAeZdQ2Zz9ksXsrt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et, consectetur eos maiores corrupti quaerat alias facilis fugiat laudantium accusantium quibusdam, aperiam pariatur fuga aspernatur.',
  },
  {
    title: 'Відгуки наших клієнтів',
    videoUrl: 'https://youtu.be/Sagg08DrO5U?si=FAeZdQ2Zz9ksXsrt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus aliquam quae, quis quasi labore maiores eveniet accusantium dicta quam beatae qui eius, esse facilis.',
  },
  {
    title: 'Перекладацьке бюро',
    videoUrl: 'https://youtu.be/Sagg08DrO5U?si=FAeZdQ2Zz9ksXsrt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt, labore aut eveniet, iure impedit ipsum rem dignissimos nesciunt quis illum consequatur. Voluptatibus delectus nulla dicta inventore vero provident aspernatur!',
  },
];

export const MarqueeModal = ({ closeMarqueeModal, toggleModal, id }) => {
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
        <LeadBtn onClick={toggleModal}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
      </ModalWindow>
    </>
  );
};
