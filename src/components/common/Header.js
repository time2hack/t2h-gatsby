import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Navigation, Social } from ".";

import styled from "styled-components";

const SiteNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px;
`;

const SiteDescription = styled.p`
  display: none;
  margin: 25px 0 0 0;
  padding: 0;
  font-size: 2rem;
  line-height: 1.67;
  opacity: 0.7;
`;

const HomeLogo = styled.img`
  height: 1em;
`;
const SiteBannerTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.3em;
`;
const SiteBanner = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 6vw 0;
  text-align: center;
`;

const Footer = ({ data, config, isHome }) => {
  const site = data.allGhostSettings.edges[0].node;
  return (
    <header
      className="site-head"
      style={
        isHome
          ? {
              background: `#090a0b no-repeat 50%`,
              backgroundImage: `url(${site.cover_image})`,
              backgroundSize: `cover`,
            }
          : {}
      }
    >
      <div className="container">
        {!isHome ? (
          <div className="site-mast">
            <div className="site-mast-left">
              <Link to="/">
                {site.icon ? (
                  <img className="site-logo" src={site.icon} alt={site.title} />
                ) : (
                  <Img
                    fixed={data.file.childImageSharp.fixed}
                    alt={site.title}
                  />
                )}
              </Link>
              {/* The navigation items as setup in Ghost */}
              <Navigation data={site.navigation} />
            </div>
            <div className="site-mast-right">
              <Social site={site} config={config} />
            </div>
          </div>
        ) : (
          <>
            <SiteNav>
              <div className="site-nav-left">
                {/* The navigation items as setup in Ghost */}
                <Navigation data={site.navigation} />
              </div>
              <div className="site-nav-right">
                <Social site={site} config={config} />
              </div>
            </SiteNav>
            <SiteBanner>
              <SiteBannerTitle>
                {site.logo ? (
                  <HomeLogo src={site.logo} alt={site.title} />
                ) : (
                  site.title
                )}
              </SiteBannerTitle>
              <SiteDescription className="site-banner-desc">
                {site.description}
              </SiteDescription>
            </SiteBanner>
          </>
        )}
      </div>
    </header>
  );
};

Footer.propTypes = {
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
    file: PropTypes.object,
  }).isRequired,
  config: PropTypes.object.isRequired,
};

export default Footer;
