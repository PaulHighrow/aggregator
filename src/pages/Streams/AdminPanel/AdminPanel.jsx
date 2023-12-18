import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import {
  AdminFormBtn,
  AdminInput,
  AdminInputNote,
  AdminPanelSection,
  LinksForm,
  LoginForm,
} from './AdminPanel.styled';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const AdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

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
      const response = await axios.post('/admins/login', values);
      setAuthToken(response.data.token);
      setIsUserAdmin(isAdmin => (isAdmin = true));
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const initialLinksValues = {
    a0: '',
    a1: '',
    a2: '',
    b1: '',
    deutsch: '',
    polski: '',
    trials: '',
    a1kids: '',
    a2kids: '',
    b1kids: '',
  };

  const linksSchema = yup.object().shape({
    a0: yup.string().optional(),
    a1: yup.string().optional(),
    a2: yup.string().optional(),
    b1: yup.string().optional(),
    deutsch: yup.string().optional(),
    polski: yup.string().optional(),
    trials: yup.string().optional(),
    a1kids: yup.string().optional(),
    a2kids: yup.string().optional(),
    b1kids: yup.string().optional(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.patch('/links', values);
      console.log(response);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
      alert('Замінив, молодець');
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
            initialValues={initialLinksValues}
            onSubmit={handleLinksSubmit}
            validationSchema={linksSchema}
          >
            <LinksForm>
              {/* <Label>
                <AdminInput type="text" name="a0" placeholder="A0 link" />
                <AdminInputNote component="p" name="a0" />
              </Label> */}
              <Label>
                <AdminInput type="text" name="a1" placeholder="A1 link" />
                <AdminInputNote component="p" name="a1" />
              </Label>
              <Label>
                <AdminInput type="text" name="a2" placeholder="A2 link" />
                <AdminInputNote component="p" name="a2" />
              </Label>
              <Label>
                <AdminInput type="text" name="b1" placeholder="B1 link" />
                <AdminInputNote component="p" name="b1" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="deutsch"
                  placeholder="Deutsch link"
                />
                <AdminInputNote component="p" name="deutsch" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="polski"
                  placeholder="Polski link"
                />
                <AdminInputNote component="p" name="polski" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="trials"
                  placeholder="Trials link"
                />
                <AdminInputNote component="p" name="trials" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="a1kids"
                  placeholder="A1 kids link"
                />
                <AdminInputNote component="p" name="a1kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="a2kids"
                  placeholder="A2 kids link"
                />
                <AdminInputNote component="p" name="a2kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="b1kids"
                  placeholder="B1 kids link"
                />
                <AdminInputNote component="p" name="b1kids" />
              </Label>
              <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
            </LinksForm>
          </Formik>
        )}
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
