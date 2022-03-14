import Image from 'next/image';
import styled from 'styled-components';

const Banner = ({ details }) => {
  return (
    <Wrapper style={{ backgroundColor: details.color }}>
      <BannerContent>
        <h2 className="heading">{details.heading}</h2>
        {details.content}
      </BannerContent>
      <figure>
        <Image src={details.image} width={184} height={184} alt="" />
      </figure>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  margin-top: 7rem;
  isolation: isolate;
  padding: 4rem 3rem;
  color: white;
  border-radius: 40px;
  position: relative;

  figure {
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;

    @media (max-width: 720px) {
      display: none;
    }
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    font-weight: 600;
  }
`;

const BannerContent = styled.div`
  width: clamp(250px, 100%, 700px);
  z-index: 10;

  h2 {
    line-height: 130%;
  }

  > a {
    margin-top: 14px;
  }
`;
