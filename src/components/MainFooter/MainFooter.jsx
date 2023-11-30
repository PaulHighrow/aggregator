import { Box } from 'components/Box/Box.styled';
import { LeadBtn } from '../Menu/Menu.styled';
import {
  FacebookBtn,
  Footer,
  FooterBox,
  FooterLeftBox,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterLogoLink,
  FooterNavLink,
  FooterSocials,
  IconBox,
  InstagramBtn,
  LeadDesc,
  LeadWrapper,
  LinkList,
  LinkListItem,
  LinkListTitle,
  MonoPawIcon,
  SocialLogoLink,
  TikTokBtn,
  YouTubeBtn,
} from './MainFooter.styled';
import { Map } from './Map/Map';

export const MainFooter = ({ toggleModal }) => {
  // const footerServicesItems = [
  //   { to: '/education', service: 'Навчальний центр' },
  //   { to: '/examination', service: 'Екзаменаційний центр' },
  //   { to: '/translation', service: 'Перекладацьке бюро' },
  //   // { to: 'admission', service: 'Вступ до ВНЗ' },
  // ];
  const footerCoursesItems = [
    { to: '/english', course: 'Англійська мова' },
    { to: '/polski', course: 'Польська мова' },
    { to: '/deutsch', course: 'Німецька мова' },
  ];
  const footerContactsItems = [
    { href: 'mailto:info@ap.education', contact: 'info@ap.education' },
    { href: 'tel:+380671047700', contact: '+380671047700' },
    {
      href: 'https://goo.gl/maps/AvneSaz3ikRAaKUD6',
      contact: 'м.Львів, вул.Братів Рогатинців, 18',
    },
  ];

  return (
    <Footer>
      <Box>
        <FooterBox>
          <FooterLeftBox>
            <IconBox>
              <FooterLogoLink to="/">
                <FooterLogo />
              </FooterLogoLink>
              <FooterSocials>
                <SocialLogoLink
                  href="https://www.instagram.com/ap.education/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramBtn />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.facebook.com/ap.edu.centre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookBtn />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.tiktok.com/@ap_education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokBtn />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.youtube.com/channel/UC3XSGAVLhPXXlMN5-Gebtvw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeBtn />
                </SocialLogoLink>
              </FooterSocials>
            </IconBox>
            <LeadWrapper>
              <LeadDesc>... якщо залишились запитання </LeadDesc>
              <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
              <MonoPawIcon/>
            </LeadWrapper>
          </FooterLeftBox>
          <FooterList>
            {/* <FooterListItem>
              <LinkListTitle>Наші послуги</LinkListTitle>
              <LinkList>
                {footerServicesItems.map((item, i) => (
                  <LinkListItem key={i}>
                    <FooterNavLink to={item.to}>
                      {item.service}
                    </FooterNavLink>
                  </LinkListItem>
                ))}
              </LinkList>
            </FooterListItem> */}
            <FooterListItem>
              <LinkListTitle>Курси</LinkListTitle>
              <LinkList>
                {footerCoursesItems.map((item, i) => (
                  <LinkListItem key={i}>
                    <FooterNavLink to={item.to}>{item.course}</FooterNavLink>
                  </LinkListItem>
                ))}
              </LinkList>
            </FooterListItem>
            <FooterListItem>
              <LinkListTitle id="contacts">Контакти</LinkListTitle>
              <LinkList>
                {footerContactsItems.map((item, i) => (
                  <LinkListItem key={i}>
                    <FooterLink href={item.href} target="_blank">
                      {item.contact}
                    </FooterLink>
                  </LinkListItem>
                ))}
              </LinkList>
            </FooterListItem>
          </FooterList>
        </FooterBox>
      </Box>
      <Map />
    </Footer>
  );
};
