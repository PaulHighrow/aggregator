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

export const A1KahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    a1_1: '',
    a1_2: '',
    a1_3: '',
    a1_4: '',
    a1_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    a1_1: yup.string().optional(),
    a1_2: yup.string().optional(),
    a1_3: yup.string().optional(),
    a1_4: yup.string().optional(),
    a1_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const a1links = { a1: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        a1links.a1.links[key] = value;
      } else {
        a1links.a1.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', a1links);
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
                name="a1_1"
                placeholder="Перший кахут для рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_2"
                placeholder="Другий кахут для рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_3"
                placeholder="Третій кахут для рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_4"
                placeholder="Четвертий кахут для рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1_5"
                placeholder="П'ятий кахут для рівня А1"
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
