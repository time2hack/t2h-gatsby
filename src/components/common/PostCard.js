import React from "react";
import PropTypes from "prop-types";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import { PostCard as PC, PostCardLarge as PCL } from "../styled";

import styled from "styled-components";

const CardExcerpt = styled.p`
    margin: 0 0 1.5em;
    @media (min-width: 795px)
        font-size: 1.8rem;
        line-height: 1.55em;
    }
`;
const CardHeaderSection = styled.div`
  position: relative;
  flex-grow: 1;
  display: block;
  color: #15171a;
`;
const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const CardFooterLeft = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooterRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardAvatar = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 7px 0 0;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardAuthorProfileImage = styled.img`
  display: block;
  width: 100%;
  background: var(--color-secondary);
  border-radius: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
const CardDefaultAvatar = styled.img`
  width: 26px;
`;

const PostCard = ({ post, index }) => {
  const url = `/${post.slug}/`;
  const readingTime = readingTimeHelper(post);

  const Card = index % 6 === 0 ? PCL : PC;

  return (
    <Card.Article large>
      {post.feature_image && (
        <Card.PostCardImageLink to={url}>
          <Card.PostCardImage src={post.feature_image} lazy />
        </Card.PostCardImageLink>
      )}

      <Card.PostTextContainer>
        <CardHeaderSection>
          {post.tags ? (
            <Card.NoDecorationTags
              post={post}
              visibility="public"
              autolink={true}
              limit={1}
              permalink="/tag/:slug/"
            />
          ) : null}
          {post.featured && <span>Featured</span>}
          <Card.NoDecorationLink to={url}>
            <Card.CardTitle>{post.title}</Card.CardTitle>
            <CardExcerpt>{post.excerpt}</CardExcerpt>
          </Card.NoDecorationLink>
        </CardHeaderSection>
        <CardFooter>
          <CardFooterLeft>
            <CardAvatar>
              {post.primary_author.profile_image ? (
                <CardAuthorProfileImage
                  src={post.primary_author.profile_image}
                  alt={post.primary_author.name}
                />
              ) : (
                <CardDefaultAvatar
                  src="/images/icons/avatar.svg"
                  alt={post.primary_author.name}
                />
              )}
            </CardAvatar>
            <span>{post.primary_author.name}</span>
          </CardFooterLeft>
          <CardFooterRight>
            <div>{readingTime}</div>
          </CardFooterRight>
        </CardFooter>
      </Card.PostTextContainer>
    </Card.Article>
  );
};

PostCard.propTypes = {
  index: PropTypes.number,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    yearMonth: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostCard;
