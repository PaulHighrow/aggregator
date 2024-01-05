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

export const A0KahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    a0_1: '',
    a0_2: '',
    a0_3: '',
    a0_4: '',
    a0_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    a0_1: yup.string().optional(),
    a0_2: yup.string().optional(),
    a0_3: yup.string().optional(),
    a0_4: yup.string().optional(),
    a0_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const a0links = { a0: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        a0links.a0.links[key] = value;
      } else {
        a0links.a0.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', a0links);
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
                name="a0_1"
                placeholder="Перший кахут для рівня А0"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a0_2"
                placeholder="Другий кахут для рівня А0"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a0_3"
                placeholder="Третій кахут для рівня А0"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a0_4"
                placeholder="Четвертий кахут для рівня А0"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a0_5"
                placeholder="П'ятий кахут для рівня А0"
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
