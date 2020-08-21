import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import { Layout, Share } from "../components/common";
import { MetaData } from "../components/common/meta";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  margin-top: 7.5rem;
`;
const FeatureFigure = styled.figure`
  margin: 0 -4vw 3vw;
`;

const FeatureFigureImg = styled.img`
  width: 100%;
  height: 690px;
  border-radius: 0.25em;
  object-fit: cover;
`;

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */

const Post = ({ data, location }) => {
  const post = data.ghostPost;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <div className="container">
          <article className="content">
            <Header className="post-full-content">
              <h1 className="content-title">{post.title}</h1>
              <Share title={post.title} url={location.href} />
            </Header>
            {post.feature_image ? (
              <FeatureFigure className="post-feature-image">
                <FeatureFigureImg src={post.feature_image} alt={post.title} />
              </FeatureFigure>
            ) : null}
            <div className="post-full-content">
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{
                  __html: post.childMarkdown.childMarkdownRemark.html,
                }}
              />
            </div>
          </article>
        </div>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      codeinjection_styles: PropTypes.string,
      feature_image: PropTypes.string,
      yearMonth: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,

      childMarkdown: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          timeToRead: PropTypes.number,
          html: PropTypes.string,
        }),
      }),
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
