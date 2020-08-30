import { Link } from "gatsby";
import styled from "styled-components";
import { LabelStyles } from "./Label";

export const NoDecorationLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;
export const CardTitle = styled.h2`
  margin: 0 0 0.5em;
  font-size: 2rem;
  line-height: 1.15;
  font-weight: 700;
  text-rendering: optimizeLegibility;
`;

export const NoDecorationTags = styled(Link)`
  ${LabelStyles}
`;
export const PostTextContainer = styled.div`
  padding: 25px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PostCardImageLink = styled(NoDecorationLink)`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px;
`;
export const PostCardImage = styled.img`
  width: 100%;
  height: 200px;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #c5d2d9;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Article = styled.article`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  transition: all 0.5s ease;
`;

export default {
  NoDecorationLink,
  NoDecorationTags,
  PostTextContainer,
  PostCardImageLink,
  PostCardImage,
  Article,
  CardTitle,
};
