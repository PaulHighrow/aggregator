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

export const A1KidsKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    a1kids_1: '',
    a1kids_2: '',
    a1kids_3: '',
    a1kids_4: '',
    a1kids_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    a1kids_1: yup.string().optional(),
    a1kids_2: yup.string().optional(),
    a1kids_3: yup.string().optional(),
    a1kids_4: yup.string().optional(),
    a1kids_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const a1kidslinks = { a1kids: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        a1kidslinks.a1kids.links[key] = value;
      } else {
        a1kidslinks.a1kids.replace = value;
      }
    }
    console.log(a1kidslinks);
    try {
      const response = await axios.patch('/kahoots', a1kidslinks);
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
                name="a1kids_1"
                placeholder="Перший кахут для дітей рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1kids_2"
                placeholder="Другий кахут для дітей рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1kids_3"
                placeholder="Третій кахут для дітей рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1kids_4"
                placeholder="Четвертий кахут для дітей рівня А1"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a1kids_5"
                placeholder="П'ятий кахут для дітей рівня А1"
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
