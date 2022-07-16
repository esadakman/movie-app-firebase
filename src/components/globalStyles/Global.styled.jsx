import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    font-family: 'Roboto', sans-serif; 
    ::-webkit-scrollbar {
      width: 0.8rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.navBgColor};
      border-radius: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.turqo};
      ::-webkit-scrollbar-hover {
        opacity: 0.5;
      }
    }
}
body{
    font-size: 1.5rem;
    ${({ theme }) => theme.colors.Bloggy1};


  }


`;
