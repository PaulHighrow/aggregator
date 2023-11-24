import {
  NotFoundLink,
  NotFoundLinkTitle,
  NotFoundLinkWrapper,
  NotFoundLinks,
  NotFoundSection,
  NotFoundTitle,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundSection id="hero">
      <NotFoundTitle>Такої сторінки в нас нема!</NotFoundTitle>
      <NotFoundLinkWrapper>
        <NotFoundLinkTitle>Але є інші!</NotFoundLinkTitle>
        <NotFoundLinks>
          <NotFoundLink to="/">Головна</NotFoundLink>
          <NotFoundLink to="/streams">Трансляції</NotFoundLink>
          {/* <NotFoundLink to="/english">Курси англійської мови</NotFoundLink>
          <NotFoundLink to="/polski">Курси польської мови</NotFoundLink>
          <NotFoundLink to="/deutsch">Курси німецької мови</NotFoundLink>
          <NotFoundLink to="/education">Навчальний центр</NotFoundLink>
          <NotFoundLink to="/examination">Екзаменаційний центр</NotFoundLink>
          <NotFoundLink to="/translation">Перекладацьке бюро</NotFoundLink> */}
        </NotFoundLinks>
      </NotFoundLinkWrapper>
    </NotFoundSection>
  );
};

export default NotFound;
