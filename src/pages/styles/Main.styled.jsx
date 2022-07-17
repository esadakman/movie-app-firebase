import styled from "styled-components";

const CardArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  /* background-color: #c4d7ed; */
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  overflow-x: hidden;
  background-color: #c4d7ed;
`;

export const LoadingDiv = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const SearchBarDiv = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: #27252545;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyled = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const InputStyled = styled.input`
  border-radius: 0.3rem;
  background-color: #050f24af;
  color: #f8f8f8;
  width: 12rem;
  height: 2rem;
  text-indent: 10px;
  outline: none;
  border: inherit;
  transition: all 0.5s;
  letter-spacing: 1px;
  ::placeholder {
    color: #ffffffa5;
    letter-spacing: 2px;
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.turqo};
    transform: scale(1.05);
  }
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  border-radius: 0.3rem;
  border: none;
  height: 2rem;
  width: auto;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.turqo};
  color: ${({ theme }) => theme.colors.navBgColor};
  transition: 0.7s ease-in-out;
  border: 2px solid ${({ theme }) => theme.colors.navBgColor};

  :hover {
    opacity: 0.9;
    color: white;
    background-color: ${({ theme }) => theme.colors.cardBack};
    border: 2px solid ${({ theme }) => theme.colors.turqo};
  }
  :active {
    opacity: 1;
  }
  :disabled {
    background-color: gray;
  }
`;

export default CardArea;
