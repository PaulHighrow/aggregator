import axios from 'axios';
import {
  Label,
  LeftFormBackgroundStar,
  RightFormBackgroundStar
} from 'components/LeadForm/LeadForm.styled';
import { LoginFormText, StreamSection } from 'components/Stream/Stream.styled';
import { Formik } from 'formik';
import {
  AdminFormBtn,
  AdminInput,
  AdminInputNote,
  LoginForm,
} from 'pages/Streams/AdminPanel/AdminPanel.styled';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { MyPlatform } from './My Platform/MyPlatform';
import { MyAPPanel } from './MyAPPanel/MyAPPanel';

const MyAP = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [lessons, setLessons] = useState(false);
  const [points, setPoints] = useState(false);
  const [user, setUser] = useState({});
  axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

  console.log(window.location);

  useEffect(() => {
    document.title = 'My AP | AP Education';

    const getLessons = async () => {
      console.log('lessons getter');
      try {
        const res = await axios.get('/lessons');
        console.log(res);
        setLessons(lessons => (lessons = [...res.data]));
      } catch (error) {
        console.log(error);
      }
    };
    getLessons();

    const getRating = async () => {
      console.log('ratings getter');
      try {
        const res = await axios.get('/ratings');
        console.log(res);
        setPoints(ratings => (ratings = [...res.data]));
      } catch (error) {
        console.log(error);
      }
    };
    getRating();

    const refreshToken = async () => {
      console.log('token refresher');
      try {
        const res = await axios.post('/users/refresh', {
          mail: localStorage.getItem('mail'),
        });
        setIsUserLogged(isLogged => (isLogged = true));
        console.log(res);
        setUser(user => (user = { ...res.data.user }));
      } catch (error) {
        console.log(error);
      }
    };
    refreshToken();
  }, []);

  const setAuthToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const initialLoginValues = {
    mail: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    mail: yup
      .string()
      .required('Вкажіть пошту, за якою ви зареєстровані на нашій платформі!'),
    password: yup
      .string()
      .required(
        'Введіть пароль, який ви використовуєте для входу на нашу платформу!'
      ),
  });

  const handleLoginSubmit = async (values, { resetForm }) => {
    console.log(isUserLogged);
    try {
      const response = await axios.post('/users/login', values);
      console.log(values);
      console.log(response);
      setAuthToken(response.data.token);
      setIsUserLogged(isLogged => (isLogged = true));
      setUser(user => (user = { ...response.data.user }));
      localStorage.setItem('mail', values.mail);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StreamSection>
      {!isUserLogged ? (
        <Formik
          initialValues={initialLoginValues}
          onSubmit={handleLoginSubmit}
          validationSchema={loginSchema}
        >
          <LoginForm>
            <LeftFormBackgroundStar />
            <RightFormBackgroundStar />
            <LoginFormText>
              Привіт! 
              <br />
              Ця сторінка недоступна для неавторизованих користувачів.
              Але якщо ви маєте доступ до нашої платформи, то й до цієї сторінки
              теж. Введіть дані, які ви використовуєте для входу на платформу.
            </LoginFormText>
            <Label>
              <AdminInput type="text" name="mail" placeholder="Login" />
              <AdminInputNote component="p" name="mail" type="email" />
            </Label>
            <Label>
              <AdminInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <AdminInputNote component="p" name="password" />
            </Label>
            <AdminFormBtn type="submit">Увійти</AdminFormBtn>
          </LoginForm>
        </Formik>
      ) : (
        <>
          <MyAPPanel lessons={lessons} user={user} points={points} />
          <MyPlatform />
        </>
      )}
    </StreamSection>
  );
};

export default MyAP;
