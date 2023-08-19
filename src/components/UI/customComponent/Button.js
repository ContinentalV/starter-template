import styled from "styled-components";

const ButtonCustom =styled.button`
 width: 200px;
  height: 50px;
  border: 1px solid ${props => props.theme.secondaryColors};
  border-radius: 5px;
 background: transparent;
  color: ${props => props.theme.secondaryColors};
  font-family: ${props => props.theme.secondFont};
  font-weight: bold;
 
  &:hover{
    cursor: pointer;
    color: ${props => props.theme.primaryColors};
    background:  ${props => props.theme.backgroundColor};

  }
`;

export default ButtonCustom