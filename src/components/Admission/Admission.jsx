import { AdmissionSection, AdmissionTitle } from './Admission.styled';
import { AdmissionMarquee } from './AdmissionMarquee/AdmissionMarquee';

export const Admission = () => {
  return (
    <AdmissionSection id="admissions">
      <AdmissionTitle>
        вступ в коледжі, університети України та інші країни європи
      </AdmissionTitle>
      <AdmissionMarquee />
    </AdmissionSection>
  );
};
