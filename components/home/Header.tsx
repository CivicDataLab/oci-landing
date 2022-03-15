import React from 'react';
import styled from 'styled-components';

const Header = ({ data }) => {

  return (
    <Wrapper>
      <div className="container">
        <h2>Did you know?</h2>
        <ul>
          {data.map((item, index) => (
            <li key={`homeHeader-${index}`}>
              <span></span> {item.content}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  padding: 104px 0 252px;
  background: url('/assets/images/pattern-bg.png') repeat-x;
  background-position: center;
  background-color: var(--color-background-light);

  .container {
    max-width: 800px;
  }

  h2 {
    color: var(--color-primary);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 800;
    line-height: 1.3;
    font-size: 1.75rem;
  }

  li {
    margin-top: 1.5rem;
    line-height: 1.7;
    font-weight: 500;
    display: flex;

    span {
      background-color: var(--color-primary);
      border-radius: 4px;
      height: 100%;
      width: 4px;
      display: inline-block;
      margin-right: 1rem;
      margin-top: 0.5rem;

      &:empty:before {
        content: "\\00a0";
      }
    }
  }
`;
