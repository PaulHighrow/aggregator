import {
  AdmissionDescription,
  AdmissionSection,
  AdmissionSubTitle,
  AdmissionTitle,
  AdmissionWrapper,
} from './Admission.styled';
import { AdmissionMarquee } from './AdmissionMarquee/AdmissionMarquee';

export const Admission = () => {
  return (
    <AdmissionSection id="admissions">
      <AdmissionWrapper>
        <AdmissionTitle>
          БЮРО <AdmissionSubTitle>КАР'ЄРИ</AdmissionSubTitle>
        </AdmissionTitle>
        <AdmissionDescription>
          Вступ в коледжі, університети України та інші країни Європи
        </AdmissionDescription>
      </AdmissionWrapper>
      <AdmissionMarquee />
    </AdmissionSection>
  );
};
