import { Box } from 'components/Box/Box.styled';
import { LeadBtn, LogoLink } from '../Menu/Menu.styled';
import {
  FacebookBtn,
  Footer,
  FooterBox,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterSocials,
  InstagramBtn,
  LeadDesc,
  LeadWrapper,
  LinkList,
  LinkListItem,
  LinkListTitle,
  MapContainer,
  TikTokBtn,
  YouTubeBtn,
} from './MainFooter.styled';
import GoogleMapReact from 'google-map-react';

export const MainFooter = ({ toggleModal }) => {
  const defaultProps = {
    center: {
      lat: 49.84037940597361,
      lng: 24.03317568650616,
    },
    zoom: 16,
  };

  return (
    <Footer id="contacts">
      <Box>
        <FooterBox>
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
          <LeadWrapper>
            <LeadDesc>... якщо залишились запитання </LeadDesc>
            <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
          </LeadWrapper>
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
                <LinkListItem>info@mysite.com</LinkListItem>
                <LinkListItem>+38067543324</LinkListItem>
                <LinkListItem>м.Львів, вул.Коперника, 20</LinkListItem>
              </LinkList>
            </FooterListItem>
          </FooterList>
        </FooterBox>
      </Box>
      <div style={{ height: '235px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCz23fuo0leBt_zjKD47eB0ZebIRwSy5t8' }}
          center={{ lat: 49.84037940597361, lng: 24.03317568650616 }}
          zoom={16}
        >
          <MapContainer
            lat={49.84037940597361}
            lng={24.03317568650616}
            text="AP Education Center"
          />
        </GoogleMapReact>
      </div>
    </Footer>
  );
};
