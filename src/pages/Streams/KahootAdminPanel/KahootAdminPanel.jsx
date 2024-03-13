import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { A0KahootForm } from './A0KahootForm';
import { A1KahootForm } from './A1KahootForm';
import { A1KidsKahootForm } from './A1KidsKahootForm';
import { A2KahootForm } from './A2KahootForm';
import { A2KidsKahootForm } from './A2KidsKahootForm';
import { B1KahootForm } from './B1KahootForm';
import { B1KidsKahootForm } from './B1KidsKahootForm';
import { B2KahootForm } from './B2KahootForm';
import { B2KidsKahootForm } from './B2KidsKahootForm';
import { DeutschA2KahootForm } from './DeutschA2KahootForm';
import { DeutschKahootForm } from './DeutschKahootForm';
import {
  AdminFormBtn,
  AdminInput,
  AdminInputNote,
  AdminPanelSection,
  KahootFormBox,
  KahootLvlBtn,
  KahootLvlBtnBox,
  LoginForm,
} from './KahootAdminPanel.styled';
import { PolskiA2KahootForm } from './PolskiA2KahootForm';
import { PolskiKahootForm } from './PolskiKahootForm';
import { TestKahootForm } from './TestKahootForm';
import { TrialsDeKahootForm } from './TrialsDeKahootForm';
import { TrialsEngKahootForm } from './TrialsEngKahootForm';
import { TrialsKidsKahootForm } from './TrialsKidsKahootForm';
import { TrialsPlKahootForm } from './TrialsPlKahootForm';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const KahootAdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const refreshToken = async () => {
      console.log('token refresher');
      try {
        if (localStorage.getItem('isAdmin')) {
          const res = await axios.post('admins/refresh/kahoot/', {});
          console.log(res);
          setIsUserAdmin(isAdmin => (isAdmin = true));
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

  const handleBtnClick = lvl => {
    levels.includes(lvl)
      ? setLevels(levels => [...levels].filter(level => level !== lvl))
      : setLevels(levels => [...levels, lvl]);
  };

  const handleLoginSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.post('/admins/login/kahoot', values);
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
          <KahootLvlBtnBox>
            <KahootLvlBtn onClick={() => handleBtnClick('a0')}>A0</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('a1')}>A1</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('a2')}>A2</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('b1')}>B1</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('b2')}>B2</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('de')}>DE</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('de-a2')}>
              DE A2
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('pl')}>PL</KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('pl-a2')}>
              PL A2
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('trial-en')}>
              Trial EN
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('trial-kids')}>
              Trial Kids
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('trial-de')}>
              Trial DE
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('trial-pl')}>
              Trial PL
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('a1kids')}>
              A1 Kids
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('a2kids')}>
              A2 Kids
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('b1kids')}>
              B1 Kids
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('b2kids')}>
              B2 Kids
            </KahootLvlBtn>
            <KahootLvlBtn onClick={() => handleBtnClick('test')}>
              Test
            </KahootLvlBtn>
          </KahootLvlBtnBox>
        )}
        <KahootFormBox>
          {levels.includes('a0') && <A0KahootForm />}
          {levels.includes('a1') && <A1KahootForm />}
          {levels.includes('a2') && <A2KahootForm />}
          {levels.includes('b1') && <B1KahootForm />}
          {levels.includes('b2') && <B2KahootForm />}
          {levels.includes('de') && <DeutschKahootForm />}
          {levels.includes('de-a2') && <DeutschA2KahootForm />}
          {levels.includes('pl') && <PolskiKahootForm />}
          {levels.includes('pl-a2') && <PolskiA2KahootForm />}
          {levels.includes('trial-en') && <TrialsEngKahootForm />}
          {levels.includes('trial-kids') && <TrialsKidsKahootForm />}
          {levels.includes('trial-de') && <TrialsDeKahootForm />}
          {levels.includes('trial-pl') && <TrialsPlKahootForm />}
          {levels.includes('a1kids') && <A1KidsKahootForm />}
          {levels.includes('a2kids') && <A2KidsKahootForm />}
          {levels.includes('b1kids') && <B1KidsKahootForm />}
          {levels.includes('b2kids') && <B2KidsKahootForm />}
          {levels.includes('test') && <TestKahootForm />}
        </KahootFormBox>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
