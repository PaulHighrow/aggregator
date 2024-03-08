import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import {
  StreamPlaceHolderText,
  StreamSection,
} from 'components/Stream/Stream.styled';
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
import { LessonFinder } from './LessonFinder/LessonFinder';

const MyAP = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [lessons, setLessons] = useState(false);
  axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

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

    const refreshToken = async () => {
      console.log('token refresher');
      try {
        const res = await axios.post('/users/refresh', {
          mail: localStorage.getItem('mail'),
        });
        setIsUserLogged(isLogged => (isLogged = true));
        console.log(res);
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
            <StreamPlaceHolderText>
              Привіт! Ця сторінка недоступна для неавторизованих користувачів.
              Але якщо ви маєте доступ до нашої платформи, то й до цієї сторінки
              теж. Введіть дані, які ви використовуєте для входу на платформу.
            </StreamPlaceHolderText>
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
          <LessonFinder lessons={lessons} />
          <MyPlatform />

        </>
      )}
    </StreamSection>
  );
};

export default MyAP;
