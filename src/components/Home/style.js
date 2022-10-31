import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #328287;
    height: 160px;
    
`

export const LinkHome = styled(Link)`

    width: 100%;
    text-decoration: none;
    :hover {
    transition: all 0.3s;
    transform: scale(1.1);
  }
    
`;

export const Title = styled.h1 `
    font-family: 'Rampart One', cursive;
    color: #000;
    text-align: center;
    font-size: 50px;
`;