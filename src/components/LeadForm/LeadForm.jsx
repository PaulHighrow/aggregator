import axios from 'axios';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { Formik } from 'formik';
import { useState } from 'react';
import { Loader } from 'utils/Loader/Loader';
import * as yup from 'yup';
import {
  CloseIcon,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  Input,
  InputNote,
  Label,
  StyledForm,
} from './LeadForm.styled';

axios.defaults.baseURL = 'https://skillhub-server.onrender.com';

export const LeadForm = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    phone: '',
  };

  const leadSchema = yup.object().shape({
    name: yup
      .string()
      .required("Будь ласка, вкажіть своє ім'я!")
      .matches(
        /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
        "Ім'я не має містити цифр та спецсимволів!"
      )
      .min(2, "Ім'я має складатися не менше ніж з 2 символів!")
      .max(50, "Ім'я має складатися не більше ніж з 50 символів!"),
    phone: yup
      .string()
      .required('Будь ласка, вкажіть свій номер телефону!')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Будь ласка, введіть валідний номер телефону!'
      )
      .min(10, 'Номер телефону має складатися не менше ніж з 10 символів!')
      .max(20, 'Номер телефону має складатися не більше ніж з 20 символів!'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.post('/leads', values);
      console.log(response);
      resetForm();
      closeModal();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  return (
    <>
      <Backdrop onClick={closeModal} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={leadSchema}
      >
        <StyledForm>
          <FormCloseBtn onClick={closeModal}>
            <CloseIcon />
          </FormCloseBtn>
          <FormTitle>Залишіть заявку і наш менеджер вам зателефонує</FormTitle>
          <Label>
            <Input type="text" name="name" placeholder="Ім'я" />
            <InputNote component="p" name="name" />
          </Label>
          <Label>
            <Input type="tel" name="phone" placeholder="Телефон" />
            <InputNote component="p" name="phone" />
          </Label>
          <FormBtn type="submit">Надіслати</FormBtn>
          {isLoading && <Loader />}
        </StyledForm>
      </Formik>
    </>
  );
};
