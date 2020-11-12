import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "@components/common";
import { MetaData } from "@components/common/meta";
import { PostFeed } from "@components/styled";

const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag;
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout>
        <div class="outer site-header-background responsive-header-img">
          <div class="inner site-header-content">
            <h1 class="site-title">{tag.name}</h1>
            <p class="site-description">
              {tag.description ? (
                <p>{tag.description}</p>
              ) : (
                `A collection of ${posts.length} posts`
              )}
            </p>
          </div>
        </div>
        <PostFeed>
          {posts.map(({ node }, i) => (
            // The tag below includes the markup for each post - components/common/PostCard.js
            <PostCard key={node.id} post={node} index={i} noLarge />
          ))}
        </PostFeed>
        <Pagination pageContext={pageContext} />
      </Layout>
    </>
  );
};

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Tag;

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
