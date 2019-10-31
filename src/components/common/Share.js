import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    display: block;
    width: 100%;
    text-align: center;
`
const ListItem = styled.li`
    display: inline-block;
    margin: 0 1rem;
`
const IconLink = styled.a`
    display: inline-block;
    color: black;
    padding: 0 0.5rem;
`
const Icon = styled.svg`
    display: inline-block;
    color: black;
    width: 1.5rem;
    height: 1.5rem;
`
// var(--twitter)
// var(--fb)
// var(--reddit)
// var(--reddit)
// var(--h-news)
const ShareBar = ({ title, url }) => {
    const pageTitle = encodeURIComponent(title)
    const pageUrl = encodeURIComponent(url)
    return (
        <List>
            <ListItem>
                <IconLink
                    title="Share on Twitter"
                    href={`https://twitter.com/intent/tweet?text=${pageTitle}:%20${pageUrl}%20@alligatorio%20%F0%9F%8E%89%F0%9F%90%8A`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon title="Twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <path
                            fill="#ccc" filled="var(--twitter)"
                            d="M24.3 8.8c.4 8.3-6 15.4-14.3 15.8a15 15 0 0 1-9-2.3c2.8.2 5.5-.6 7.6-2.3A5.4 5.4 0 0 1 4 16.3c1 .2 1.7 0 2.5 0A5.4 5.4 0 0 1 2 11a5.4 5.4 0 0 0 2.3.5 5.4 5.4 0 0 1-1.4-7A15 15 0 0 0 13.7 10a5.2 5.2 0 0 1 3.4-6.4 5.2 5.2 0 0 1 5.6 1.7A9 9 0 0 0 26 4a5 5 0 0 1-2.3 3 9 9 0 0 0 3-1 5 5 0 0 1-2.4 2.8z"
                        />
                    </Icon>
                </IconLink>
            </ListItem>
            <ListItem>
                <IconLink
                    title="Share on Facebook"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon title="Facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
                        <path
                            fill="#ccc" filled="var(--fb)"
                            d="M26.4 0H2.6C1.6 0 0 1.7 0 2.6v23.8c0 1 1.7 2.6 2.6 2.6H15V18h-4v-4h4v-3c0-3.8 2.8-6 6.2-6 1.6 0 2.4 0 2.8.2V9h-2.8c-1.8 0-2.2 1-2.2 2.2V14h5l-.6 4H19v11h7.4c1 0 2.6-1.7 2.6-2.6V2.6c0-1-1.7-2.6-2.6-2.6z"
                        />
                    </Icon>
                </IconLink>
            </ListItem>
            <ListItem>
                <IconLink
                    title="Share on Reddit"
                    href={`http://www.reddit.com/submit?url=${pageUrl}&amp;title=${pageTitle}&amp;text=${pageTitle}+is+quick+and+easy%21+Let%27s+explore+how.`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon title="Reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <path
                            fill="#ccc" filled="var(--reddit)"
                            d="M11.8 15.3c0-1-.8-2-2-2-1 0-1.8 1-1.8 2s1 2 2 2 1.8-1 1.8-2zm6.3-2c-1 0-1.8 1-1.8 2s1 2 2 2 1.8-1 1.8-2-1-2-2-2zm-.5 6.5c-.7.7-1.8 1-3.5 1s-3-.3-3.5-1a.7.7 0 0 0-1 0c-.2.3-.2.7 0 1 1 1 2.4 1.4 4.5 1.4 2 0 3.5-.5 4.5-1.4a.7.7 0 0 0 0-1c-.3-.3-.7-.3-1 0z"
                        />
                        <path
                            fill="#ccc" filled="var(--reddit)"
                            d="M27.7 13.3a3.2 3.2 0 0 0-3.2-3.3c-.8 0-1.5.3-2 .8-2-1.3-4.8-2-7.5-2.2L16.4 4l4 .8c.2 1.4 1.4 2.6 2.8 2.6A2.7 2.7 0 0 0 26 4.7C26 3.2 24.6 2 23 2c-1 0-2 .6-2.4 1.5l-4.7-1a.7.7 0 0 0-.7.4l-1.7 5.6c-3 0-6 .8-8 2.2-.6-.5-1.3-.8-2-.8-2 0-3.3 1.5-3.3 3.2 0 1 .6 2 1.4 2.7v.7c0 2.4 1.2 4.5 3.6 6C7.6 24 10.6 24.8 14 25c3 0 6.2-1 8.5-2.4 2.4-1.5 3.7-3.6 3.7-6V16c1-.5 1.5-1.6 1.5-2.7zm-4.5-10c.7 0 1.3.7 1.3 1.4a1.3 1.3 0 0 1-2.7 0c0-.7.6-1.3 1.4-1.3zm-21.6 10c0-1 1-2 2-2l.8.3c-1 1-1.8 2-2.2 3-.4-.4-.6-.8-.6-1.3zm20.2 8.3c-2 1.3-5 2-8 2-2.8 0-5.6-.7-7.7-2-2-1.3-3-3-3-4.8C3 15 4 13.3 6 12c2.2-1.4 5-2 8-2s5.6.6 7.7 2c2 1.3 3 3 3 4.8.2 1.8-1 3.5-3 4.8zm4-7c-.4-1-1.2-2-2.3-3l1-.2c1 0 2 .8 2 2a2 2 0 0 1-.7 1.2z"
                        />
                    </Icon>
                </IconLink>
            </ListItem>
            <ListItem>
                <IconLink
                    title="Share on Hacker News"
                    href={`https://news.ycombinator.com/submitlink?u=${pageUrl}&amp;t=${pageTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon title="Hacker News" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <path
                            fill="#ccc" filled="var(--h-news)"
                            d="M14 13.6L9.5 4.4h-3L13 16.6v7h2.5v-7l6-12.2h-2.6z"
                        />
                    </Icon>
                </IconLink>
            </ListItem>
        </List>
    );
}

ShareBar.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default ShareBar
