import TelegramHRRedirect from 'pages/HR/TelegramHRRedirect/TelegramHRRedirect';
import ViberHRRedirect from 'pages/HR/ViberHRRedirect/ViberHRRedirect';
import TelegramRedirect from 'pages/Service/TelegramRedirect/TelegramRedirect';
import ViberRedirect from 'pages/Service/ViberRedirect/ViberRedirect';
import { StreamA0 } from 'pages/Streams/A0/StreamA0';
import { StreamA1 } from 'pages/Streams/A1/StreamA1';
import { StreamA2 } from 'pages/Streams/A2/StreamA2';
import { AdminPanel } from 'pages/Streams/AdminPanel/AdminPanel';
import { StreamB1 } from 'pages/Streams/B1/StreamB1';
import { StreamB2 } from 'pages/Streams/B2/StreamB2';
import { StreamDeutschA2 } from 'pages/Streams/Deutsch A2/StreamDeutschA2';
import { StreamDeutsch } from 'pages/Streams/Deutsch/StreamDeutsch';
import { KahootAdminPanel } from 'pages/Streams/KahootAdminPanel/KahootAdminPanel';
import { StreamPolskiA2 } from 'pages/Streams/Polski A2/StreamPolskiA2';
import { StreamPolski } from 'pages/Streams/Polski/StreamPolski';
import { StreamTest } from 'pages/Streams/Test/StreamTest';
import { UserAdminPanel } from 'pages/Streams/UserAdminPanel/UserAdminPanel';
import { KidsA1 } from 'pages/StreamsKids/KidsA1/KidsA1';
import { KidsA2 } from 'pages/StreamsKids/KidsA2/KidsA2';
import { KidsB1 } from 'pages/StreamsKids/KidsB1/KidsB1';
import { KidsB2 } from 'pages/StreamsKids/KidsB2/KidsB2';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { WindowedChat } from 'utils/Chat/ChatWindowed/WindowedChat';
import ScrollToTop from 'utils/ScrollToTop/ScrollToTop';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HostKahootAdminPanel } from 'pages/Streams/HostKahootAdminPanel/HostKahootAdminPanel';

const Home = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ '../pages/Home/Home')
);
const Clone = lazy(() =>
  import(/* webpackChunkName: "Inverted Homepage" */ '../pages/Clone/Clone')
);
const NewDesign = lazy(() =>
  import(
    /* webpackChunkName: "New Design Homepage" */ '../pages/Home/NewDesign'
  )
);
const Streams = lazy(() =>
  import(/* webpackChunkName: "Streams page" */ '../pages/Streams/Streams')
);
const Service = lazy(() =>
  import(/* webpackChunkName: "Service page" */ '../pages/Service/Service')
);
const HR = lazy(() =>
  import(/* webpackChunkName: "HR page" */ '../pages/HR/HR')
);
const StreamsKids = lazy(() =>
  import(
    /* webpackChunkName: "Streams Kids page" */ '../pages/StreamsKids/StreamsKids'
  )
);
const Teacher = lazy(() =>
  import(/* webpackChunkName: "Teacher layout" */ '../pages/Teacher/Teacher')
);
const StreamTrialEnglish = lazy(() =>
  import(
    /* webpackChunkName: "English trials page" */ '../pages/Trials/StreamTrialEnglish'
  )
);
const StreamTrialKids = lazy(() =>
  import(
    /* webpackChunkName: "Kids trials page" */ '../pages/Trials/StreamTrialKids'
  )
);
const StreamTrialDeutsch = lazy(() =>
  import(
    /* webpackChunkName: "Deutsch trials page" */ '../pages/Trials/StreamTrialDeutsch'
  )
);
// const StreamTrialDeutschSprechclub = lazy(() =>
//   import(
//     /* webpackChunkName: "Deutsch Sprechclub pilot page" */ '../pages/Trials/StreamTrialDeutschSprechclub'
//   )
// );
const StreamTrialB1SpeakingClub = lazy(() =>
  import(
    /* webpackChunkName: "B1 Speaking pilot page" */ '../pages/Trials/StreamTrialB1SpeakingClub'
  )
);
const StreamTrialPolski = lazy(() =>
  import(
    /* webpackChunkName: "Polska trials page" */ '../pages/Trials/StreamTrialPolski'
  )
);
const AllReviews = lazy(() =>
  import(
    /* webpackChunkName: "All reviews page" */ '../pages/AllReviews/AllReviews'
  )
);

// const English = lazy(() =>
//   import(
//     /* webpackChunkName: "English courses page" */ '../pages/English/English'
//   )
// );

const Polski = lazy(() =>
  import(/* webpackChunkName: "Polski courses page" */ '../pages/Polski/Polski')
);
const Deutsch = lazy(() =>
  import(
    /* webpackChunkName: "Deutsch courses page" */ '../pages/Deutsch/Deutsch'
  )
);
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
const TeacherPage = lazy(() =>
  import(
    /* webpackChunkName: "Teacher Page" */ '../pages/TeacherPage/TeacherPage'
  )
);
const MyAP = lazy(() =>
  import(/* webpackChunkName: "My AP Page" */ '../pages/MyAP/MyAP')
);
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
      <Toaster
        containerStyle={{
          top: '10%',
        }}
      />
      <Routes>
        <Route path="/" element={<SharedLayout utms={utms} />}>
          <Route index element={<Home utms={utms} />} />
          <Route path="new" element={<NewDesign utms={utms} />} />
          <Route path="clone" element={<Clone utms={utms} />} />
          <Route path="reviews" element={<AllReviews />} />
          <Route path="deutsch" element={<Deutsch utms={utms} />} />
          <Route path="polski" element={<Polski utms={utms} />} />
          {/* <Route path="english" element={<English utms={utms} />} />
          
          <Route path="education" element={<Education utms={utms} />} />
          <Route path="examination" element={<Examination utms={utms} />} />
          <Route path="translation" element={<Translation utms={utms} />} />
          <Route path="career" element={<Career utms={utms} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="my-ap" element={<MyAP />} />
        <Route path="streams" element={<Streams />}>
          <Route path="a0" element={<StreamA0 />} />
          <Route path="a0-chat" element={<WindowedChat />} />
          <Route path="a1" element={<StreamA1 />} />
          <Route path="pilot-a1" element={<StreamA1 />} />
          <Route path="a1-chat" element={<WindowedChat />} />
          <Route path="a2" element={<StreamA2 />} />
          <Route path="a2-chat" element={<WindowedChat />} />
          <Route path="b1" element={<StreamB1 />} />
          <Route path="b1-chat" element={<WindowedChat />} />
          <Route path="b2" element={<StreamB2 />} />
          <Route path="b2-chat" element={<WindowedChat />} />
          <Route path="deutsch" element={<StreamDeutsch />} />
          {/* <Route path="pilot" element={<StreamDeutsch />} /> */}
          <Route path="deutsch-chat" element={<WindowedChat />} />
          <Route path="deutscha2" element={<StreamDeutschA2 />} />
          <Route path="deutscha2-chat" element={<WindowedChat />} />
          <Route path="polski" element={<StreamPolski />} />
          <Route path="polski-chat" element={<WindowedChat />} />
          <Route path="polskia2" element={<StreamPolskiA2 />} />
          <Route path="polskia2-chat" element={<WindowedChat />} />
          <Route path="test" element={<StreamTest />} />
          <Route path="test-chat" element={<WindowedChat />} />
          {/* <Route path="test1" element={<StreamTest />} /> */}
          <Route path="stream-admin-panel" element={<AdminPanel />} />
          <Route path="kahoot-admin-panel" element={<KahootAdminPanel />} />
          <Route
            path="host-kahoot-admin-panel"
            element={<HostKahootAdminPanel />}
          />
          <Route path="user-admin-panel" element={<UserAdminPanel />} />
        </Route>
        <Route path="streams-kids" element={<StreamsKids />}>
          <Route path="a1" element={<KidsA1 />} />
          <Route path="a1-chat" element={<WindowedChat />} />
          <Route path="a2" element={<KidsA2 />} />
          <Route path="a2-chat" element={<WindowedChat />} />
          <Route path="b1" element={<KidsB1 />} />
          <Route path="b1-chat" element={<WindowedChat />} />
          <Route path="b2" element={<KidsB2 />} />
          <Route path="b2-chat" element={<WindowedChat />} />
        </Route>
        <Route path="service" element={<Service />}>
          <Route path="viber" element={<ViberRedirect />} />
          <Route path="tg" element={<TelegramRedirect />} />
        </Route>
        <Route path="hr" element={<HR />}>
          <Route path="viber" element={<ViberHRRedirect />} />
          <Route path="tg" element={<TelegramHRRedirect />} />
        </Route>
        <Route path="trial-en" element={<StreamTrialEnglish />} />
        <Route path="trial-pl" element={<StreamTrialPolski />} />
        <Route path="trial-de" element={<StreamTrialDeutsch />} />
        {/* <Route path="pilot-dsc" element={<StreamTrialDeutschSprechclub />} /> */}
        <Route path="pilot-scb1" element={<StreamTrialB1SpeakingClub />} />
        <Route path="trial-kids" element={<StreamTrialKids />} />
        <Route path="teacher" element={<Teacher />}>
          <Route path="a0" element={<TeacherPage />} />
          <Route path="a1" element={<TeacherPage />} />
          <Route path="a2" element={<TeacherPage />} />
          <Route path="b1" element={<TeacherPage />} />
          <Route path="b2" element={<TeacherPage />} />
          <Route path="a1kids" element={<TeacherPage />} />
          <Route path="a2kids" element={<TeacherPage />} />
          <Route path="b1kids" element={<TeacherPage />} />
          <Route path="b2kids" element={<TeacherPage />} />
          <Route path="deutsch-a1" element={<TeacherPage />} />
          <Route path="deutsch-a2" element={<TeacherPage />} />
          <Route path="polski-a1" element={<TeacherPage />} />
          <Route path="polski-a2" element={<TeacherPage />} />
          <Route path="test" element={<TeacherPage />} />
        </Route>
      </Routes>
    </>
  );
};
