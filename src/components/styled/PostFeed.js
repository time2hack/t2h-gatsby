import React from "react";

import styled, { css } from "styled-components";

const flexCss = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;
`;

const gridCss = css`
  display: grid;
  justify-content: space-between;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const PostFeed = styled.section`
  ${(props) => (props.flex ? flexCss : gridCss)}
`;

const Feed = ({ children }) => <PostFeed flex>{children}</PostFeed>;

export default Feed;
