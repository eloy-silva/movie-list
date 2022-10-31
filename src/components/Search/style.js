import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    :hover {
      transition: all 0.3s;
      transform: scale(1.1);
    }
  }

  button {
    background-color: black;
    border: none;
    color: white;
    width: 30%;
    padding: 11px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
      transition: all 0.3s;
      transform: scale(1.1);
    }
  }
`;
