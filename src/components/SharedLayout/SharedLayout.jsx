import axios from 'axios';
import { LeadForm } from 'components/LeadForm/LeadForm';
import { MainFooter } from 'components/MainFooter/MainFooter';
import { Menu } from 'components/Menu/Menu';
import { UpButton } from 'components/UpButton/UpButton';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { OffsetLoader } from './Loaders/OffsetLoader';
import { SuspenseBox, SuspenseTitle } from './SharedLayout.styled';
import { MenuNew } from 'components/Menu/MenuNew';
import { MainFooterNew } from 'components/MainFooter/MainFooterNew';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

export const SharedLayout = ({ utms }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const location = useLocation();
  console.log(location);

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

  const wakeupRequest = async () => {
    try {
      const wake = await axios.get('/');
      console.log(wake.data);
    } catch (error) {
      console.log(error);
    }
  };

  const authRequest = async () => {
    try {
      await axios.post('/tokens');
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    wakeupRequest();
    authRequest();
  }, []);

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
      {location.pathname === '/new' ? (
        <MenuNew toggleModal={toggleModal} />
      ) : (
        <Menu toggleModal={toggleModal} />
      )}

      <Suspense
        fallback={
          <SuspenseBox>
            <SuspenseTitle as={'h2'}>Loading</SuspenseTitle>
            <OffsetLoader />
          </SuspenseBox>
        }
      >
        <Outlet />
      </Suspense>

      {location.pathname === '/new' ? (
        <MainFooterNew toggleModal={toggleModal} />
      ) : (
        <MainFooter toggleModal={toggleModal} />
      )}

      <UpButton />

      {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
    </>
  );
};
