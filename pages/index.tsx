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
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

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

  try {
    const response = await fetch(
      'https://medium.com/feed/civicdatalab/tagged/open-contracting'
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const xmlData = await response.text();
    const jsonData = await parseStringPromise(xmlData);

    const stories = jsonData.rss.channel[0].item.map((item) => ({
      title: item.title[0],
      creator: item['dc:creator'][0],
      link: item.link[0],
      banner: getMediumBanner(item['content:encoded'][0]),
    }));

    const selectedList = shuffle(data.didYouKnow);
    const slicedList = selectedList.slice(0, 3);

    return {
      props: {
        stories,
        slicedList,
      },
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      props: {
        stories: [],
        slicedList: [],
      },
    };
  }
};
export default Home;
