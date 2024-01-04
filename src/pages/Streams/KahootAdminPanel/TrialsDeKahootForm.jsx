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

export const TrialsDeKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    trials_de_1: '',
    trials_de_2: '',
    trials_de_3: '',
    trials_de_4: '',
    trials_de_5: '',
  };

  const linksSchema = yup.object().shape({
    trials_de_1: yup.string().optional(),
    trials_de_2: yup.string().optional(),
    trials_de_3: yup.string().optional(),
    trials_de_4: yup.string().optional(),
    trials_de_5: yup.string().optional(),
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
                name="trials_de_1"
                placeholder="Перший кахут для пробних вебінарів з англійської"
              />
              <AdminInputNote component="p" name="trials_de_1" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_de_2"
                placeholder="Другий кахут для пробних вебінарів з англійської"
              />
              <AdminInputNote component="p" name="trials_de_2" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_de_3"
                placeholder="Третій кахут для пробних вебінарів з англійської"
              />
              <AdminInputNote component="p" name="trials_de_3" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_de_4"
                placeholder="Четвертий кахут для пробних вебінарів з англійської"
              />
              <AdminInputNote component="p" name="trials_de_4" />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_de_5"
                placeholder="П'ятий кахут для пробних вебінарів з англійської"
              />
              <AdminInputNote component="p" name="trials_de_5" />
            </Label>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
