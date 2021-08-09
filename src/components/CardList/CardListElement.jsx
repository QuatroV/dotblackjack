import styled from "styled-components";

const CardListElement = styled.li`
  display: block;
  ${(props) => (props.isMobile ? "float: left" : "float: left")}
  margin-right: 10px;
  width: ${(props) => (props.isMobile ? "100%" : "100px")};
  align-content: center;
`;

export default CardListElement;
