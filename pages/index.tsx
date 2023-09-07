import React from 'react';
import Parser from 'rss-parser';
import {
  Latest,
  Blogs,
  Header,
  Branding,
  HomeCarousel,
} from 'components/home';
import { Seo } from 'components/shared';
import { getMediumBanner, shuffle } from 'utils';

import * as data from 'data/home';

const parser = new Parser();

const Home: React.FC<{ stories: any; slicedList: any }> = ({
  stories,
  slicedList,
}) => {
  return (
    <>
      <Seo />
      <main className="home">
        <Header data={slicedList} />

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

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=59'
  );

  const storiesFetch = await parser.parseURL(
    'https://medium.com/feed/civicdatalab/tagged/open-contracting'
  );

  const stories = storiesFetch
    ? storiesFetch.items.map((item) => ({
        title: item.title,
        creator: item.creator,
        link: item.link,
        banner: getMediumBanner(item['content:encoded']),
      }))
    : [];

  const selectedList = shuffle(data.didYouKnow);
  const slicedList = selectedList.slice(0, 3);

  return {
    props: {
      stories: stories,
      slicedList,
    },
  };
};
export default Home;
