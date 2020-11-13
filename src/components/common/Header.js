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
const SiteNavLeft = styled.div`
  margin: 0 20px 0 -10px;
`;
const SiteNavRight = styled.div`
  margin: 0 -10px 0 20px;
`;

const SiteDescription = styled.p`
  display: none;
  margin: 25px 0 0 0;
  padding: 0;
  font-size: 1.125rem;
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
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3em;
`;
const SiteBanner = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 6vw 0;
  text-align: center;
`;
const SiteHead = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  background: var(--color-base);

  ${(prop) =>
    prop.isHome
      ? `
    background: #090a0b no-repeat 50%;
    backgroundImage: url(${prop.coverImage}),
    backgroundSize: cover
  `
      : ""}
`;
const SiteLogo = styled.img`
  height: 25px;
`;

const SiteMaterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SiteMaterNavRight = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -10px 0 20px;

  .site-nav-item:last-child {
    padding-right: 0;
  }
`;

const Header = ({ data, config, isHome }) => {
  const site = data.allGhostSettings.edges[0].node;
  return (
    <SiteHead isHome={isHome} coverImage={site.cover_image}>
      <div className="container">
        {!isHome ? (
          <SiteMaterNav>
            <div className="site-mast-left">
              <Link to="/">
                {site.icon ? (
                  <SiteLogo src={site.icon} alt={site.title} />
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
            <SiteMaterNavRight>
              <Social site={site} config={config} />
            </SiteMaterNavRight>
          </SiteMaterNav>
        ) : (
          <>
            <SiteNav>
              <SiteNavLeft>
                {/* The navigation items as setup in Ghost */}
                <Navigation data={site.navigation} />
              </SiteNavLeft>
              <SiteNavRight>
                <Social site={site} config={config} />
              </SiteNavRight>
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
    </SiteHead>
  );
};

Header.propTypes = {
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
    file: PropTypes.object,
  }).isRequired,
  config: PropTypes.object.isRequired,
};

export default Header;
