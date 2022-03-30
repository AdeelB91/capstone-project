import styled from "styled-components";

export default function Header() {
  return (
    <AppHeader>
      <AppTitle>App-Title</AppTitle>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background-color: #0b2b40;
  height: 100px;
  display: flex;
  align-items: center;
`;

const AppTitle = styled.h1`
  color: white;
`;
