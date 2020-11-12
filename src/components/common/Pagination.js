import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const SPagination = styled.nav`
  display: flex;
  margin: 4vw 0;
  font-size: 1rem;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
const SPageLink = styled(Link)`
  line-height: 1em;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  border-radius: var(--radius);
  color: var(--color-secondary);
  border: var(--color-border) 1px solid;
`;
const SPageNumber = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  color: var(--color-secondary);
`;

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  return (
    <SPagination role="navigation">
      <div>
        {previousPagePath && (
          <SPageLink to={previousPagePath} rel="prev">
            Previous
          </SPageLink>
        )}
      </div>
      {numberOfPages > 1 && (
        <SPageNumber>
          Page {humanPageNumber} of {numberOfPages}
        </SPageNumber>
      )}
      <div>
        {nextPagePath && (
          <SPageLink to={nextPagePath} rel="next">
            Next
          </SPageLink>
        )}
      </div>
    </SPagination>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
