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
  HiddenInput,
  Input,
  InputNote,
  Label,
  StyledForm,
} from './LeadForm.styled';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

export const LeadForm = ({ closeModal, utms }) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    phone: '',
    utm_content: '',
    utm_medium: '',
    utm_campaign: '',
    utm_source: '',
    utm_term: '',
    utm_referrer: '',
  };

  const leadSchema = yup.object().shape({
    name: yup
      .string()
      .required("Будь ласка, вкажіть своє ім'я!")
      .matches(
        /^[A-Za-zА-Яа-яіІїЇ]+(?:[-'\s][A-Za-zА-Яа-яіІїЇ]+)*$/,
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
    utm_content: yup.string(),
    utm_medium: yup.string(),
    utm_campaign: yup.string(),
    utm_source: yup.string(),
    utm_term: yup.string(),
    utm_referrer: yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    values.utm_content = utms.utm_content;
    values.utm_medium = utms.utm_medium;
    values.utm_campaign = utms.utm_campaign;
    values.utm_source = utms.utm_source;
    values.utm_term = utms.utm_term;
    values.utm_referrer = utms.utm_referrer;
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
          <HiddenInput type="text" name="utm_content" />
          <HiddenInput type="text" name="utm_medium" />
          <HiddenInput type="text" name="utm_campaign" />
          <HiddenInput type="text" name="utm_source" />
          <HiddenInput type="text" name="utm_term" />
          <HiddenInput type="text" name="utm_referrer" />
          <FormBtn type="submit">Надіслати</FormBtn>
          {isLoading && <Loader />}
        </StyledForm>
      </Formik>
    </>
  );
};
