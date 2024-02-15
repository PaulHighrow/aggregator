import axios from 'axios';
import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { LoaderWrapper } from 'components/SharedLayout/Loaders/Loader.styled';
import { StreamNav } from 'components/Stream/StreamNav/StreamNav';
import { useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const Streams = () => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const wakeupRequest = async () => {
    try {
      const wake = await axios.get('/');
      console.log(wake.data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetLogin = () => {
    localStorage.removeItem('AP_logged_in');
    const isLoggedIn = localStorage.getItem('APLoggedIn');
    if (!isLoggedIn) {
      localStorage.removeItem('userID');
      localStorage.removeItem('userName');
    }
  };

  const detectUser = async () => {
    try {
      let ip;
      try {
        ip = (await axios.get('https://jsonip.com/')).data.ip;
        console.log(ip);
      } catch (error) {
        console.log(error);
      }
      const id = localStorage.getItem('userID');
      const user = await axios.get(`https://ap-chat.onrender.com/users/${id}`);
      setCurrentUser(
        currentUser =>
          (currentUser = user.data || {
            username: 'User Is Not Logged In',
            isBanned: false,
            userIP: ip || 'user has disabled ip tracker',
          })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    resetLogin();
    wakeupRequest();
    detectUser();

    const getLinksRequest = async () => {
      try {
        setIsLoading(isLoading => (isLoading = true));
        setLinks((await axios.get('/links')).data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(isLoading => (isLoading = false));
      }
    };

    getLinksRequest();
  }, []);

  return (
    <>
      <StreamsBackgroundWrapper>
        {location.pathname === '/streams' ||
        location.pathname === '/streams/' ? (
          <StreamNav />
        ) : (
          ''
        )}
        <Outlet context={[links, isLoading, currentUser, setCurrentUser]} />
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </StreamsBackgroundWrapper>
    </>
  );
};

export default Streams;
