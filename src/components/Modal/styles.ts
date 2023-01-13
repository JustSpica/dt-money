import styled, { css, DefaultTheme } from "styled-components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(DialogPrimitive.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled(DialogPrimitive.Close)`
  ${({ theme }) => css`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    line-height: 0;

    border: 0;

    background-color: transparent;
    color: ${theme["gray-500"]};

    cursor: pointer;
  `}
`;

export const Content = styled(DialogPrimitive.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    padding: 3rem 3rem 2.5rem;
    position: fixed;
    top: 50%;
    left: 50%;

    border-radius: 6px;

    background-color: ${theme["gray-800"]};

    transform: translate(-50%, -50%);

    :focus {
      box-shadow: none;
    }

    form {
      width: 100%;
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `}
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  margin: 0.5rem 0 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const transactionTypeButtonModifiers = {
  income: (theme: DefaultTheme) => css`
    svg {
      color: ${theme["green-300"]};
    }

    &[data-state="checked"] {
      svg {
        color: ${theme.white};
      }

      background-color: ${theme["green-500"]};
      color: ${theme.white};
    }
  `,
  outcome: (theme: DefaultTheme) => css`
    svg {
      color: ${theme["red-300"]};
    }

    &[data-state="checked"] {
      svg {
        color: ${theme.white};
      }

      background-color: ${theme["red-500"]};
      color: ${theme.white};

      &:focus {
        box-shadow: 0 0 0 2px ${theme["red-500"]};
      }
    }
  `,
};

interface RadioButtonTypeProps {
  variant: keyof typeof transactionTypeButtonModifiers;
}

export const RadioButtonType = styled(RadioGroup.Item)<RadioButtonTypeProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: 0;
    border-radius: 6px;

    background-color: ${theme["gray-700"]};
    color: ${theme["gray-300"]};

    cursor: pointer;
    transition: all 200ms;

    &:hover {
      background-color: ${theme["gray-600"]};
    }

    ${variant && transactionTypeButtonModifiers[variant](theme)};
  `}
`;
