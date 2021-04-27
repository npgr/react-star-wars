import styled from 'styled-components';

export const Title = styled.h3`
  margin-top: -1rem;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 0.3rem;
  .id {
    min-width: 1.5rem;
  }
  .name {
    margin: 0 0.5rem;
    min-width: 10rem;
  }
  .gender {
    min-width: 5rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  margin-top: 1rem;
  div {
    margin: 0 1rem;
  }
  button {
    min-width: 6rem;
  }
`;
