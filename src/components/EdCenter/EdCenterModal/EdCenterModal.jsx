import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import { MarqueeCloseBtn, ModalWindow } from 'components/MarqueeModal/MarqueeModal.styled';
import { PageLink } from './EdCenterModal.styled';

export const EdCenterModal = ({ closeNavModal }) => {
  return (
    <>
      <Backdrop onClick={closeNavModal} />
      <ModalWindow>
        <MarqueeCloseBtn onClick={closeNavModal}>
          <CloseIcon />
        </MarqueeCloseBtn>
        <PageLink to="/">Додомки</PageLink>
        <PageLink to="/clone">Клон</PageLink>
        <PageLink to="/404">404</PageLink>
      </ModalWindow>
    </>
  );
};
