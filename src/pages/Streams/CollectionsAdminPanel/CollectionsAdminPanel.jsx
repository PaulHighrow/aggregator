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
} from './CollectionsAdminPanel.styled';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const CollectionsAdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    document.title = '3D Collections Admin Panel | AP Education';

    const refreshToken = async () => {
      console.log('token refresher');
      try {
        if (localStorage.getItem('isAdmin')) {
          const res = await axios.post('admins/refresh/collections', {});
          console.log(res);
          setIsUserAdmin(isAdmin => (isAdmin = true));
          setAuthToken(res.data.newToken);
        }
      } catch (error) {
        console.log(error);
      }
    };
    refreshToken();
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
      const response = await axios.post('/admins/login/collections', values);
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

  const initialLinksValues = {
    a0: '',
    a1: '',
    a2: '',
    b1: '',
    b2: '',
    deutsch: '',
    deutscha2: '',
    polski: '',
    polskia2: '',
    trials: '',
    trials_kids: '',
    trials_de: '',
    trials_pl: '',
    a1kids: '',
    a2kids: '',
    b1kids: '',
    b2kids: '',
    test: '',
  };

  const linksSchema = yup.object().shape({
    a0: yup.string().optional(),
    a1: yup.string().optional(),
    a2: yup.string().optional(),
    b1: yup.string().optional(),
    b2: yup.string().optional(),
    deutsch: yup.string().optional(),
    deutscha2: yup.string().optional(),
    polski: yup.string().optional(),
    polskia2: yup.string().optional(),
    trials: yup.string().optional(),
    trials_kids: yup.string().optional(),
    trials_de: yup.string().optional(),
    trials_pl: yup.string().optional(),
    a1kids: yup.string().optional(),
    a2kids: yup.string().optional(),
    b1kids: yup.string().optional(),
    b2kids: yup.string().optional(),
    test: yup.string().optional(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));

    Object.keys(values).forEach(
      key =>
        (values[key] = values[key].replace(
          'width="640" height="480"',
          'width="100%" height="100%"'
        ))
    );

    try {
      const response = await axios.patch('/collections', values);
      console.log(response);
      resetForm();
      alert('Коллекції замінилися, молодець');
    } catch (error) {
      console.error(error);
      alert('Щось не прокнуло!');
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
                <AdminInput type="text" name="a0" placeholder="A0 collection" />
                <AdminInputNote component="p" name="a0" />
              </Label>
              <Label>
                <AdminInput type="text" name="a1" placeholder="A1 collection" />
                <AdminInputNote component="p" name="a1" />
              </Label>
              <Label>
                <AdminInput type="text" name="a2" placeholder="A2 collection" />
                <AdminInputNote component="p" name="a2" />
              </Label>
              <Label>
                <AdminInput type="text" name="b1" placeholder="B1 collection" />
                <AdminInputNote component="p" name="b1" />
              </Label>
              <Label>
                <AdminInput type="text" name="b2" placeholder="B2 collection" />
                <AdminInputNote component="p" name="b2" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="deutsch"
                  placeholder="Deutsch A1 collection"
                />
                <AdminInputNote component="p" name="deutsch" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="deutscha2"
                  placeholder="Deutsch A2 collection"
                />
                <AdminInputNote component="p" name="deutscha2" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="polski"
                  placeholder="Polski A1 collection"
                />
                <AdminInputNote component="p" name="polski" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="polskia2"
                  placeholder="Polski A2 collection"
                />
                <AdminInputNote component="p" name="polskia2" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="trials"
                  placeholder="Trials English collection"
                />
                <AdminInputNote component="p" name="trials" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="trials_kids"
                  placeholder="Trials Kids collection"
                />
                <AdminInputNote component="p" name="trials_kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="trials_de"
                  placeholder="Trials Deutsch collection"
                />
                <AdminInputNote component="p" name="trials_de" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="trials_pl"
                  placeholder="Trials Polski collection"
                />
                <AdminInputNote component="p" name="trials_pl" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="a1kids"
                  placeholder="A1 Kids collection"
                />
                <AdminInputNote component="p" name="a1kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="a2kids"
                  placeholder="A2 Kids collection"
                />
                <AdminInputNote component="p" name="a2kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="b1kids"
                  placeholder="B1 Kids collection"
                />
                <AdminInputNote component="p" name="b1kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="b2kids"
                  placeholder="B2 Kids collection"
                />
                <AdminInputNote component="p" name="b2kids" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="test"
                  placeholder="Test collection, do not change"
                />
                <AdminInputNote component="p" name="test" />
              </Label>
              <AdminFormBtn type="submit">Замінити колекції</AdminFormBtn>
            </LinksForm>
          </Formik>
        )}
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
