import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavLink = styled.a`
  display: inline-block;
  padding: 12px;
  color: #fff;
  opacity: 0.8;
  font-size: 1em;
  text-transform: uppercase;
  transition: opacity 0.35s ease-in-out;
  position: relative;

  &:hover {
    text-decoration: none;
    opacity: 1;
  }
  &:hover:before {
    right: 12px;
    opacity: 0.5;
  }
  &:before {
    content: "";
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }
`;

const Navigation = ({ data, navClass = "site-nav-item" }) => (
  <>
    {data.map((navItem, i) =>
      navItem.url.match(/^\s?http(s?)/gi) ? (
        <NavLink
          className={navClass}
          href={navItem.url}
          key={i}
          target="_blank"
          rel="noopener noreferrer"
        >
          {navItem.label}
        </NavLink>
      ) : (
        <NavLink as={Link} className={navClass} to={navItem.url} key={i}>
          {navItem.label}
        </NavLink>
      )
    )}
  </>
);

Navigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  navClass: PropTypes.string,
};

export default Navigation;
