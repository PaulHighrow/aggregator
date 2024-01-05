import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import {
  AdminFormBtn,
  AdminInput,
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
    replace: true,
  };

  const linksSchema = yup.object().shape({
    test_1: yup.string().optional(),
    test_2: yup.string().optional(),
    test_3: yup.string().optional(),
    test_4: yup.string().optional(),
    test_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const testlinks = { test: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        testlinks.test.links[key] = value;
      } else {
        testlinks.test.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', testlinks);
      console.log(response);
      resetForm();
      alert('Замінив, молодець');
    } catch (error) {
      console.error(error);
      alert('Щось не прокнуло');
    } finally {
      setIsLoading(isLoading => (isLoading = false));
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
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_2"
                placeholder="Другий кахут для тестової сторінки (не чіпати)"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_3"
                placeholder="Третій кахут для тестової сторінки (не чіпати)"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_4"
                placeholder="Четвертий кахут для тестової сторінки (не чіпати)"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="test_5"
                placeholder="П'ятий кахут для тестової сторінки (не чіпати)"
              />
            </Label>
            <Label>
              Переписати старі лінки повністю?
              <AdminInput type="checkbox" name="replace" />
            </Label>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
