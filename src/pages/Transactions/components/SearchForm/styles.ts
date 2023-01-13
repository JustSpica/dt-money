import styled, { css } from "styled-components";

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    gap: 1rem;

    input {
      padding: 1rem;
      flex: 1;

      border: 0;
      border-radius: 6px;

      background-color: ${theme["gray-900"]};
      color: ${theme["gray-300"]};

      &::placeholder {
        color: ${theme["gray-500"]};
      }
    }
  `}
`;
