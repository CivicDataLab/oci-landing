import styled from 'styled-components';

const Blogs = ({ data }) => {
  return (
    <Wrapper>
      <h2 className="heading">Featured Stories</h2>

      <NewsContainer>
        {data.map((item, index) => (
          <a href={item.link} key={`blogItem-${index}`}>
            <img src={item.banner} alt="" width="270" height="160" />
            <small>{item.creator}</small>
            <h2>{item.title}</h2>
          </a>
        ))}
      </NewsContainer>
    </Wrapper>
  );
};

export default Blogs;

const Wrapper = styled.section`
  margin-top: 5rem;
`;

const NewsContainer = styled.div`
  display: grid;
  gap: 3rem;
  justify-content: space-between;
  margin-top: 48px;
  padding-bottom: 1rem;

  @supports (width: min(250px, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  }

  a {
    text-decoration-color: transparent;
    transition: text-decoration-color 0.3s ease;

    &:hover {
      text-decoration-color: currentColor;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: var(--border-2);
  }

  small {
    margin-top: 0.5rem;
    display: block;
    font-weight: bold;
    color: var(--text-light-medium);
  }

  h2 {
    font-weight: 800;
    line-height: 1.5;
    margin-top: 0.3rem;
    font-size: 1.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
