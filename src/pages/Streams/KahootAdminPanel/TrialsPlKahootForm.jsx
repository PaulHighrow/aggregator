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

export const TrialsPlKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialLinksValues = {
    trials_pl_1: '',
    trials_pl_2: '',
    trials_pl_3: '',
    trials_pl_4: '',
    trials_pl_5: '',
    replace: true,
  };

  const linksSchema = yup.object().shape({
    trials_pl_1: yup.string().optional(),
    trials_pl_2: yup.string().optional(),
    trials_pl_3: yup.string().optional(),
    trials_pl_4: yup.string().optional(),
    trials_pl_5: yup.string().optional(),
    replace: yup.bool().required(),
  });

  const handleLinksSubmit = async (values, { resetForm }) => {
    setIsLoading(isLoading => (isLoading = true));
    const trials_pllinks = { trials_pl: { links: {} } };
    for (const [key, value] of Object.entries(values)) {
      if (value && key !== 'replace') {
        trials_pllinks.trials_pl.links[key] = value;
      } else {
        trials_pllinks.trials_pl.replace = value;
      }
    }
    try {
      const response = await axios.patch('/kahoots', trials_pllinks);
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
                name="trials_pl_1"
                placeholder="Перший кахут для пробних вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_pl_2"
                placeholder="Другий кахут для пробних вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_pl_3"
                placeholder="Третій кахут для пробних вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_pl_4"
                placeholder="Четвертий кахут для пробних вебінарів з польської"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="trials_pl_5"
                placeholder="П'ятий кахут для пробних вебінарів з польської"
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
