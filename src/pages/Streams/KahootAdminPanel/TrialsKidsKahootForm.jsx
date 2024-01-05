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

export const TrialsKidsKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    trials_kids_1: '',
    trials_kids_2: '',
    trials_kids_3: '',
    trials_kids_4: '',
    trials_kids_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    trials_kids_1: yup.string().optional(),
    trials_kids_2: yup.string().optional(),
    trials_kids_3: yup.string().optional(),
    trials_kids_4: yup.string().optional(),
    trials_kids_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const trials_kidslinks = { trials_kids: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        trials_kidslinks.trials_kids.links[key] = value;
      } else {
        trials_kidslinks.trials_kids.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', trials_kidslinks);
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
                name="trials_kids_1"
                placeholder="Перший кахут для дитячих пробних вебінарів з англійської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_kids_2"
                placeholder="Другий кахут для дитячих пробних вебінарів з англійської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_kids_3"
                placeholder="Третій кахут для дитячих пробних вебінарів з англійської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_kids_4"
                placeholder="Четвертий кахут для дитячих пробних вебінарів з англійської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_kids_5"
                placeholder="П'ятий кахут для дитячих пробних вебінарів з англійської"
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
