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

export const A2KidsKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    a2kids_1: '',
    a2kids_2: '',
    a2kids_3: '',
    a2kids_4: '',
    a2kids_5: '',
    a2kids_6: '',
    a2kids_7: '',
    a2kids_8: '',
    a2kids_9: '',
    a2kids_10: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    a2kids_1: yup.string().optional(),
    a2kids_2: yup.string().optional(),
    a2kids_3: yup.string().optional(),
    a2kids_4: yup.string().optional(),
    a2kids_5: yup.string().optional(),
    a2kids_6: yup.string().optional(),
    a2kids_7: yup.string().optional(),
    a2kids_8: yup.string().optional(),
    a2kids_9: yup.string().optional(),
    a2kids_10: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const a2kidslinks = { a2kids: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        a2kidslinks.a2kids.links[key] = value;
      } else {
        a2kidslinks.a2kids.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', a2kidslinks);
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
                name="a2kids_1"
                placeholder="Перший кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_2"
                placeholder="Другий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_3"
                placeholder="Третій кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_4"
                placeholder="Четвертий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_5"
                placeholder="П'ятий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_6"
                placeholder="Шостий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_7"
                placeholder="Сьомий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_8"
                placeholder="Восьмий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_9"
                placeholder="Дев'ятий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_10"
                placeholder="Десятий кахут для дітей рівня А2"
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
