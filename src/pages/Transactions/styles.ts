import styled, { css, DefaultTheme } from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1.5rem;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    color: ${theme["gray-300"]};

    td {
      padding: 1.25rem 2rem;

      background-color: ${theme["gray-700"]};

      &:first-child {
        width: 50%;

        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

const priceHighLightModifiers = {
  income: (theme: DefaultTheme) => css`
    color: ${theme["green-300"]};
  `,
  outcome: (theme: DefaultTheme) => css`
    color: ${theme["red-300"]};
  `,
};

interface PriceHighLightProps {
  variant: keyof typeof priceHighLightModifiers;
}

export const PriceHighLight = styled.td<PriceHighLightProps>`
  ${({ theme, variant }) => css`
    ${variant && priceHighLightModifiers[variant](theme)}
  `}
`;
