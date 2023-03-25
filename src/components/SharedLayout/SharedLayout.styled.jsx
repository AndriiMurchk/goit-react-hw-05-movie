import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  padding: 14px 10px;
 
  
`;

export const Header = styled.header`
 
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
 
`;

export const Link = styled(NavLink)`
  padding: 20px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 16px;

  &:first-child {
    margin-right: 8px;
  }

  &:hover {
    color: #f31081;
  }

  &.active {
    color: #f31067;
  }
`;