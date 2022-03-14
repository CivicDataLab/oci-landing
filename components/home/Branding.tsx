import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BrandingImg from '/public/assets/images/branding.png'

const Branding = () => {
  return (
    <Wrapper>
      <Sidebar>
        <Image src={BrandingImg} placeholder="blur" />
      </Sidebar>
      <NotSidebar>
        <p>
          Open Contracting India is an initiative by CivicDataLab in
          partnership with Open Contracting Partnership which aims at making
          public procurements processed in India more efficient, accessible and
          participatory. <br /> <br /> We do this by onboarding governments to international
          data standards for curating and releasing data, developing platforms
          to analyse their data for better decisions, creating case studying
          and resource material to understand the gaps and benefits of actions.
        </p>
      </NotSidebar>
    </Wrapper>
  );
};

export default Branding;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;
  margin-top: -136px;
  padding: 72px;
  border-radius: 16px;
  background-color: var(--color-background-dark);

  @media (max-width: 720px) {
    padding: 32px;
  }
`;

const Sidebar = styled.div`
  flex-basis: 20rem;
  flex-grow: 1;
`;

const NotSidebar = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: 50%;
`;
