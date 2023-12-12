import axios from 'axios';
import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Loader } from 'components/SharedLayout/Loader/Loader';
import { LoaderWrapper } from 'components/SharedLayout/Loader/Loader.styled';
import { StreamNav } from 'components/Stream/StreamNav/StreamNav';
import { useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const Streams = () => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState({});

  const wakeupRequest = async () => {
    try {
      const wake = await axios.get('/');
      console.log(wake.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    wakeupRequest();

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
        {location.pathname === '/streams' ? <StreamNav /> : ''}
        <Outlet context={[links, setLinks]} />
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
