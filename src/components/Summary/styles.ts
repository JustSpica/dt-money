import styled, { css, DefaultTheme } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const summaryCardModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme["gray-600"]};
  `,
  total: (theme: DefaultTheme) => css`
    background-color: ${theme["green-700"]};
  `,
};

interface SummaryCardProps {
  variant?: keyof typeof summaryCardModifiers;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  ${({ theme, variant = "default" }) => css`
    padding: 2rem;

    border-radius: 6px;

    ${variant && summaryCardModifiers[variant](theme)}

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: ${theme["gray-300"]};
    }

    strong {
      margin-top: 1rem;

      display: block;

      font-size: 2rem;
    }
  `}
`;
