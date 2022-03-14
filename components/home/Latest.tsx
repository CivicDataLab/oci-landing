import styled from 'styled-components';

const latest = [
  {
    name: 'Approved cost for the eCourts Phase II Schemes in 2015 was Rs. 1670 crores for 4 years, of which approximately 70% has been utilized so far.',
    link: '#',
  },
  {
    name: 'In 2021, a new scheme - SAMBAL - was introduced under the Ministry of Women and Child Development by combining the budgets for 7 other schemes, including One Stop Center and Mahila Police Volunteers.',
    link: '#',
  },
  {
    name: 'Expenditure on nation-wide elections, on average, formed  x% of total expenditure of law and justice ministry between 2015-16 and 2019-20.',
    link: '#',
  },
];

const Latest = () => {
  return (
    <Wrapper>
      <div>
        <h2 className="heading">Do You Know?</h2>
        <p className="home__sub-head">
          Everything you need to analyse the data more efficiently
        </p>
      </div>
      <ul>
        {latest.map((news, index) => (
          <li key={`latest-${index}`}>
            <span>{`0${index + 1}`}</span>
            <a href={news.link}>{news.name}</a>
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

    p {
      line-height: 1.5;
    }
  }

  ul {
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateX(22px);

      span {
        background-color: var(--color-primary);
        color: var(--text-dark-high);
      }
    }
  }

  a {
    text-decoration: underline;
    text-decoration-color: transparent;

    display: block;
    line-height: 1.5;
    font-weight: 600;
    transition: text-decoration-color 0.3s ease;

    &:hover {
      text-decoration-color: currentColor;
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

    text-decoration: none;
    display: inline-block;
  }
`;
