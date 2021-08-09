import styled from "styled-components";

const StyledWrapper = styled.div`
  font-family: "Quicksand", sans-serif;
  border-radius: ${(props) => (props.isMobile ? "10px" : "5px")};
  padding: ${(props) => (props.isMobile ? "36px" : "16px")};
  min-width: ${(props) => (props.isMobile ? "100%" : "700px")};
  background-color: WhiteSmoke;
  -webkit-box-shadow: 10px 7px 20px 3px rgba(34, 60, 80, 0.34);
  -moz-box-shadow: 10px 7px 20px 3px rgba(34, 60, 80, 0.34);
  box-shadow: 10px 7px 20px 3px rgba(34, 60, 80, 0.34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) => props.isMobile && "font-size: 60px"}
`;

export default StyledWrapper;
