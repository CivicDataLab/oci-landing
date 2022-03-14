import React, { useEffect, useRef } from 'react';
import { tabbedInterface } from 'utils/index';
import styled from 'styled-components';

const Insights = ({ insightList }) => {
  const insightRef = useRef(null);
  useEffect(() => {
    // create tabbed interface for schemes
    const tablist = insightRef.current.querySelector('#schemeSelector');
    const panels = insightRef.current.querySelectorAll('[role="tabpanel"]');
    if (tablist) tabbedInterface(tablist, panels);
  }, []);

  return (
    <Wrapper ref={insightRef}>
      <h2 className="sr-only">Schemes Insight</h2>
      <InsightSelector id="schemeSelector" role="tablist">
        {insightList.map((scheme: any, index: number) => (
          <li role="presentation" key={`schemeSelector-${index}`}>
            <a
              role="tab"
              tabIndex={-1}
              href={`#scheme-${scheme.selector}`}
              data-id={`scheme-${scheme.selector}`}
              id={`schemeNews${index}`}
            >
              {scheme.selector}
            </a>
          </li>
        ))}
      </InsightSelector>
      <InsightContent>
        {insightList.map((scheme: any, index: number) => (
          <section
            key={`scheme-news-${index}`}
            id={`scheme-${scheme.selector}`}
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby={`schemeNews${index}`}
          >
            <div>
              <h3>{scheme.header}</h3>
              <p>{scheme.desc}</p>
              <div>
                <a className="btn-primary-invert" href={scheme.link}>
                  Explore Scheme
                </a>
              </div>
            </div>
          </section>
        ))}
      </InsightContent>
    </Wrapper>
  );
};

export default Insights;

const Wrapper = styled.section`
  background-color: var(--color-background-lighter);
  padding-top: 4.5rem;
  padding-bottom: 15rem;

  display: flex;
  flex-wrap: wrap;

  section {
    display: flex;
    max-width: 65rem;
    height: 100%;

    > div {
      display: grid;
      gap: 1rem;

      > div {
        border-top: 1px solid rgba(255, 255, 255, 0.16);
        width: 100%;
        align-self: flex-end;
        padding-top: 2rem;
      }
    }
  }

  img {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    mix-blend-mode: multiply;
    height: 100%;
    width: 40%;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    img {
      display: none;
    }
  }
`;

const InsightSelector = styled.ul`
  flex-grow: 1;
  text-align: right;
  flex-basis: 20%;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;

  li {
    margin-top: 2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  a {
    font-size: 1.25rem;
    text-decoration: none;
    color: var(--text-light-light);
    font-weight: 600;

    &[aria-selected='true'] {
      color: var(--color-primary);
      font-weight: 500;
      font-size: 2.5rem;
      font-weight: 900;
      display: flex;
      align-items: center;

      &:before {
        background-color: var(--color-primary);
      }
    }
  }
`;

const InsightContent = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 80%;
  background-color: var(--color-primary);
  background: url('/assets/images/insight-bg.jpg') no-repeat;
  background-size: cover;
  border-radius: 16px 0px 0px 16px;
  padding: 4.5rem 2rem 4.5rem 4.5rem;
  padding-left: clamp(2.5rem, 10%, 4.5rem);
  color: var(--text-dark-high);
  position: relative;
  min-height: 525px;

  h3 {
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 130%;
  }

  p {
    line-height: 156%;
    font-weight: 600;
    font-size: 18px;
  }

  a {
    background-color: var(--color-background-lighter);
    color: var(--text-light-high);
    font-weight: bold;
    line-height: 175%;
    padding: 12px 24px;

    &:hover {
      color: var(--text-light-medium);
    }
  }
`;
