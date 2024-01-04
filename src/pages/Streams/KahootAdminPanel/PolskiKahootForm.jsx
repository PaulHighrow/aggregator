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
} from './KahootAdminPanel.styled';

export const PolskiKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    pl_1: '',
    pl_2: '',
    pl_3: '',
    pl_4: '',
    pl_5: '',
  };

  const linksSchema = yup.object().shape({
    pl_1: yup.string().optional(),
    pl_2: yup.string().optional(),
    pl_3: yup.string().optional(),
    pl_4: yup.string().optional(),
    pl_5: yup.string().optional(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    console.log(values);

    try {
      const response = await axios.patch('/kahoots', values);
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
        <Formik
          initialValues={initialLinksValues}
          onSubmit={handleLinksSubmit}
          validationSchema={linksSchema}
        >
          <LinksForm>
            <Label>
              <AdminInput
                type="text"
                name="pl_1"
                placeholder="Перший кахут для вебінарів з польської"
              />
              <AdminInputNote component="p" name="pl_1" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="pl_2"
                placeholder="Другий кахут для вебінарів з польської"
              />
              <AdminInputNote component="p" name="pl_2" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="pl_3"
                placeholder="Третій кахут для вебінарів з польської"
              />
              <AdminInputNote component="p" name="pl_3" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="pl_4"
                placeholder="Четвертий кахут для вебінарів з польської"
              />
              <AdminInputNote component="p" name="pl_4" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="pl_5"
                placeholder="П'ятий кахут для вебінарів з польської"
              />
              <AdminInputNote component="p" name="pl_5" />
            </Label>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
