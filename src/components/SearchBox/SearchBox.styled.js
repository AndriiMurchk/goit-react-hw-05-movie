import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  padding: 14px 10px ;
  
`;

export const Form = styled.form`
position: relative;
width: 400px;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 30px;
  padding: 4px;
  border-radius: 4px;
  font-size: 16px;
  outline-color: gray;

  &:focus,
  &:active {
    outline-color: #5a97f1;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 8px;
  box-sizing: border-box;
  width: 100px;
  height: 30px;

  

  &:focus,
  &:hover {
   
    
  }
`;