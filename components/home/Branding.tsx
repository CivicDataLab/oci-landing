import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BrandingImg from '/public/assets/images/branding.png';

const Branding = ({ data }) => {
  return (
    <Wrapper>
      <h2 className="sr-only">What we do</h2>
      <Sidebar>
        <Image src={BrandingImg} placeholder="blur" />
      </Sidebar>
      <NotSidebar>
        {data.map((item, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
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

  p:not(:first-child) {
    margin-top: 20px;
  }
`;
