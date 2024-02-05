import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { DismissIcon } from 'components/Stream/Kahoots/Kahoots.styled';
import { Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import {
  AdminCheckbox,
  AdminFormBtn,
  AdminInput,
  AdminPanelSection,
  LabelCheckBox,
  LinksForm,
  WarningBox,
  WarningBtn,
  WarningBtnBox,
  WarningDismissBtn,
  WarningText,
} from './KahootAdminPanel.styled';

export const A2KidsKahootForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

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
    const emptyValues = Object.values(values)
      .filter(value => typeof value === 'string')
      .every(value => !value === true);

    !confirmation &&
      emptyValues &&
      toast(
        t => (
          <WarningBox>
            <WarningDismissBtn onClick={() => toast.dismiss(t.id)}>
              <DismissIcon />
            </WarningDismissBtn>
            <WarningText>
              Краще не відправляти пусту форму, бо так затруться ВСІ лінки. Якщо
              так і треба, клацай "Затерти лінки" і відправ форму знов.
            </WarningText>
            <WarningBtnBox>
              <WarningBtn
                className="delete"
                onClick={() => {
                  setConfirmation(confirmation => (confirmation = true));
                  toast.dismiss(t.id);
                }}
              >
                Затерти все
              </WarningBtn>
              <WarningBtn
                className="cancel"
                onClick={() => toast.dismiss(t.id)}
              >
                Додати лінки
              </WarningBtn>
            </WarningBtnBox>
          </WarningBox>
        ),
        { duration: Infinity }
      );

    if (!emptyValues || confirmation) {
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
        alert('Лінки замінилися, молодець');
      } catch (error) {
        console.error(error);
        alert('Щось не прокнуло');
      } finally {
        setIsLoading(isLoading => (isLoading = false));
        setConfirmation(confirmation => (confirmation = false));
      }
    }
    setIsLoading(isLoading => (isLoading = false));
    return;
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
                autocomplete="off"
                placeholder="Перший кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_2"
                autocomplete="off"
                placeholder="Другий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_3"
                autocomplete="off"
                placeholder="Третій кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_4"
                autocomplete="off"
                placeholder="Четвертий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_5"
                autocomplete="off"
                placeholder="П'ятий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_6"
                autocomplete="off"
                placeholder="Шостий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_7"
                autocomplete="off"
                placeholder="Сьомий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_8"
                autocomplete="off"
                placeholder="Восьмий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_9"
                autocomplete="off"
                placeholder="Дев'ятий кахут для дітей рівня А2"
              />
            </Label>
            <Label>
              <AdminInput
                type="text"
                name="a2kids_10"
                autocomplete="off"
                placeholder="Десятий кахут для дітей рівня А2"
              />
            </Label>
            <LabelCheckBox>
              <AdminCheckbox type="checkbox" name="replace" />
              Якщо не зняти галочку, всі лінки перезапишуться повністю. <br />{' '}
              Якщо її зняти, можна виправити конкретний лінк, не зачіпаючи інші.
              Наприклад, якщо треба виправити тільки один Кахут, наприклад, №3 -
              внось його лінк у відповідне поле (третє) і знімай галочку.
            </LabelCheckBox>
            <AdminFormBtn type="submit">Замінити лінки</AdminFormBtn>
          </LinksForm>
        </Formik>
        {isLoading && <Loader />}
      </AdminPanelSection>
    </>
  );
};
