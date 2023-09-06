import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import {
  MarqueeBackdrop,
  MarqueeCloseBtn,
  ModalHeader,
  ModalWindow,
  ServiceLink,
  ServiceList,
} from './MarqueeModal.styled';

export const MarqueeModal = ({ closeMarqueeModal }) => {
  return (
    <>
      <MarqueeBackdrop onClick={closeMarqueeModal} />
      <ModalWindow>
        <MarqueeCloseBtn onClick={closeMarqueeModal}>
          <CloseIcon />
        </MarqueeCloseBtn>
        <ModalHeader>Оберіть програму, що вас цікавить:</ModalHeader>
        <ServiceList>
          <li>
            <ServiceLink>Вивчення англійської</ServiceLink>
          </li>
          <li>
            <ServiceLink>Вивчення німецької</ServiceLink>
          </li>
          <li>
            <ServiceLink>Вивчення польської</ServiceLink>
          </li>
          <li>
            <ServiceLink>Відгуки наших клієнтів</ServiceLink>
          </li>
          <li>
            <ServiceLink>Перекладацьке бюро</ServiceLink>
          </li>
        </ServiceList>

      </ModalWindow>
    </>
  );
};
