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
import { GetStaticProps } from 'next';

const parser = new Parser();

async function getStories() {
  const storiesFetch = await fetch(
    'https://api.allorigins.win/raw?url=https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/civicdatalab/tagged/open-contracting'
  ).then((res) => res.json());

  return { storiesFetch };

  // const stories = storiesFetch.items.map((item) => ({
  //   title: item.title,
  //   creator: item.creator,
  //   link: item.link,
  //   banner: getMediumBanner(item['content:encoded']),
  // }));

  // return {
  //   props: {
  //     stories: stories,
  //   },
  // };
}

const Home: React.FC<{ stories: any; slicedList: any }> = ({ slicedList }) => {
  const [stories, setStories] = React.useState([]);

  // React.useEffect(() => {
  //   const data = getStories().then((res) => res);
  //   console.log(data);

  //   // setStories(data);
  // }, []);

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
        <div className="container">{/* <Blogs data={stories} /> */}</div>
      </main>
    </>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const selectedList = shuffle(data.didYouKnow);
  const slicedList = selectedList.slice(0, 3);

  return {
    props: {
      slicedList,
    },
  };
};

export default Home;
