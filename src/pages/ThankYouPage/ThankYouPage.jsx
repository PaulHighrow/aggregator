import {
    HeaderNew,
    HeaderWrapper,
    LogoNew,
    LogoRoute,
} from 'components/Menu/Menu.styled';
import {
    ButtonBox,
    LinkBtn,
    MainLinkBtn,
    ThankYouDesc,
    ThankYouHeading,
    ThankYouSection,
    ThankYouTextWrapper,
} from './ThankYouPage.styled';

export const ThankYouPage = () => {
  return (
    <>
      <HeaderNew id="header">
        <HeaderWrapper>
          <LogoRoute to="/">
            <LogoNew />
          </LogoRoute>
        </HeaderWrapper>
      </HeaderNew>
      <ThankYouSection>
        <ThankYouTextWrapper>
          <ThankYouHeading> Дякуємо, що заповнили форму!</ThankYouHeading>
          <ThankYouDesc>
            Ви можете повернутися на головну, а також переглянути наші інші
            напрямки роботи!
          </ThankYouDesc>

          <ButtonBox>
            <MainLinkBtn>Головна</MainLinkBtn>
            <LinkBtn>AP SCHOOL</LinkBtn>
            <LinkBtn>AP UNIVERSITY</LinkBtn>
          </ButtonBox>
        </ThankYouTextWrapper>
      </ThankYouSection>
    </>
  );
};
