import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;

export default Flex;

export const ButtonStyleCard = styled.button`
  background-color: ${({ theme }) => theme.colors.turqo};
  border: 2px solid ${({ theme }) => theme.colors.navBgColor};
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.colors.navBgColor};
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  width: 8rem;
  margin: 1rem auto;
  :hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.turqo};
    background-color: ${({ theme }) => theme.colors.navBgColor};
    border: 2px solid ${({ theme }) => theme.colors.turqo};
  }
  :active {
    opacity: 1;
  }
`;
