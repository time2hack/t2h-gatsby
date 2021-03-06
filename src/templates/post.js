import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Disqus } from "gatsby-plugin-disqus";
import { Label } from "@components/styled";
import { Layout, Share } from "@components/common";
import { MetaData } from "@components/common/meta";
import Subscribe from "@components/common/Subscribe";

const Header = styled.header`
  text-align: center;
  padding-top: 70px;
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

const PrimaryTag = styled(Label)`
  padding: 0.5em 0.75em;
  font-size: 0.8rem;
  line-height: 1;
  margin-bottom: 1.5rem;
`;

const PostFullContent = styled.div.attrs({ className: "post-full-content" })`
  margin-bottom: 1.6em;
`;

const ContentTitle = styled.h1`
  margin: 0 0 0.8em;
  font-size: 3.125rem;

  @media (max-width: 500px) {
    margin: 0.8em 0;
    font-size: 2.125rem;
  }
`;

const Post = ({ data, location }) => {
  const post = data.ghostPost;
  const disqusConfig = {
    url: post.url,
    identifier: post.comment_id,
    title: post.title,
  };

  const html = post.childMarkdown.childMarkdownRemark.html.replace(
    "http://",
    "https://"
  );

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <div className="container">
          <article className="content">
            <Header>
              {post.primary_tag && (
                <PrimaryTag as={Link} to={`/tag/${post.primary_tag.slug}`}>
                  {post.primary_tag.name}
                </PrimaryTag>
              )}
              <ContentTitle>{post.title}</ContentTitle>
              <hr />
              <Share title={post.title} url={location.href} />
            </Header>
            {post.feature_image ? (
              <FeatureFigure className="post-feature-image">
                <FeatureFigureImg
                  src={post.feature_image}
                  alt={post.title}
                  loading="lazy"
                />
              </FeatureFigure>
            ) : null}
            <PostFullContent>
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </PostFullContent>

            <Subscribe />

            <PostFullContent>
              <Disqus config={disqusConfig} />
            </PostFullContent>
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
