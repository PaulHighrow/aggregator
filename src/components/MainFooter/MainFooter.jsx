import { Box } from 'components/Box/Box.styled';
import { LeadBtn, LogoLink } from '../Menu/Menu.styled';
import {
  FacebookBtn,
  Footer,
  FooterBox,
  FooterLeftBox,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterNavLink,
  FooterSocials,
  IconBox,
  InstagramBtn,
  LeadDesc,
  LeadWrapper,
  LinkList,
  LinkListItem,
  LinkListTitle,
  TikTokBtn,
  YouTubeBtn
} from './MainFooter.styled';
import { Map } from './Map/Map';
import useSize from '@react-hook/size';

export const MainFooter = ({ toggleModal }) => {
  const footerServicesItems = [
    { to: 'edcenter', service: 'Навчальний центр' },
    { to: 'translations', service: 'Перекладацьке бюро' },
    { to: 'admissions', service: 'Вступ до ВНЗ' },
    { to: 'examcenter', service: 'Екзаменаційний центр' },
  ];
  const footerCoursesItems = [
    'Англійська мова',
    'Польська мова',
    'Німецька мова',
  ];
  const footerContactsItems = [
    { href: 'mailto:info@ap.education', contact: 'info@ap.education' },
    { href: 'tel:+380671047700', contact: '+380671047700' },
    {
      href: 'https://goo.gl/maps/AvneSaz3ikRAaKUD6',
      contact: 'м.Львів, вул.Братів Рогатинців, 18',
    },
  ];

  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const props =
    width < 768
      ? { spy: true, smooth: true, offset: -73 }
      : { spy: true, smooth: true };

  return (
    <Footer>
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
                {footerServicesItems.map((item, i) => (
                  <LinkListItem key={i}>
                    <FooterNavLink to={item.to} {...props}>
                      {item.service}
                    </FooterNavLink>
                  </LinkListItem>
                ))}
              </LinkList>
            </FooterListItem>
            <FooterListItem>
              <LinkListTitle>Курси</LinkListTitle>
              <LinkList>
                {footerCoursesItems.map((item, i) => (
                  <LinkListItem key={i}>
                    <FooterLink>{item}</FooterLink>
                  </LinkListItem>
                ))}
              </LinkList>
            </FooterListItem>
            <FooterListItem>
              <LinkListTitle id="contacts">Контакти</LinkListTitle>
              <LinkList>
                {footerContactsItems.map((item, i) => (
                  <LinkListItem key={i}>
                    <FooterLink href={item.href} target='_blank'>
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
