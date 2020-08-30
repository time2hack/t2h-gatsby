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
  font-size: 2.6rem;
  margin: 0 0 0.5em;
  line-height: 1.15;
  font-weight: 700;
  text-rendering: optimizeLegibility;
`;
export const NoDecorationTags = styled(Link)`
  ${LabelStyles}
`;
export const PostTextContainer = styled.div`
  ${(props) => (props.large ? `padding: 30px 40px;` : `padding: 25px;`)}

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 795px) {
    flex: 0 1 357px;
  }
`;
const css = `
@media (min-width: 795px) {
    .post-card-large .post-card-content {
        flex: 0 1 357px;
    }

    .post-card-large h2 {
        font-size: 2.6rem;
    }

    .post-card-large p {
        font-size: 1.8rem;
        line-height: 1.55em;
    }

    .post-card-large .post-card-content-link {
        padding: 30px 40px 0;
    }

    .post-card-large .post-card-meta {
        padding: 0 40px 30px;
    }
}
`;
export const PostCardImageLink = styled(NoDecorationLink)`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px;
  @media (min-width: 795px) {
    position: relative;
    flex: 1 1 auto;
    border-radius: 5px;
  }
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
  @media (min-width: 795px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
export const Article = styled.article`
  /* flex: 1 1 300px; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 350px;

  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
  }
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
