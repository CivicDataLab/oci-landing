import React from 'react';
import Parser from 'rss-parser';
import { Latest, Blogs, Header, Branding, HomeCarousel } from 'components/home';
import { Seo } from 'components/shared';
import { getMediumBanner } from 'utils';

import * as data from 'data/home';
import { GetStaticProps } from 'next';

const parser = new Parser();

const Home: React.FC<{ stories: any }> = ({ stories }) => {
  return (
    <>
      <Seo />
      <main className="home">
        <Header data={data.didYouKnow} />

        <div className="container">
          <Branding data={data.branding} />
          <Latest data={data.latest} />
        </div>

        <HomeCarousel />
        <div className="container">
          <Blogs data={stories} />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const data = await parser.parseURL(
    'https://medium.com/feed/civicdatalab/tagged/open-contracting'
  );

  const stories = data.items.map((item) => ({
    title: item.title,
    creator: item.creator,
    link: item.link,
    banner: getMediumBanner(item['content:encoded']),
  }));

  return {
    props: {
      stories: stories,
    },
  };
};

export default Home;
