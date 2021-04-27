import styled from 'styled-components';

export const FooterBar = styled.div`
  position: fixed;
  flex-direction: row;
  left: 0;
  bottom: 0;
  background-color: #212121;
  opacity: 0.92;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
  div {
    text-align: center;
  }
`;
