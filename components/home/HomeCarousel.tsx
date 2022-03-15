import React from 'react';
import { Carousel } from 'components/shared';
import { Wrapper } from 'components/shared/Carousel';
import styled from 'styled-components';
import { ArrowTail, OpenContract } from 'components/icons';

const HomeCarousel: React.FC = () => {
  return (
    <CarouselWrapper>
      <Carousel
        label="oci details"
        prevBtn={<ArrowTail />}
        nextBtn={<ArrowTail />}
      >
        <>
          <div>
            <OpenContract />
            <p>We are making public procurement data more accessible.</p>
          </div>
          <div>
            <OpenContract />
            <p>
              We enable and encourage data-driven reforms in the public
              procurement process to improve efficiency, value for money and
              competition.
            </p>
          </div>
        </>
      </Carousel>
    </CarouselWrapper>
  );
};

export default HomeCarousel;

const CarouselWrapper = styled.div`
  margin-top: 96px;
  padding-top: 64px;
  padding-bottom: 128px;
  background-color: var(--color-background-dark);
  min-height: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Wrapper} {
    .keen-slider {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;

      p {
        font-weight: 800;
        font-size: 1.75rem;
        line-height: 1.3;
        margin-top: 32px;
        color: var(--color-teal);
      }
    }

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08));
      border-radius: 50%;
      padding: 16px;
      line-height: 0;
      background-color: var(--color-primary);
      transition: background-color 0.3s ease;

      svg {
        width: 24px;
        height: 24px;
        fill: #eff2f2;
        transition: fill 0.3s ease;
      }

      &[aria-disabled='true'] {
        background-color: rgba(255, 255, 255, 0.63);
        svg {
          fill: #888f8f;
        }
      }
    }

    .carouselPrevBtn {
      left: 15px;
      svg {
        transform: rotate(180deg);
      }
    }

    .carouselNextBtn {
      right: 15px;
    }
  }

  @media (max-width: 768px) {
    ${Wrapper} {
      button {
        top: initial;
        transform: initial;
        bottom: -72px;
      }

      .carouselPrevBtn {
        left: 20%;
      }

      .carouselNextBtn {
        right: 20%;
      }
    }
  }
`;
