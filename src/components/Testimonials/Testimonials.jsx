import {
  AboutLeadBtn,
  SectionTitle,
  Sketch,
} from 'components/About/About.styled';
import { Box } from 'components/Box/Box.styled';
import { useInView } from 'react-intersection-observer';
import {
  StyledMarquee,
  // TestimonialImg,
  TestimonialLink,
  TestimonialSection,
  // Written,
} from './Testimonials.styled';

// import { tstmImgsIndex } from 'img/testimonials/testimonialsImgs';
// const { tstmMarq1png, tstmMarq2png, tstmMarq3png, tstmMarq4png, tstmMarq5png } =
//   tstmImgsIndex;

export const Testimonials = ({ toggleModal }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <TestimonialSection id="testimonials">
      <Box>
        <SectionTitle ref={ref}>
          Відгуки
          {inView && <Sketch />}
        </SectionTitle>
        <StyledMarquee pauseOnHover={true} style={{ overflow: 'hidden' }}>
          {/* <TestimonialImg
            src={`${tstmMarq1png}`}
            alt="Testimonial placeholder"
          /> */}
          <TestimonialLink href="https://youtu.be/dQw4w9WgXcQ">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              <video
                src="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395875/website/mini%20cards/v2/Animation_nk2ydp.mp4"
                type="video/mp4"
                width={'500px'}
                style={{ display: 'block' }}
                autoPlay={true}
                loop={true}
                muted={true}
                data-loaded={true}
              ></video>
            </div>
          </TestimonialLink>
          <TestimonialLink href="https://youtu.be/dQw4w9WgXcQ">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              <video
                src="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395866/website/mini%20cards/v2/Animation_fzjx2c.mp4"
                type="video/mp4"
                width={'500px'}
                style={{ display: 'block' }}
                autoPlay={true}
                loop={true}
                muted={true}
                data-loaded={true}
              ></video>
            </div>
          </TestimonialLink>
          <TestimonialLink href="https://youtu.be/dQw4w9WgXcQ">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              <video
                src="https://res.cloudinary.com/superlist/video/upload/c_scale,q_auto:good,w_700/v1653395869/website/mini%20cards/v2/Animation_rel1jl.mp4"
                type="video/mp4"
                width={'500px'}
                style={{ display: 'block' }}
                autoPlay={true}
                loop={true}
                muted={true}
                data-loaded={true}
              ></video>
            </div>
          </TestimonialLink>
          <TestimonialLink href="https://youtu.be/dQw4w9WgXcQ">
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                marginRight: '20px',
              }}
            >
              <video
                src="https://res.cloudinary.com/superlist/video/upload/v1684536003/website/mini%20cards/v2/Repeat_tkjecn.mp4"
                type="video/mp4"
                width={'500px'}
                style={{ display: 'block' }}
                autoPlay={true}
                loop={true}
                muted={true}
                data-loaded={true}
              ></video>
            </div>
          </TestimonialLink>

          {/* <TestimonialImg
            src={`${tstmMarq2png}`}
            alt="Testimonial placeholder"
          />
          <TestimonialImg
            src={`${tstmMarq3png}`}
            alt="Testimonial placeholder"
          /> */}

          {/* <TestimonialImg
            src={`${tstmMarq4png}`}
            alt="Testimonial placeholder"
          />
          <TestimonialImg
            src={`${tstmMarq5png}`}
            alt="Testimonial placeholder"
          /> */}
        </StyledMarquee>
        <AboutLeadBtn onClick={toggleModal}>Надіслати заявку</AboutLeadBtn>
        {/* <Written /> */}
      </Box>
    </TestimonialSection>
  );
};
