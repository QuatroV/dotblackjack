import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: ${(props) => (props.isMobile ? "10px" : "5px")};
  margin: 5px;
  padding: 15px 32px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  -webkit-box-shadow: 0px 7px 38px -6px rgba(34, 60, 80, 0.57);
  -moz-box-shadow: 0px 7px 38px -6px rgba(34, 60, 80, 0.57);
  box-shadow: 0px 7px 38px -6px rgba(34, 60, 80, 0.57);
  ${(props) => (props.isMobile ? "width: 100%" : "max-width:190px;")};
  ${(props) => props.isMobile && "font-size:50px; padding: 40px;"};
  :active {
    -webkit-box-shadow: 0px 5px 38px -6px rgba(34, 60, 80, 0.74) inset;
    -moz-box-shadow: 0px 5px 38px -6px rgba(34, 60, 80, 0.74) inset;
    box-shadow: 0px 5px 38px -6px rgba(34, 60, 80, 0.74) inset;
  }
`;

export default Button;
