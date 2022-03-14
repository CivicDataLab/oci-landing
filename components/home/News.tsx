import { allNews } from 'data/placeholder';
import styled from 'styled-components';

const News = () => {
  return (
    <Wrapper>
      <h2 className="heading">Featured News &amp; Stories</h2>
      <p className="home__sub-head">
        Everything you need to analyse the data more efficiently
      </p>

      <NewsContainer>
        {allNews.map((item, index) => (
          <section key={`newsItem-${index}`}>
            <img
              src={`https://placekitten.com/270/16${index}`}
              alt=""
              width="270"
              height="160"
            />
            <small>{item.tag}</small>
            <h2>{item.heading}</h2>
            <footer>{item.publisher}</footer>
          </section>
        ))}
      </NewsContainer>
    </Wrapper>
  );
};

export default News;

const Wrapper = styled.section`
  margin-top: 5rem;
`;

const NewsContainer = styled.div`
  display: grid;
  gap: 3rem;
  justify-content: space-between;
  margin-top: 3rem;
  padding-bottom: 1rem;

  @supports (width: min(250px, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid $grey-3;
  }

  small {
    margin-top: 0.5rem;
    display: block;
    font-weight: bold;
    color: $text-light-light;
  }

  h2 {
    font-weight: 800;
    border-bottom: 1px solid $text-light-light;
    padding-bottom: 1rem;
    line-height: 1.5;
    margin-top: 0.3rem;
    font-size: 1.25rem;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 156%;
    margin-top: 0.6rem;
  }

  footer {
    margin-top: 1rem;
    display: block;
    font-weight: 600;
    color: $text-light-medium;
    font-size: 12px;
  }
`;
