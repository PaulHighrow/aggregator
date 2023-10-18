import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { CloseIcon } from 'components/LeadForm/LeadForm.styled';
import { MarqueeCloseBtn } from 'components/MarqueeModal/MarqueeModal.styled';
import {
  RouteModal,
  PageLink,
  RouteModalText,
  PageLinkBox,
} from './EdCenterModal.styled';

export const EdCenterModal = ({ closeNavModal }) => {
  const allowScroll = () => {
    document.body.style.overflowY = '';
  };

  return (
    <>
      <Backdrop onClick={closeNavModal} />
      <RouteModal>
        <MarqueeCloseBtn onClick={closeNavModal}>
          <CloseIcon />
        </MarqueeCloseBtn>
        <RouteModalText>Куди їдемо?</RouteModalText>
        <PageLinkBox>
          <PageLink to="/" onClick={allowScroll}>
            Додомки
          </PageLink>
          <PageLink to="/clone" onClick={allowScroll}>
            Клон
          </PageLink>
          <PageLink to="/404" onClick={allowScroll}>
            404
          </PageLink>
        </PageLinkBox>
      </RouteModal>
    </>
  );
};
