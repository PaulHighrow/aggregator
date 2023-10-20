import { Title } from 'components/Hero/Hero.styled';
import { LeadForm } from 'components/LeadForm/LeadForm';
import { MainFooter } from 'components/MainFooter/MainFooter';
import { Menu } from 'components/Menu/Menu';
import { UpButton } from 'components/UpButton/UpButton';
import { InvertedMainFooter } from 'pages/Clone/InvertedMainFooter/InvertedMainFooter';
import { InvertedMenu } from 'pages/Clone/InvertedMenu/InvertedMenu';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'utils/Loader/Loader';

export const SharedLayout = ({ utms }) => {
  let location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(isOpen => (isOpen = false));
    !document.body.style.overflowY && isOpenModal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isOpenModal) {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      {location.pathname === '/' ? (
        <Menu toggleModal={toggleModal} />
      ) : (
        <InvertedMenu toggleModal={toggleModal} />
      )}
      <Suspense
        fallback={
          <>
            <Loader />
            <Title as={'h2'}>Loading...</Title>
          </>
        }
      >
        <Outlet />
      </Suspense>
      {location.pathname === '/' ? (
      <MainFooter toggleModal={toggleModal} />
      ) : (
        <InvertedMainFooter toggleModal={toggleModal} />
      )}
      <UpButton />

      {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
    </>
  );
};
