import { Box } from 'components/Box/Box.styled';
import { LeadBtn, LogoLink } from '../Menu/Menu.styled';
import {
  FacebookBtn,
  Footer,
  FooterBox,
  FooterLeftBox,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterSocials,
  IconBox,
  InstagramBtn,
  LeadDesc,
  LeadWrapper,
  LinkList,
  LinkListItem,
  LinkListTitle,
  TikTokBtn,
  YouTubeBtn,
} from './MainFooter.styled';
import { Map } from './Map/Map';

export const MainFooter = ({ toggleModal }) => {
  return (
    <Footer id="contacts">
      <Box>
        <FooterBox>
          <FooterLeftBox>
            <IconBox>
              <LogoLink href="https://www.ap-education.com.ua/">
                <FooterLogo />
              </LogoLink>
              <FooterSocials>
                <LogoLink
                  href="https://www.instagram.com/ap.education/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramBtn />
                </LogoLink>
                <LogoLink
                  href="https://www.facebook.com/ap.edu.centre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookBtn />
                </LogoLink>
                <LogoLink
                  href="https://www.tiktok.com/@ap_education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokBtn />
                </LogoLink>
                <LogoLink
                  href="https://www.youtube.com/channel/UC3XSGAVLhPXXlMN5-Gebtvw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeBtn />
                </LogoLink>
              </FooterSocials>
            </IconBox>
            <LeadWrapper>
              <LeadDesc>... якщо залишились запитання </LeadDesc>
              <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
            </LeadWrapper>
          </FooterLeftBox>
          <FooterList>
            <FooterListItem>
              <LinkListTitle>Наші послуги</LinkListTitle>
              <LinkList>
                <LinkListItem>Навчальний центр</LinkListItem>
                <LinkListItem>Перекладацьке бюро</LinkListItem>
                <LinkListItem>Вступ до ВНЗ</LinkListItem>
                <LinkListItem>Екзаменаційний центр</LinkListItem>
              </LinkList>
            </FooterListItem>
            <FooterListItem>
              <LinkListTitle>Курси</LinkListTitle>
              <LinkList>
                <LinkListItem>Англійська мова</LinkListItem>
                <LinkListItem>Польська мова</LinkListItem>
                <LinkListItem>Німецька мова</LinkListItem>
              </LinkList>
            </FooterListItem>
            <FooterListItem>
              <LinkListTitle>Контакти</LinkListTitle>
              <LinkList>
                <LinkListItem>info@ap.education</LinkListItem>
                <LinkListItem>+380671047700</LinkListItem>
                <LinkListItem>м.Львів, вул.Братів Рогатинців, 18</LinkListItem>
              </LinkList>
            </FooterListItem>
          </FooterList>
        </FooterBox>
      </Box>
      <Map />
    </Footer>
  );
};
