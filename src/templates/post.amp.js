import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Layout, Share } from "../components/common";
import { MetaData } from "../components/common/meta";
import { Label } from "../components/styled";

const Header = styled.header`
  text-align: center;
  margin-top: 7.5rem;
`;

const FeatureFigureImg = styled("amp-img")`
  width: 100%;
  height: auto;
  border-radius: 0.25em;
`;

const PrimaryTag = styled(Label)`
  font-size: 1.6rem;
`;

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
              {post.primary_tag && (
                <PrimaryTag as={Link} to={post.primary_tag.slug}>
                  {post.primary_tag.name}
                </PrimaryTag>
              )}
              <h1 className="content-title">{post.title}</h1>
              <Share title={post.title} url={location.href} />
            </Header>
            {post.feature_image ? (
              <FeatureFigureImg src={post.feature_image} alt={post.title} />
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
      primary_tag: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
      }),
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
