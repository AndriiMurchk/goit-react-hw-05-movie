import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  padding: 14px 10px;

`;

export const MovieCard = styled.div`
  height: 350px;
  display: flex;
  gap: 16px;
`;

export const Title = styled.h2`
    margin-bottom: 16px;
`

export const Overview = styled.div`
    margin-top: 20px;
`
export const Genres = styled.div`
    margin-top: 20px;
`

export const SecondaryTitle = styled.h3`
    margin-bottom: 8px;
`

export const AdditionalInfoCard = styled.div`
    padding-top: 20px;
`
export const List = styled.ul`

`

export const ListItem = styled.li`
  
  
`

export const Link = styled(NavLink)`
  font-size: 16px;

  display: block;



 
        
`