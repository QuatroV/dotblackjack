import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 3px;
  margin: 5px;
  padding: 15px 32px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  -webkit-box-shadow: 0px 7px 38px -6px rgba(34, 60, 80, 0.57);
  -moz-box-shadow: 0px 7px 38px -6px rgba(34, 60, 80, 0.57);
  box-shadow: 0px 7px 38px -6px rgba(34, 60, 80, 0.57);
  max-width: 190px;
  :active {
    background-color: darkGray;
  }
`;

export default Button;
