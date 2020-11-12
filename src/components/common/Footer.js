import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Container, Main, Inner } from "@components/styled";

const SFooterNav = styled(Inner)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: rgba(255, 255, 255, 0.7);

    &:hover {
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0.5rem;
  }
`;
const SFooter = styled.footer`
  color: rgba(255, 255, 255, 0.7);
  background: var(--color-base);
`;

const SFooterNavLeft = styled.div``;
const SFooterNavRight = styled.div`
  @media (min-width: 795px) {
    margin-right: -12px;
  }
`;

const Footer = ({ site }) => (
  <SFooter>
    <Main>
      <SFooterNav>
        <SFooterNavLeft>
          <Link to="/">{site.title}</Link> © {new Date().getFullYear()} &mdash;
          Published with{" "}
          <a href="https://ghost.org" target="_blank" rel="noopener noreferrer">
            Ghost
          </a>
        </SFooterNavLeft>
        <SFooterNavRight>
          <Navigation data={site.navigation} />
        </SFooterNavRight>
      </SFooterNav>
    </Main>
  </SFooter>
);

Footer.propTypes = {
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    navigation: PropTypes.array.isRequired,
  }).isRequired,
};

export default Footer;
