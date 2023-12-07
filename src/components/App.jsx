import { lazy } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop/ScrollToTop';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { StreamA0 } from 'pages/Streams/A0/StreamA0';
import { StreamA1 } from 'pages/Streams/A1/StreamA1';
import { StreamA2 } from 'pages/Streams/A2/StreamA2';
import { StreamDeutsch } from 'pages/Streams/Deutsch/StreamDeutsch';
import { StreamPolski } from 'pages/Streams/Polski/StreamPolski';
import { AdminPanel } from 'pages/Streams/AdminPanel/AdminPanel';

const Home = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ '../pages/Home/Home')
);
const Clone = lazy(() =>
  import(/* webpackChunkName: "Inverted Homepage" */ '../pages/Clone/Clone')
);
const Streams = lazy(() =>
  import(/* webpackChunkName: "Streams page" */ '../pages/Streams/Streams')
);
const AllReviews = lazy(() =>
  import(/* webpackChunkName: "All reviews page" */ '../pages/AllReviews/AllReviews')
);

// const English = lazy(() =>
//   import(
//     /* webpackChunkName: "English courses page" */ '../pages/English/English'
//   )
// );

// const Polski = lazy(() =>
//   import(/* webpackChunkName: "Polski courses page" */ '../pages/Polski/Polski')
// );
// const Deutsch = lazy(() =>
//   import(
//     /* webpackChunkName: "Deutsch courses page" */ '../pages/Deutsch/Deutsch'
//   )
// );
// const Education = lazy(() =>
//   import(
//     /* webpackChunkName: "Education center page" */ '../pages/Education/Education'
//   )
// );
// const Examination = lazy(() =>
//   import(
//     /* webpackChunkName: "Examination center page" */ '../pages/Examination/Examination'
//   )
// );
// const Translation = lazy(() =>
//   import(
//     /* webpackChunkName: "Translation bureau page" */ '../pages/Translation/Translation'
//   )
// );
// const Career = lazy(() =>
//   import(
//     /* webpackChunkName: "Career and admission page" */ '../pages/Career/Career'
//   )
// );
const NotFound = lazy(() =>
  import(/* webpackChunkName: "Not Found" */ '../pages/NotFound/NotFound')
);

export const App = () => {
  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams();

  const utm_tags = [
    'utm_content',
    'utm_medium',
    'utm_campaign',
    'utm_source',
    'utm_term',
    'utm_referrer',
    'referrer',
    'gclientid',
    'gclid',
    'fbclid',
  ];

  const localStorageTagSetter = tags =>
    tags.map(tag => localStorage.setItem(tag, searchParams.get(tag) || ''));

  localStorageTagSetter(utm_tags);

  const localStorageTagGetter = tag => localStorage.getItem(tag);

  const utms = {};
  utm_tags.forEach(tag => (utms[tag] = localStorageTagGetter(tag)));

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout utms={utms} />}>
          <Route index element={<Home utms={utms} />} />
          <Route path="clone" element={<Clone utms={utms} />} />
          <Route path="reviews" element={<AllReviews />} />
          {/* <Route path="english" element={<English utms={utms} />} />
          <Route path="polski" element={<Polski utms={utms} />} />
          <Route path="deutsch" element={<Deutsch utms={utms} />} />
          <Route path="education" element={<Education utms={utms} />} />
          <Route path="examination" element={<Examination utms={utms} />} />
          <Route path="translation" element={<Translation utms={utms} />} />
          <Route path="career" element={<Career utms={utms} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="streams" element={<Streams />}>
          <Route path="a0" element={<StreamA0 />} />
          <Route path="a1" element={<StreamA1 />} />
          <Route path="a2" element={<StreamA2 />} />
          <Route path="deutsch" element={<StreamDeutsch />} />
          <Route path="polski" element={<StreamPolski />} />
          <Route path="stream-admin-panel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </>
  );
};
