import styled, { css, DefaultTheme } from "styled-components";

const buttonContainerModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme["green-500"]};
    color: ${theme.white};

    &:not(:disabled):hover {
      background-color: ${theme["green-300"]};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    border: 1px solid ${theme["green-300"]};

    background-color: transparent;
    color: ${theme["green-300"]};

    &:not(:disabled):hover {
      border: 1px solid ${theme["green-500"]};
      background-color: ${theme["green-500"]};
      color: ${theme.white};
    }
  `,
};

interface ButtonContainerProps {
  variant?: keyof typeof buttonContainerModifiers;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, variant = "default" }) => css`
    padding: 0.75rem 1.5rem;

    font-weight: bold;
    line-height: 1.6;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 0;
    border-radius: 6px;

    cursor: pointer;
    transition: all 200ms;

    &:disabled {
      border: 1px solid ${theme["gray-500"]};

      background-color: ${theme["gray-500"]};
      color: ${theme.white};

      cursor: not-allowed;
    }

    ${buttonContainerModifiers[variant](theme)}
  `}
`;
