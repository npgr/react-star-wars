import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  border: solid 1px white;
  background-color: black;
  padding: 0.4rem 1.5rem;
  :hover {
    cursor: pointer;
    background-color: #222;
  }
  :disabled {
    background-color: #222;
    border: none;
    cursor: inherit;
    color: gray;
  }
`;
