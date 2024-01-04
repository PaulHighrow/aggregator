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

export const DeutschKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    de_1: '',
    de_2: '',
    de_3: '',
    de_4: '',
    de_5: '',
  };

  const linksSchema = yup.object().shape({
    de_1: yup.string().optional(),
    de_2: yup.string().optional(),
    de_3: yup.string().optional(),
    de_4: yup.string().optional(),
    de_5: yup.string().optional(),
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
                name="de_1"
                placeholder="Перший кахут для вебінарів з німецької"
              />
              <AdminInputNote component="p" name="de_1" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="de_2"
                placeholder="Другий кахут для вебінарів з німецької"
              />
              <AdminInputNote component="p" name="de_2" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="de_3"
                placeholder="Третій кахут для вебінарів з німецької"
              />
              <AdminInputNote component="p" name="de_3" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="de_4"
                placeholder="Четвертий кахут для вебінарів з німецької"
              />
              <AdminInputNote component="p" name="de_4" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="de_5"
                placeholder="П'ятий кахут для вебінарів з німецької"
              />
              <AdminInputNote component="p" name="de_5" />
            </Label>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
