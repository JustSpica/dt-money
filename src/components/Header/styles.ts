import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    padding: 2.5rem 0 7.5rem;

    background-color: ${theme["gray-900"]};
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      height: 50px;
      padding: 0 1.25rem;

      font-weight: bold;

      border: 0;
      border-radius: 6px;

      background-color: ${theme["green-500"]};
      color: ${theme.white};

      cursor: pointer;
      transition: background-color 150ms;

      &:hover {
        background-color: ${theme["green-700"]};
      }
    }
  `}
`;
