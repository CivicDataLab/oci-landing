import styled from 'styled-components';

const Latest = ({ data }) => {
  return (
    <Wrapper>
      <div>
        <h2 className="heading">Here are some of our recent works</h2>
      </div>
      <ul>
        {data.map((news, index) => (
          <li key={`latest-${index}`}>
            <a href={news.link}>
              <span>{`0${index + 1}`}</span>
              {news.text}
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Latest;

const Wrapper = styled.section`
  margin-top: 96px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  > div {
    flex-grow: 1;
    flex-basis: 25rem;

    h2 {
      position: sticky;
      top: 4px;
    }
  }

  ul {
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  a {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: transparent;
    line-height: 1.5;
    font-weight: 600;
    transition: text-decoration-color 0.3s ease, transform 0.3s ease;

    display: flex;
    align-items: center;

    &:hover {
      text-decoration-color: var(--color-primary);;
      transform: translateX(22px);

      span {
        background-color: var(--color-primary);
        color: var(--text-dark-high);
      }
    }
  }

  span {
    background-color: var(--color-background-lighter);
    padding: 1rem;
    font-weight: 700;
    margin-right: 1rem;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    line-height: 1.2;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
`;
