import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  font-size: 1rem;
  display: block;
  width: 100%;
  text-align: center;
`;
const ListItem = styled.li`
  display: inline-block;
  margin: 0 1em;
`;
const IconLink = styled.a`
  display: inline-block;
  color: black;
  padding: 0 0.2em;
  text-decoration: none !important;
  box-shadow: none !important;
`;
const Icon = styled.svg`
  display: inline-block;
  color: #ccc;
  fill: #ccc;
  width: 1em;
  height: 1em;

  &:hover {
    color: black;
    fill: black;
    box-shadow: 0 0 8px 5px rgba(100, 100, 100, 0.3);
  }
  @media (prefers-color-scheme: dark) {
    &:hover {
      color: yellow;
      fill: yellow;
    }
  }
`;
// var(--twitter)
// var(--fb)
// var(--reddit)
// var(--reddit)
// var(--h-news)
const ShareBar = ({ title, url }) => {
  const pageTitle = encodeURIComponent(title);
  const pageUrl = encodeURIComponent(url);
  return (
    <List>
      <ListItem>
        <IconLink
          title="Share on Facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            title="Facebook"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29 29"
          >
            <path
              filled="var(--fb)"
              d="M26.4 0H2.6C1.6 0 0 1.7 0 2.6v23.8c0 1 1.7 2.6 2.6 2.6H15V18h-4v-4h4v-3c0-3.8 2.8-6 6.2-6 1.6 0 2.4 0 2.8.2V9h-2.8c-1.8 0-2.2 1-2.2 2.2V14h5l-.6 4H19v11h7.4c1 0 2.6-1.7 2.6-2.6V2.6c0-1-1.7-2.6-2.6-2.6z"
            />
          </Icon>
        </IconLink>
      </ListItem>
      <ListItem>
        <IconLink
          title="Share on Twitter"
          href={`https://twitter.com/intent/tweet?text=${pageTitle}:%20${pageUrl}%20@alligatorio%20%F0%9F%8E%89%F0%9F%90%8A`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            title="Twitter"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path
              filled="var(--twitter)"
              d="M24.3 8.8c.4 8.3-6 15.4-14.3 15.8a15 15 0 0 1-9-2.3c2.8.2 5.5-.6 7.6-2.3A5.4 5.4 0 0 1 4 16.3c1 .2 1.7 0 2.5 0A5.4 5.4 0 0 1 2 11a5.4 5.4 0 0 0 2.3.5 5.4 5.4 0 0 1-1.4-7A15 15 0 0 0 13.7 10a5.2 5.2 0 0 1 3.4-6.4 5.2 5.2 0 0 1 5.6 1.7A9 9 0 0 0 26 4a5 5 0 0 1-2.3 3 9 9 0 0 0 3-1 5 5 0 0 1-2.4 2.8z"
            />
          </Icon>
        </IconLink>
      </ListItem>
      <ListItem>
        <IconLink
          title="Share on Reddit"
          href={`http://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}&text=${pageTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            title="Reddit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path
              filled="var(--reddit)"
              d="M11.8 15.3c0-1-.8-2-2-2-1 0-1.8 1-1.8 2s1 2 2 2 1.8-1 1.8-2zm6.3-2c-1 0-1.8 1-1.8 2s1 2 2 2 1.8-1 1.8-2-1-2-2-2zm-.5 6.5c-.7.7-1.8 1-3.5 1s-3-.3-3.5-1a.7.7 0 0 0-1 0c-.2.3-.2.7 0 1 1 1 2.4 1.4 4.5 1.4 2 0 3.5-.5 4.5-1.4a.7.7 0 0 0 0-1c-.3-.3-.7-.3-1 0z"
            />
            <path
              filled="var(--reddit)"
              d="M27.7 13.3a3.2 3.2 0 0 0-3.2-3.3c-.8 0-1.5.3-2 .8-2-1.3-4.8-2-7.5-2.2L16.4 4l4 .8c.2 1.4 1.4 2.6 2.8 2.6A2.7 2.7 0 0 0 26 4.7C26 3.2 24.6 2 23 2c-1 0-2 .6-2.4 1.5l-4.7-1a.7.7 0 0 0-.7.4l-1.7 5.6c-3 0-6 .8-8 2.2-.6-.5-1.3-.8-2-.8-2 0-3.3 1.5-3.3 3.2 0 1 .6 2 1.4 2.7v.7c0 2.4 1.2 4.5 3.6 6C7.6 24 10.6 24.8 14 25c3 0 6.2-1 8.5-2.4 2.4-1.5 3.7-3.6 3.7-6V16c1-.5 1.5-1.6 1.5-2.7zm-4.5-10c.7 0 1.3.7 1.3 1.4a1.3 1.3 0 0 1-2.7 0c0-.7.6-1.3 1.4-1.3zm-21.6 10c0-1 1-2 2-2l.8.3c-1 1-1.8 2-2.2 3-.4-.4-.6-.8-.6-1.3zm20.2 8.3c-2 1.3-5 2-8 2-2.8 0-5.6-.7-7.7-2-2-1.3-3-3-3-4.8C3 15 4 13.3 6 12c2.2-1.4 5-2 8-2s5.6.6 7.7 2c2 1.3 3 3 3 4.8.2 1.8-1 3.5-3 4.8zm4-7c-.4-1-1.2-2-2.3-3l1-.2c1 0 2 .8 2 2a2 2 0 0 1-.7 1.2z"
            />
          </Icon>
        </IconLink>
      </ListItem>
      <ListItem>
        <IconLink
          title="Share on Hacker News"
          href={`https://news.ycombinator.com/submitlink?u=${pageUrl}&t=${pageTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            title="Hacker News"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path
              filled="var(--h-news)"
              d="M14 13.6L9.5 4.4h-3L13 16.6v7h2.5v-7l6-12.2h-2.6z"
            />
          </Icon>
        </IconLink>
      </ListItem>
      <ListItem>
        <IconLink
          title="Share on LinkedIn"
          href={`https://www.linkedin.com/cws/share?url=${pageUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            title="LinkedIn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 171 171"
          >
            <g
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path
                d="M0,171.99654v-171.99654h171.99654v171.99654z"
                fill="none"
              />
              <g fill="currentColor">
                <path d="M138.9375,0h-106.875c-17.70117,0 -32.0625,14.36133 -32.0625,32.0625v106.875c0,17.70117 14.36133,32.0625 32.0625,32.0625h106.875c17.70117,0 32.0625,-14.36133 32.0625,-32.0625v-106.875c0,-17.70117 -14.36133,-32.0625 -32.0625,-32.0625zM52.8723,145.15475h-26.56461l-0.15414,-79.53966h26.5646zM38.92203,55.21018h-0.15415c-8.68359,0 -14.28425,-5.98603 -14.28425,-13.43644c0,-7.63026 5.7805,-13.41076 14.61824,-13.41076c8.83774,0 14.25856,5.7805 14.4384,13.41076c0,7.45042 -5.62635,13.43644 -14.61824,13.43644zM144.97491,145.15475h-26.79582v-43.21244c0,-10.45628 -2.77464,-17.57272 -12.1262,-17.57272c-7.14212,0 -10.99579,4.80424 -12.84555,9.45433c-0.69366,1.66992 -0.87349,3.95643 -0.87349,6.29432v45.03651h-26.92428l-0.15415,-79.53966h26.92428l0.15415,11.22701c3.4426,-5.31806 9.17172,-12.84555 22.89077,-12.84555c17.00752,0 29.72461,11.09856 29.72461,34.96559v46.19261z" />
              </g>
            </g>
          </Icon>
        </IconLink>
      </ListItem>
    </List>
  );
};

ShareBar.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ShareBar;
