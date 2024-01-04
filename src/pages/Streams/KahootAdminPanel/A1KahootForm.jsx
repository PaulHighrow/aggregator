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

export const A1KahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    a1_1: '',
    a1_2: '',
    a1_3: '',
    a1_4: '',
    a1_5: '',
  };

  const linksSchema = yup.object().shape({
    a1_1: yup.string().optional(),
    a1_2: yup.string().optional(),
    a1_3: yup.string().optional(),
    a1_4: yup.string().optional(),
    a1_5: yup.string().optional(),
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
                name="a1_1"
                placeholder="Перший кахут для рівня А1"
              />
              <AdminInputNote component="p" name="a1_1" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_2"
                placeholder="Другий кахут для рівня А1"
              />
              <AdminInputNote component="p" name="a1_2" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_3"
                placeholder="Третій кахут для рівня А1"
              />
              <AdminInputNote component="p" name="a1_3" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_4"
                placeholder="Четвертий кахут для рівня А1"
              />
              <AdminInputNote component="p" name="a1_4" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_5"
                placeholder="П'ятий кахут для рівня А1"
              />
              <AdminInputNote component="p" name="a1_5" />
            </Label>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
