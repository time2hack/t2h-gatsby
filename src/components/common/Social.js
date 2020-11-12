import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SiteNavItem = styled.a`
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  opacity: 0.7;

  &:hover {
    text-decoration: none;
    opacity: 1;
  }
`;
const SiteNavIcon = styled.img`
  height: 15px;
  margin: -5px 0 0;
`;

const Social = ({ site, config }) => {
  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null;
  const facebookUrl = site.facebook
    ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    : null;
  const feedUrl = `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`;
  return (
    <>
      {site.twitter && (
        <SiteNavItem
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiteNavIcon src="/images/icons/twitter.svg" alt="Twitter" />
        </SiteNavItem>
      )}

      {site.facebook && (
        <SiteNavItem
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiteNavIcon src="/images/icons/facebook.svg" alt="Facebook" />
        </SiteNavItem>
      )}

      <SiteNavItem href={feedUrl} target="_blank" rel="noopener noreferrer">
        <SiteNavIcon src="/images/icons/rss.svg" alt="RSS Feed" />
      </SiteNavItem>
    </>
  );
};

Social.propTypes = {
  site: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    siteUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Social;
