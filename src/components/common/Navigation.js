import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavLink = styled.a`
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  opacity: 0.7;
  font-size: 1.2em;
  text-transform: uppercase;
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
