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

export const PolskiKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    polski_1: '',
    polski_2: '',
    polski_3: '',
    polski_4: '',
    polski_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    polski_1: yup.string().optional(),
    polski_2: yup.string().optional(),
    polski_3: yup.string().optional(),
    polski_4: yup.string().optional(),
    polski_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const polskilinks = { polski: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        polskilinks.polski.links[key] = value;
      } else {
        polskilinks.polski.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', polskilinks);
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
                name="polski_1"
                placeholder="Перший кахут для вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="polski_2"
                placeholder="Другий кахут для вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="polski_3"
                placeholder="Третій кахут для вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="polski_4"
                placeholder="Четвертий кахут для вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="polski_5"
                placeholder="П'ятий кахут для вебінарів з польської"
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
