import { SectionTitle, Sketch } from 'components/About/About.styled';
import { Box } from 'components/Box/Box.styled';
import { useInView } from 'react-intersection-observer';
import { ServiceCard, ServiceText, ServiceTitle, ServicesList, ServicesSection } from './Services.styled';

export const Services = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <ServicesSection id="services">
      <Box>
        <SectionTitle ref={ref}>Послуги
          {inView && <Sketch/>}
        </SectionTitle>
        <ServicesList>
          <ServiceCard>
            <ServiceTitle>Абітурієнту</ServiceTitle>
            <ServiceText>Skillhub Education для абітурієнта – це глобальна освітня програма, що допомагає абітурієнтам визначитись з майбутньою професією відповідно до власних цілей, навичок та вподобань. Також, команда Skillhub Education підбере перспективний навчальний заклад та факультет відповідно до запитів абітурієнта.</ServiceText>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Студенту</ServiceTitle>
            <ServiceText>Skillhub Education – це платформа для студента, що дає можливість стати учасником оплачуваного стажування за кордоном, яке підбирається згідно вашої спеціальності. Також, студенти можуть брати участь в різних міжнародних програмах (ERASMUS, Horizon Europe і т.д.). Крім цього, надаємо інформацію щодо платної форми навчання, академ-відпустки чи зміни спеціальності під час навчання.</ServiceText>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Навчальним закладам</ServiceTitle>
            <ServiceText>Skillhub Education об'єднує навчальні заклади всього світу. Наші консультанти знаходяться у 75-ти країнах світу. Щороку до нас звертається близько 6 000 абітурієнтів</ServiceText>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Здобути новий Skill</ServiceTitle>
            <ServiceText>Skillhub Education – надає можливість вступити в навчальний заклад, поїхати на оплачуване стажування, отримати перспективну роботу та вразі потреби - пройти курси підвищення кваліфікації.</ServiceText>
          </ServiceCard>
        </ServicesList>
      </Box>
    </ServicesSection>
  );
};
