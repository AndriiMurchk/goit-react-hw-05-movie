import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  padding: 14px 10px;
  
`;

export const List = styled.ol`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: inside;
`

export const ListItem = styled.li`
  max-width: 1100px;
`

export const Link = styled(NavLink)`
  font-size: 16px;
  padding-left: 8px;

  border-radius: 5px;

  &:hover {
    color: #f31067;
  }
        
`