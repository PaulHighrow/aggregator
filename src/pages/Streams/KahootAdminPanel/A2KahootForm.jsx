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

export const A2KahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    a2_1: '',
    a2_2: '',
    a2_3: '',
    a2_4: '',
    a2_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    a2_1: yup.string().optional(),
    a2_2: yup.string().optional(),
    a2_3: yup.string().optional(),
    a2_4: yup.string().optional(),
    a2_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const a2links = { a2: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        a2links.a2.links[key] = value;
      } else {
        a2links.a2.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', a2links);
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
                name="a2_1"
                placeholder="Перший кахут для рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2_2"
                placeholder="Другий кахут для рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2_3"
                placeholder="Третій кахут для рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2_4"
                placeholder="Четвертий кахут для рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2_5"
                placeholder="П'ятий кахут для рівня А2"
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
