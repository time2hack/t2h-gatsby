import styled, { css } from "styled-components";

export const LabelStyles = css`
  margin: 0 0 0.2em;
  color: var(--blue);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  color: var(--darkgrey);
  padding: 0 0.75rem;
  display: inline-block;
  border-radius: 0.3rem;
  background: var(--whitegrey);
  margin-bottom: 1rem;
  text-transform: capitalize;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.2s ease;
`;

const Label = styled.span`
  ${LabelStyles}
`;

export default Label;
