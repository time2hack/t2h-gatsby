import styled, { css } from "styled-components";

export const LabelStyles = css`
  margin: 0 0 0.2em;
  font-size: 1.4rem;
  font-weight: 500;
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

  &:hover {
    text-decoration: none;
    border: 1px solid var(--blue);
    background: color(var(--blue) a(25%));
  }
`;

export const Label = styled.span`
  ${LabelStyles}
`;

export const PrimaryTag = styled.span`
  ${LabelStyles}
  font-size: 1.6rem;
`;

export default Label;
