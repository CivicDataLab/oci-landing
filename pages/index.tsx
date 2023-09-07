import React from 'react';
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

  const storiesFetch = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/civicdatalab/tagged/open-contracting'
  ).then((res) => res.json());

  const stories =
    storiesFetch.status === 'ok'
      ? storiesFetch.items.map((item) => ({
          title: item.title,
          creator: item.author,
          link: item.link,
          banner: getMediumBanner(item['content']),
        }))
      : [];

  const selectedList = shuffle(data.didYouKnow);
  const slicedList = selectedList.slice(0, 3);

  return {
    props: {
      stories,
      slicedList,
    },
  };
};
export default Home;
