import axios from 'axios';
import { lazy, useLayoutEffect, useState } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const Home = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ '../pages/Home/Home')
);
const Clone = lazy(() =>
  import(/* webpackChunkName: "Inverted Homepage" */ '../pages/Clone/Clone')
);

export const App = () => {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams();

  const utm_tags = [
    'utm_content',
    'utm_medium',
    'utm_campaign',
    'utm_source',
    'utm_term',
    'utm_referrer',
  ];

  const localStorageTagSetter = tags =>
    tags.map(tag => localStorage.setItem(tag, searchParams.get(tag) || ''));

  localStorageTagSetter(utm_tags);

  const localStorageTagGetter = tag => localStorage.getItem(tag);

  const utms = {};
  utm_tags.forEach(tag => (utms[tag] = localStorageTagGetter(tag)));

  const wakeupRequest = async () => {
    setIsLoading(isLoading => (isLoading = true));
    try {
      const wake = await axios.get('/');
      console.log(wake);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const authRequest = async () => {
    setIsLoading(isLoading => (isLoading = true));
    try {
      const auth = await axios.post('/tokens');
      console.log(auth);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  useLayoutEffect(() => {
    wakeupRequest();
    authRequest();
  }, []);

  return (
    <Routes>
      {!isLoading && (
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home utms={utms} />} />
          <Route path="clone" element={<Clone utms={utms}/>} />
        </Route>
      )}
    </Routes>
  );
};
