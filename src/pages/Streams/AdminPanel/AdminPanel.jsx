import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loader/Loader';
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
      const response = await axios.post('/streams-login', values);
      console.log(response);
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
    deutsch: '',
    polski: '',
  };

  const linksSchema = yup.object().shape({
    a0: yup.string().optional(),
    a1: yup.string().optional(),
    a2: yup.string().optional(),
    deutsch: yup.string().optional(),
    polski: yup.string().optional(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.post('/streams-links', values);
      console.log(response);
      resetForm();
    } catch (error) {
      console.error(error);
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
            initialValues={initialLinksValues}
            onSubmit={handleLinksSubmit}
            validationSchema={linksSchema}
          >
            <LinksForm>
              <Label>
                <AdminInput type="text" name="a0" placeholder="A0 link" />
                <AdminInputNote component="p" name="a0" />
              </Label>
              <Label>
                <AdminInput type="text" name="a1" placeholder="A1 link" />
                <AdminInputNote component="p" name="a1" />
              </Label>
              <Label>
                <AdminInput type="text" name="a2" placeholder="A2 link" />
                <AdminInputNote component="p" name="a2" />
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
              <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
            </LinksForm>
          </Formik>
        )}
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
