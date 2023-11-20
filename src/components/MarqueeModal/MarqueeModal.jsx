import { VideoBox, VideoLimiter } from 'components/AboutUs/AboutUs.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import ReactPlayer from 'react-player/lazy';
import {
  Details,
  DetailsLink,
  MarqueeBackdrop,
  MarqueeCloseBtn,
  ModalDesc,
  ModalHeader,
  ModalWindow,
} from './MarqueeModal.styled';

const serviceList = [
  {
    title: 'From Zero To Hero',
    to: '/english',
    videoUrl: 'https://youtu.be/ohJM0wno6ng?si=liFJa4bva-vuL9vv',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio minima laborum. Recusandae similique deleniti nesciunt cupiditate perferendis corrupti alias minima obcaecati! Saepe, facilis ipsam.',
  },
  {
    title: 'Навчальна платформа',
    to: '/deutsch',
    videoUrl: 'https://youtu.be/qyEE7FZPkxs?si=AfxAeZQY_WZqxwYC',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur labore odio repellat? Officia tempora ducimus, obcaecati, sapiente quos, adipisci cupiditate repellendus neque asperiores nulla dolorem.',
  },
  {
    title: 'Гарантія на навчання',
    to: '/polski',
    videoUrl: 'https://youtu.be/5rv1gMjVcPw?si=J8r8AxB01p8V6pQB',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio et, consectetur eos maiores corrupti quaerat alias facilis fugiat laudantium accusantium quibusdam, aperiam pariatur fuga aspernatur.',
  },
  {
    title: 'Ноутбук в подарунок',
    to: '/education',
    videoUrl: 'https://youtu.be/gU88cKEW_II',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus aliquam quae, quis quasi labore maiores eveniet accusantium dicta quam beatae qui eius, esse facilis.',
  },
  {
    title: 'Close to You',
    to: '/translation',
    videoUrl: 'https://youtu.be/rAxJr_PZmII',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt, labore aut eveniet, iure impedit ipsum rem dignissimos nesciunt quis illum consequatur. Voluptatibus delectus nulla dicta inventore vero provident aspernatur!',
  },
  {
    title: 'Екзаменаційний центр',
    to: '/examination',
    videoUrl: 'https://youtu.be/Sagg08DrO5U?si=FAeZdQ2Zz9ksXsrt',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero, facere hic repellendus commodi dolore impedit, porro error vel exercitationem minus sed architecto amet eum inventore dolorum ratione. Possimus, rerum. Assumenda ipsum earum qui eos, sequi molestias natus neque, ipsam non eum aliquid voluptatibus voluptas alias, cumque expedita eligendi temporibus!',
  },
];

export const MarqueeModal = ({ closeMarqueeModal, toggleModal, id }) => {
  const toggleLeadForm = () => {
    toggleModal();
    closeMarqueeModal();
  };

  const allowScroll = () => {
    document.body.style.overflowY = '';
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
        <DetailsLink to={serviceList[id].to}>
          <Details onClick={allowScroll}>Детальніше</Details>
        </DetailsLink>
        <LeadBtn onClick={toggleLeadForm}> ШВИДКА КОНСУЛЬТАЦІЯ </LeadBtn>
      </ModalWindow>
    </>
  );
};
