import axios from 'axios';
import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Outlet, useLocation } from 'react-router-dom';
import { ServiceNav } from './ServiceNav/ServiceNav';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const Service = () => {
  let location = useLocation();

  return (
    <>
      <StreamsBackgroundWrapper>
        {location.pathname === '/service' ||
        location.pathname === '/service/' ? (
          <ServiceNav />
        ) : (
          <Outlet />
        )}
      </StreamsBackgroundWrapper>
    </>
  );
};

export default Service;
