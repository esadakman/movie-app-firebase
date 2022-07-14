import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    font-family: 'Roboto', sans-serif; 
}
body{
    font-size: 1.5rem;
    ${({ theme }) => theme.colors.Bloggy1};


  }


`;
