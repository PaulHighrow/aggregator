import axios from 'axios';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import {
  AdminFormBtn,
  AdminInput,
  AdminInputNote,
  AdminPanelSection,
  FilterButton,
  LoginForm,
  ManagerPicker,
  ManagerPickerButton,
  UserBanButton,
  UserCell,
  UserDBCaption,
  UserDBRow,
  UserDBTable,
  UserDeleteButton,
  UserEditButton,
  UserHeadCell,
  UsersForm,
} from './UserAdminPanel.styled';
import { UserEditForm } from './UserEditForm/UserEditForm';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const DAYS_SET = [1, 3, 7, 14, 30];

export const UserAdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [managers, setManagers] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});
  const [daysAfterLastLogin, setDaysAfterLastLogin] = useState(7);
  const [isManagerPickerOpen, setIsManagerPickerOpen] = useState(false);
  const persistentUsers = useRef([]);

  useEffect(() => {
    document.title = 'User Admin Panel | AP Education';

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

    const getUsers = async () => {
      try {
        if (isUserAdmin) {
          const response = await axios.get('/users/admin/', {
            params: { isAdmin: isUserAdmin },
          });
          setUsers(users => (users = [...response.data.reverse()]));
          persistentUsers.current = [...response.data];
          setManagers(
            managers =>
              (managers = [
                ...response.data
                  .map(user => user.manager)
                  .filter((manager, i, arr) => arr.indexOf(manager) === i)
                  .sort(),
              ])
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();

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

  const calculateDaysFilter = current => {
    setDaysAfterLastLogin(
      days =>
        (days = DAYS_SET[DAYS_SET.findIndex(days => current === days) + 1])
    );
    setUsers(
      users =>
        (users = [
          ...users.sort(
            (a, b) =>
              Date.now() -
              Date.parse(changeDateFormat(b.visited[b.visited.length - 1])) -
              (Date.now() -
                Date.parse(changeDateFormat(a.visited[a.visited.length - 1])))
          ),
        ])
    );
  };

  const changeDateFormat = dateString => {
    if (dateString) {
      const dateArray = dateString.split('.');
      return Date.parse([dateArray[1], dateArray[0], dateArray[2]].join('.'));
    }
    return;
  };

  const filterByManager = current =>
    current === ''
      ? setUsers(users => (users = [...persistentUsers.current]))
      : setUsers(
          users =>
            (users = [
              ...persistentUsers.current.filter(
                user => user.manager === current
              ),
            ])
        );

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

  const initialUserValues = {
    name: '',
    mail: '',
    password: '',
    age: '',
    lang: '',
    course: '',
    points: '',
    knowledge: '',
    manager: '',
  };

  const usersSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        "Ім'я - обов'язкове поле, якщо імені з якоїсь причини ми не знаємо, введіть N/A"
      ),
    mail: yup.string().required("Пошта - обов'язкове поле!"),
    password: yup.string().required("Пароль - обов'язкове поле!"),
    age: yup
      .string()
      .required(
        "Вік - обов'язкове поле, якщо віку з якоїсь причини ми не знаємо, введіть N/A"
      ),
    lang: yup.string().optional(),
    course: yup.string().optional(),
    points: yup.string().optional(),
    knowledge: yup.string().optional(),
    manager: yup
      .string()
      .required("Менеджер - обов'язкове поле, введіть прізвище"),
  });

  const handleUserSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    values.name = values.name.trim().trimStart();
    values.mail = values.mail.toLowerCase().trim().trimStart();
    values.password = values.password.trim().trimStart();
    values.age = values.age.trim().trimStart();
    values.lang = values.lang.toLowerCase().trim().trimStart();
    values.knowledge = values.knowledge.toLowerCase().trim().trimStart();
    values.manager = values.manager.toLowerCase().trim().trimStart();
    try {
      const response = await axios.post('/users/new', values);
      console.log(response);
      resetForm();
      alert('Юзера додано');
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
    setUserToEdit(
      userToEdit => (userToEdit = users.find(user => user._id === id))
    );
  };

  const closeEditForm = e => {
    setIsEditFormOpen(false);
  };

  const closeEditFormonClick = e => {
    if (!e.target.form) {
      setIsEditFormOpen(false);
    }
  };

  const toggleManagerPicker = () => {
    setIsManagerPickerOpen(isOpen => !isOpen);
  };

  const handleDelete = async id => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.delete(`/users/${id}`);
      console.log(response);
      alert('Юзера видалено');
    } catch (error) {
      console.error(error);
      alert(
        'Десь якась проблема - клацай F12, роби скрін консолі, відправляй Кирилу'
      );
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const handleBan = async (id, isBanned) => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.patch(
        `/users/${id}`,
        isBanned ? { isBanned: false } : { isBanned: true }
      );
      console.log(response);
      isBanned ? alert('Юзера розблоковано') : alert('Юзера заблоковано');
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
            initialValues={initialUserValues}
            onSubmit={handleUserSubmit}
            validationSchema={usersSchema}
          >
            <UsersForm>
              <Label>
                <AdminInput
                  type="text"
                  name="name"
                  placeholder="Прізвище та ім'я"
                />
                <AdminInputNote component="p" name="name" />
              </Label>
              <Label>
                <AdminInput
                  type="email"
                  name="mail"
                  placeholder="Електронна пошта (логін)"
                />
                <AdminInputNote component="p" name="mail" />
              </Label>
              <Label>
                <AdminInput type="text" name="password" placeholder="Пароль" />
                <AdminInputNote component="p" name="password" />
              </Label>
              <Label>
                <AdminInput type="text" name="age" placeholder="Вік" />
                <AdminInputNote component="p" name="age" />
              </Label>
              <Label>
                <AdminInput type="text" name="lang" placeholder="Мова" />
                <AdminInputNote component="p" name="lang" />
              </Label>
              <Label>
                <AdminInput type="text" name="course" placeholder="Потік" />
                <AdminInputNote component="p" name="course" />
              </Label>
              <Label>
                <AdminInput type="text" name="points" placeholder="Бали" />
                <AdminInputNote component="p" name="points" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="knowledge"
                  placeholder="Рівень знань"
                />
                <AdminInputNote component="p" name="knowledge" />
              </Label>
              <Label>
                <AdminInput
                  type="text"
                  name="manager"
                  placeholder="Прізвище відповідального менеджера"
                />
                <AdminInputNote component="p" name="manager" />
              </Label>
              <AdminFormBtn type="submit">Додати юзера</AdminFormBtn>
            </UsersForm>
          </Formik>
        )}
        {isUserAdmin && users && (
          <UserDBTable>
            <UserDBCaption>Список юзерів з доступом до уроків</UserDBCaption>
            <thead>
              <UserDBRow>
                <UserHeadCell>ID</UserHeadCell>
                <UserHeadCell>Ім'я</UserHeadCell>
                <UserHeadCell>Пошта (логін)</UserHeadCell>
                <UserHeadCell>Пароль</UserHeadCell>
                <UserHeadCell>Апдейт</UserHeadCell>
                <UserHeadCell className="filterable">
                  Відвідини{' '}
                  <FilterButton
                    onClick={() => calculateDaysFilter(daysAfterLastLogin)}
                  ></FilterButton>
                  {daysAfterLastLogin}{' '}
                </UserHeadCell>
                <UserHeadCell>Мова</UserHeadCell>
                <UserHeadCell>Потік</UserHeadCell>
                <UserHeadCell>Знання</UserHeadCell>
                <UserHeadCell className="filterable">
                  Менеджер
                  <FilterButton onClick={toggleManagerPicker}></FilterButton>
                  {isManagerPickerOpen && (
                    <ManagerPicker>
                      {managers.map((manager, i) => (
                        <ManagerPickerButton
                          key={i}
                          onClick={() => {
                            filterByManager(manager);
                            toggleManagerPicker();
                          }}
                        >
                          {manager === undefined ? '—' : manager}
                        </ManagerPickerButton>
                      ))}
                      <ManagerPickerButton
                        onClick={() => {
                          filterByManager('');
                          toggleManagerPicker();
                        }}
                      >
                        ВСІ
                      </ManagerPickerButton>
                    </ManagerPicker>
                  )}
                </UserHeadCell>
                <UserHeadCell>Edit</UserHeadCell>
                <UserHeadCell>Delete</UserHeadCell>
                <UserHeadCell>Ban</UserHeadCell>
              </UserDBRow>
            </thead>
            <tbody>
              {users.map(user => (
                <UserDBRow key={user._id}>
                  <UserCell>{user._id}</UserCell>
                  <UserCell>{user.name}</UserCell>
                  <UserCell>{user.mail}</UserCell>
                  <UserCell>{user.password}</UserCell>
                  <UserCell
                    className={
                      Math.floor(
                        (Date.now() - Date.parse(user.updatedAt)) / 86400000
                      ) > daysAfterLastLogin
                        ? 'attention'
                        : ''
                    }
                  >
                    {new Date(user.updatedAt).toLocaleString('uk-UA')}
                  </UserCell>
                  <UserCell
                    className={
                      Math.floor(
                        (Date.now() -
                          changeDateFormat(
                            user.visited[user.visited.length - 1]
                          )) /
                          86400000
                      ) > daysAfterLastLogin
                        ? 'attention'
                        : ''
                    }
                  >
                    {user.visited[user.visited.length - 1]}
                  </UserCell>
                  <UserCell>{user.lang}</UserCell>
                  <UserCell>{user.course}</UserCell>
                  <UserCell>{user.knowledge}</UserCell>
                  <UserCell className="last-name">{user.manager}</UserCell>
                  <UserCell>
                    {user.name === 'Dev Acc' ? null : (
                      <UserEditButton onClick={() => handleEdit(user._id)}>
                        Edit
                      </UserEditButton>
                    )}
                  </UserCell>
                  <UserCell>
                    {user.name === 'Dev Acc' ? null : (
                      <UserDeleteButton onClick={() => handleDelete(user._id)}>
                        Del
                      </UserDeleteButton>
                    )}
                  </UserCell>
                  <UserCell>
                    {user.name === 'Dev Acc' ? null : (
                      <UserBanButton
                        className={user.isBanned ? 'banned' : 'not_banned'}
                        onClick={() => handleBan(user._id, user.isBanned)}
                      >
                        {user.isBanned ? 'Unban' : 'Ban'}
                      </UserBanButton>
                    )}
                  </UserCell>
                </UserDBRow>
              ))}
            </tbody>
          </UserDBTable>
        )}
        {isEditFormOpen && (
          <Backdrop onClick={closeEditFormonClick}>
            <UserEditForm
              userToEdit={userToEdit}
              closeEditForm={closeEditForm}
            />
          </Backdrop>
        )}
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
