import styled from "styled-components";

const MainTitle = styled.h1`
  ${(props) => props.isMobile && "font-size: 100px"}
  font-family: "Roboto Mono", monospace;
`;

export default MainTitle;
