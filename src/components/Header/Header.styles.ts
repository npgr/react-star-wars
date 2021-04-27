import styled from 'styled-components';

export const HeaderBar = styled.div`
  position: sticky;
  background-color: black;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px white;
  padding: 1rem;
`;

export const LogoImage = styled.img`
  width: 12rem;
  height: auto;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;

export const LinkGroup = styled.div`
  flex-direction: column;
`;

export const Filter = styled.input`
  width: 12rem;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 0.5rem;
`;
