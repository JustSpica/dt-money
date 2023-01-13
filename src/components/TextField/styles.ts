import styled, { css } from "styled-components";

export const TextFieldContainer = styled.input`
  ${({ theme }) => css`
    padding: 1rem;
    flex: 1;

    border: 0;
    border-radius: 6px;

    background-color: ${theme["gray-900"]};
    color: ${theme["gray-300"]};

    &::placeholder {
      color: ${theme["gray-500"]};
    }
  `}
`;
