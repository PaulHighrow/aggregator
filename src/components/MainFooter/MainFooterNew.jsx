import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import {
  FacebookBtnNew,
  FooterBottomContainerNew,
  FooterBoxNew,
  FooterCopyrightNew,
  FooterFileLinkNew,
  FooterLeadBtnNew,
  FooterLeftBox,
  FooterLinkNew,
  FooterLinksContainerNew,
  FooterListItemNew,
  FooterListNew,
  FooterLogoLink,
  FooterLogoNew,
  FooterNavLinkNew,
  FooterNew,
  FooterTopContainer,
  InstagramBtnNew,
  LeadDescNew,
  LeadSocialWrapper,
  LeadWrapperNew,
  LinkList,
  LinkListItemNew,
  LinkListTitleNew,
  MonoPawIconWhite,
  SocialLogoLink,
  SocialsLinkWrapperNew,
  TikTokBtnNew,
  YouTubeBtnNew,
} from './MainFooter.styled';
import { Map } from './Map/Map';

export const MainFooterNew = ({ toggleModal }) => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);
  const footerProjectsItems = [
    { to: '/school', service: 'AP School' },
    { to: '/university', service: 'AP University' },
  ];
  const footerCoursesItems = [
    { to: '/', course: 'Англійська мова' },
    { to: '/polski', course: 'Польська мова' },
    { to: '/deutsch', course: 'Німецька мова' },
  ];
  const footerContactsItems = [
    { href: 'mailto:info@ap.education', contact: 'info@ap.education' },
    { href: 'tel:+380671047700', contact: '+38 (067) 104-77-00' },
    {
      href: 'https://goo.gl/maps/AvneSaz3ikRAaKUD6',
      contact: 'м.Львів, вул.Братів Рогатинців, 18',
    },
  ];

  return (
    <FooterNew>
      <Box>
        <FooterBoxNew>
          <FooterTopContainer>
            <FooterLeftBox>
              <FooterLogoLink to="/">
                <FooterLogoNew />
              </FooterLogoLink>
              <LeadWrapperNew>
                <LeadDescNew>... якщо залишились запитання </LeadDescNew>
                <FooterLeadBtnNew onClick={toggleModal}>
                  ЗАЛИШИТИ ЗАЯВКУ
                </FooterLeadBtnNew>
              </LeadWrapperNew>
            </FooterLeftBox>
            {width < 768 && (
              <SocialsLinkWrapperNew>
                <SocialLogoLink
                  href="https://www.youtube.com/channel/UC3XSGAVLhPXXlMN5-Gebtvw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeBtnNew />
                </SocialLogoLink>

                <SocialLogoLink
                  href="https://www.facebook.com/ap.edu.centre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookBtnNew />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.instagram.com/ap.education/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramBtnNew />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.tiktok.com/@ap_education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokBtnNew />
                </SocialLogoLink>
              </SocialsLinkWrapperNew>
            )}

            <LeadSocialWrapper>
              <FooterListNew>
                <FooterListItemNew>
                  <LinkListTitleNew>Проєкти</LinkListTitleNew>
                  <LinkList>
                    {footerProjectsItems.map((item, i) => (
                      <LinkListItemNew key={i}>
                        <FooterNavLinkNew to={item.to}>
                          {item.service}
                        </FooterNavLinkNew>
                      </LinkListItemNew>
                    ))}
                  </LinkList>
                </FooterListItemNew>
                <FooterListItemNew>
                  <LinkListTitleNew>Мовні Курси</LinkListTitleNew>
                  <LinkList>
                    {footerCoursesItems.map((item, i) => (
                      <LinkListItemNew key={i}>
                        <FooterNavLinkNew to={item.to}>
                          {item.course}
                        </FooterNavLinkNew>
                      </LinkListItemNew>
                    ))}
                  </LinkList>
                </FooterListItemNew>
                <FooterListItemNew>
                  <LinkListTitleNew id="contacts">Контакти</LinkListTitleNew>
                  <LinkList>
                    {footerContactsItems.map((item, i) => (
                      <LinkListItemNew key={i}>
                        <FooterLinkNew href={item.href} target="_blank">
                          {item.contact}
                        </FooterLinkNew>
                      </LinkListItemNew>
                    ))}
                  </LinkList>
                </FooterListItemNew>
              </FooterListNew>
              {width >= 768 && (
              <SocialsLinkWrapperNew>
                <SocialLogoLink
                  href="https://www.youtube.com/channel/UC3XSGAVLhPXXlMN5-Gebtvw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeBtnNew />
                </SocialLogoLink>

                <SocialLogoLink
                  href="https://www.facebook.com/ap.edu.centre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookBtnNew />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.instagram.com/ap.education/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramBtnNew />
                </SocialLogoLink>
                <SocialLogoLink
                  href="https://www.tiktok.com/@ap_education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokBtnNew />
                </SocialLogoLink>
              </SocialsLinkWrapperNew>
            )}
            </LeadSocialWrapper>
          </FooterTopContainer>
          <FooterBottomContainerNew>
            <FooterCopyrightNew>
              ©2024 AP Education Center. All rights reserved
            </FooterCopyrightNew>
            <FooterLinksContainerNew>
              <FooterFileLinkNew
                to={'https://ap.education/static/docs/privacy_policy.docx'}
              >
                Політика конфіденційності
              </FooterFileLinkNew>
              <FooterFileLinkNew
                to={'https://ap.education/static/docs/public_offer.docx'}
              >
                Публічна оферта
              </FooterFileLinkNew>
              {width >= 768 && <MonoPawIconWhite />}
            </FooterLinksContainerNew>
          </FooterBottomContainerNew>
          {width < 768 && <MonoPawIconWhite />}
        </FooterBoxNew>
      </Box>
      <Map />
    </FooterNew>
  );
};
