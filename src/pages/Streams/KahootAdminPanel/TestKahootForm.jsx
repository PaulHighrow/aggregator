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

export const TestKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    test_1: '',
    test_2: '',
    test_3: '',
    test_4: '',
    test_5: '',
  };

  const linksSchema = yup.object().shape({
    test_1: yup.string().optional(),
    test_2: yup.string().optional(),
    test_3: yup.string().optional(),
    test_4: yup.string().optional(),
    test_5: yup.string().optional(),
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
                name="test_1"
                placeholder="Перший кахут для тестової сторінки (не чіпати)"
              />
              <AdminInputNote component="p" name="test_1" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_2"
                placeholder="Другий кахут для тестової сторінки (не чіпати)"
              />
              <AdminInputNote component="p" name="test_2" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_3"
                placeholder="Третій кахут для тестової сторінки (не чіпати)"
              />
              <AdminInputNote component="p" name="test_3" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_4"
                placeholder="Четвертий кахут для тестової сторінки (не чіпати)"
              />
              <AdminInputNote component="p" name="test_4" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_5"
                placeholder="П'ятий кахут для тестової сторінки (не чіпати)"
              />
              <AdminInputNote component="p" name="test_5" />
            </Label>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
