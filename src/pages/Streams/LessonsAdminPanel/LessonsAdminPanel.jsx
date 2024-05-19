import axios from 'axios';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  AdminFormBtn,
  AdminInput,
  AdminInputNote,
  AdminPanelSection,
  LoginForm,
  UserCell,
  UserDBCaption,
  UserDBRow,
  UserDBTable,
  UserDeleteButton,
  UserEditButton,
  UserHeadCell,
  UsersForm,
} from '../UserAdminPanel/UserAdminPanel.styled';
import { LessonEditForm } from './LessonEditForm/LessonEditForm';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const LessonsAdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [lessonToEdit, setLessonToEdit] = useState({});

  useEffect(() => {
    document.title = 'Lessons Admin Panel | AP Education';

    const refreshToken = async () => {
      console.log('token refresher');
      try {
        if (localStorage.getItem('isAdmin')) {
          const res = await axios.post('admins/refresh/users/', {});
          console.log(res);
          setIsUserAdmin(isAdmin => (isAdmin = true));
        }
      } catch (error) {
        console.log(error);
      }
    };
    refreshToken();

    const getLessons = async () => {
      try {
        if (isUserAdmin) {
          const response = await axios.get('/lessons/');
          setLessons(lessons => (lessons = [...response.data]));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getLessons();

    const onEscapeClose = event => {
      if (event.code === 'Escape' && isEditFormOpen) {
        closeEditForm();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  }, [isUserAdmin, isLoading, isEditFormOpen]);

  const initialLoginValues = {
    login: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    login: yup.string().required('Вкажіть логін!'),
    password: yup.string().required('Введіть пароль!'),
  });

  const handleLoginSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    try {
      const response = await axios.post('/admins/login/users', values);
      setAuthToken(response.data.token);
      setIsUserAdmin(isAdmin => (isAdmin = true));
      localStorage.setItem('isAdmin', true);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const initialLessonValues = {
    marathonId: '',
    lessonId: '',
    lang: '',
    level: '',
    lesson: '',
    topic: '',
    keysEn: '',
    keysUa: '',
    pdf: '',
    video: '',
  };

  const lessonSchema = yup.object().shape({
    marathonId: yup
      .string()
      .required(
        "marathonId - обов'язкове поле! Значення дивись на платформі в адресному рядку"
      )
      .matches(/^\d{1,7}$/, 'Лише цифри'),
    lessonId: yup
      .string()
      .required(
        "marathonLessonId - обов'язкове поле! Значення дивись на платформі в адресному рядку"
      )
      .matches(/^\d{1,7}$/, 'Лише цифри'),
    lang: yup.string().required("Мова - обов'язкове поле!"),
    level: yup
      .string()
      .required("Рівень - обов'язкове поле!")
      .matches(/^[A-Za-z0-9]+$/, 'Лише латинські літери'),
    lesson: yup.string().required("Урок - обов'язкове поле!"),
    topic: yup
      .string()
      .required(
        "Тема уроку - обов'язкове поле! Введи теми як граматики, так і словника одним рядком"
      ),
    keysEn: yup
      .string()
      .required(
        "Ключі англійською - обов'язкове поле! Введи переклад тему уроку або її фрагментів англійською"
      ),
    keysUa: yup
      .string()
      .required(
        "Ключі українською - обов'язкове поле! Введи переклад тему уроку або її фрагментів українською"
      ),
    pdf: yup.string() || yup.array().of(yup.string()),
    video: yup.string() || yup.array().of(yup.string()),
  });

  const handleLessonSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    values.marathonId = values.marathonId.trim().trimStart();
    values.lessonId = values.lessonId.trim().trimStart();
    values.level = values.level.toLowerCase().trim().trimStart();
    values.lesson = values.lesson.trim().trimStart();
    values.topic = values.topic.trim().trimStart();
    values.keysEn = values.keysEn.toLowerCase().trim().trimStart();
    values.keysUa = values.keysUa.toLowerCase().trim().trimStart();
    values.pdf =
      values.pdf === ''
        ? []
        : [
            ...values.pdf
              .split(', ')
              .map(link => link.toLowerCase().trim().trimStart()),
          ];

    values.video =
      values.video === ''
        ? []
        : [
            ...values.video
              .split(', ')
              .map(link => link.toLowerCase().trim().trimStart()),
          ];
    try {
      const response = await axios.post('/lessons', values);
      console.log(response);
      resetForm();
      alert('Урок додано');
    } catch (error) {
      console.error(error);
      alert(
        'Десь якась проблема - клацай F12, роби скрін консолі, відправляй Кирилу'
      );
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const handleEdit = async id => {
    setIsEditFormOpen(true);
    setLessonToEdit(
      lessonToEdit => (lessonToEdit = lessons.find(lesson => lesson._id === id))
    );
  };

  const closeEditForm = e => {
    setIsEditFormOpen(false);
  };

  const closeEditFormOnClick = e => {
    if (e.target.id === 'close-on-click') {
      setIsEditFormOpen(false);
    }
  };

  const handleDelete = async id => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.delete(`/lessons/${id}`);
      console.log(response);
      alert('Урок видалено');
    } catch (error) {
      console.error(error);
      alert(
        'Десь якась проблема - клацай F12, роби скрін консолі, відправляй Кирилу'
      );
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  return (
    <>
      <AdminPanelSection>
        {!isUserAdmin && (
          <Formik
            initialValues={initialLoginValues}
            onSubmit={handleLoginSubmit}
            validationSchema={loginSchema}
          >
            <LoginForm>
              <Label>
                <AdminInput type="text" name="login" placeholder="Login" />
                <AdminInputNote component="p" name="login" />
              </Label>
              <Label>
                <AdminInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <AdminInputNote component="p" name="password" />
              </Label>
              <AdminFormBtn type="submit">Залогінитись</AdminFormBtn>
            </LoginForm>
          </Formik>
        )}

        {isUserAdmin && (
          <Formik
            initialValues={initialLessonValues}
            onSubmit={handleLessonSubmit}
            validationSchema={lessonSchema}
          >
            <UsersForm>
              <Label>
                <AdminInput
                  type="text"
                  name="marathonId"
                  placeholder="marathonId"
                />
                <AdminInputNote component="p" name="marathonId" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="lessonId"
                  placeholder="marathonLessonId"
                />
                <AdminInputNote component="p" name="lessonId" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="lang"
                  placeholder="Мова (en/de/pl)"
                />
                <AdminInputNote component="p" name="lang" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="level"
                  placeholder="Рівень (A1/A2/B1/B2)"
                />
                <AdminInputNote component="p" name="level" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="lesson"
                  placeholder="Номер уроку (Lesson 12)"
                />
                <AdminInputNote component="p" name="lesson" />
              </Label>
              <Label>
                <AdminInput type="text" name="topic" placeholder="Тема уроку" />
                <AdminInputNote component="p" name="topic" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="keysUa"
                  placeholder="Ключові слова українською"
                />
                <AdminInputNote component="p" name="keysUa" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="keysEn"
                  placeholder="Ключові слова англійською"
                />
                <AdminInputNote component="p" name="keysEn" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="video"
                  placeholder="Внести посилання на відео через кому"
                />
                <AdminInputNote component="p" name="knowledge" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="pdf"
                  placeholder="Внести посилання на таблиці через кому"
                />
                <AdminInputNote component="p" name="pdf" />
              </Label>
              <AdminFormBtn type="submit">Додати урок</AdminFormBtn>
            </UsersForm>
          </Formik>
        )}
        {isUserAdmin && lessons && (
          <UserDBTable>
            <UserDBCaption>Список юзерів з доступом до уроків</UserDBCaption>
            <thead>
              <UserDBRow>
                <UserHeadCell>marathonID</UserHeadCell>
                <UserHeadCell>lessonID</UserHeadCell>
                <UserHeadCell>Мова</UserHeadCell>
                <UserHeadCell>Рівень</UserHeadCell>
                <UserHeadCell>Номер уроку</UserHeadCell>
                <UserHeadCell>Тема</UserHeadCell>
                <UserHeadCell>Ключі UA</UserHeadCell>
                <UserHeadCell>Ключі EN</UserHeadCell>
                <UserHeadCell>PDF</UserHeadCell>
                <UserHeadCell>Відео</UserHeadCell>
                <UserHeadCell>Edit</UserHeadCell>
                <UserHeadCell>Delete</UserHeadCell>
              </UserDBRow>
            </thead>
            <tbody>
              {lessons.map(lesson => (
                <UserDBRow key={lesson._id}>
                  <UserCell>{lesson.marathonId}</UserCell>
                  <UserCell>{lesson.lessonId}</UserCell>
                  <UserCell>{lesson.lang}</UserCell>
                  <UserCell>{lesson.level}</UserCell>
                  <UserCell>{lesson.lesson}</UserCell>
                  <UserCell>{lesson.keysUa}</UserCell>
                  <UserCell>{lesson.keysUa}</UserCell>
                  <UserCell>{lesson.keysEn}</UserCell>
                  <UserCell>
                    {lesson.pdf.map((link, i) => (
                      <>
                        <a key={i} href={link}>
                          {i + 1}
                        </a>{' '}
                      </>
                    ))}
                  </UserCell>
                  <UserCell>
                    {lesson.video.map((link, i) => (
                      <>
                        <a key={i} href={link}>
                          {i + 1}
                        </a>{' '}
                      </>
                    ))}
                  </UserCell>
                  <UserCell>
                    {
                      <UserEditButton onClick={() => handleEdit(lesson._id)}>
                        Edit
                      </UserEditButton>
                    }
                  </UserCell>
                  <UserCell>
                    {lesson.name === 'Dev Acc' ? null : (
                      <UserDeleteButton
                        onClick={() => handleDelete(lesson._id)}
                      >
                        Del
                      </UserDeleteButton>
                    )}
                  </UserCell>
                </UserDBRow>
              ))}
            </tbody>
          </UserDBTable>
        )}
        {isEditFormOpen && (
          <Backdrop onClick={closeEditFormOnClick} id="close-on-click">
            <LessonEditForm
              lessonToEdit={lessonToEdit}
              closeEditForm={closeEditForm}
            />
          </Backdrop>
        )}
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
