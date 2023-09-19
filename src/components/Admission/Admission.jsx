import {
  AdmissionDescription,
  AdmissionSection,
  AdmissionSubTitle,
  AdmissionTitle,
  AdmissionWrapper,
  AdmissionBackground,
} from './Admission.styled';
import { AdmissionMarquee } from './AdmissionMarquee/AdmissionMarquee';
import { ScrollableMenu } from './AdmissionMarquee/AdmissionScrollingMenu';

export const Admission = () => {
  return (
    <AdmissionBackground>
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
        <ScrollableMenu/>
      </AdmissionSection>
    </AdmissionBackground>
  );
};
