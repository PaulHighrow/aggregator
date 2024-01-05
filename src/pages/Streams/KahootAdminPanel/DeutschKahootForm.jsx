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

export const DeutschKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    deutsch_1: '',
    deutsch_2: '',
    deutsch_3: '',
    deutsch_4: '',
    deutsch_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    deutsch_1: yup.string().optional(),
    deutsch_2: yup.string().optional(),
    deutsch_3: yup.string().optional(),
    deutsch_4: yup.string().optional(),
    deutsch_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const deutschlinks = { deutsch: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        deutschlinks.deutsch.links[key] = value;
      } else {
        deutschlinks.deutsch.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', deutschlinks);
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
                name="deutsch_1"
                placeholder="Перший кахут для вебінарів з німецької"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="deutsch_2"
                placeholder="Другий кахут для вебінарів з німецької"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="deutsch_3"
                placeholder="Третій кахут для вебінарів з німецької"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="deutsch_4"
                placeholder="Четвертий кахут для вебінарів з німецької"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="deutsch_5"
                placeholder="П'ятий кахут для вебінарів з німецької"
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
