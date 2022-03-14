import React from 'react';
import { Latest, News, Header, Branding } from 'components/home';
import { Seo } from 'components/shared';

import * as data from 'data/home';

const Home: React.FC = () => {
  return (
    <>
      <Seo />
      <main className="home">
        <Header data={data.didYouKnow} />

        <div className="container">
          <Branding />
          <Latest />
          <News />
        </div>
      </main>
    </>
  );
};

export default Home;
