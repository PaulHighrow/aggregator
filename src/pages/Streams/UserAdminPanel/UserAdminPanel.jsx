import axios from 'axios';
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
  LinksForm,
  LoginForm,
  UserDBCaption,
  UserDBTable
} from './UserAdminPanel.styled';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const UserAdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (isUserAdmin) {
          const response = await axios.get('/users/admin/', {
            params: { isAdmin: isUserAdmin },
          });
          setUsers(users => (users = [...response.data]));
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, [isUserAdmin]);

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
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const initialUserValues = {
    name: '',
    mail: '',
    password: '',
    points: '',
  };

  const usersSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        "Ім'я - обов'язкове поле, якщо імені з якоїсь причини ми не знаємо, введіть N/A"
      ),
    mail: yup.string().required("Пошта - обов'язкове поле!"),
    password: yup.string().required("Пароль - обов'язкове поле!"),
    points: yup.string().optional(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.post('/users/new', values);
      console.log(response);
      resetForm();
      alert('Юзера додано');
    } catch (error) {
      console.error(error);
      alert('Десь якась проблема');
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
            initialValues={initialUserValues}
            onSubmit={handleLinksSubmit}
            validationSchema={usersSchema}
          >
            <LinksForm>
              <Label>
                <AdminInput type="text" name="name" placeholder="Ім'я" />
                <AdminInputNote component="p" name="name" />
              </Label>
              <Label>
                <AdminInput
                  type="email"
                  name="mail"
                  placeholder="Електронна пошта"
                />
                <AdminInputNote component="p" name="mail" />
              </Label>
              <Label>
                <AdminInput type="text" name="password" placeholder="Пароль" />
                <AdminInputNote component="p" name="password" />
              </Label>
              <Label>
                <AdminInput type="text" name="points" placeholder="Бали" />
                <AdminInputNote component="p" name="points" />
              </Label>
              <AdminFormBtn type="submit">Додати юзера</AdminFormBtn>
            </LinksForm>
          </Formik>
        )}
        {isUserAdmin && users && (
          <UserDBTable>
            <UserDBCaption>Список юзерів з доступом до уроків</UserDBCaption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Ім'я</th>
                <th>Пароль</th>
                <th>Відвідини</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>{user.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </UserDBTable>
        )}
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
