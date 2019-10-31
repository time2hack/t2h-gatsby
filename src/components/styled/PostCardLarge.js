import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import styled from 'styled-components'

export const NoDecorationLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`
export const CardTitle = styled.h2`
    font-size: 2.6rem;
    margin: 0 0 .5em;
    line-height: 1.15;
    font-weight: 700;
    text-rendering: optimizeLegibility;
`
export const NoDecorationTags = styled(Tags)`
    text-decoration: none;
    text-transform: uppercase;
    color: #185e84;
    padding: 0.5rem 0;
`
export const PostTextContainer = styled.div`
    ${props => (
        props.large
            ? `padding: 30px 40px;`
            : `padding: 25px;`
    )}

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 795px) {
        flex: 0 1 357px;
    }
`
const css = `
@media (min-width: 795px) {
    .post-card-large .post-card-content {
        flex: 0 1 357px;
    }

    .post-card-large h2 {
        font-size: 2.6rem;
    }

    .post-card-large p {
        font-size: 1.8rem;
        line-height: 1.55em;
    }

    .post-card-large .post-card-content-link {
        padding: 30px 40px 0;
    }

    .post-card-large .post-card-meta {
        padding: 0 40px 30px;
    }
}
`
export const PostCardImageLink = styled(NoDecorationLink)`
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    @media (min-width: 795px) {
        position: relative;
        flex: 1 1 auto;
        border-radius: 5px 0 0 5px;
    }

`
export const PostCardImage = styled.img`
    width: 100%;
    height: 200px;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #c5d2d9;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 795px) {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`
export const Article = styled.article`
    /* flex: 1 1 300px; */
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 20px 40px;
    min-height: 350px;
    background: #fff center center;
    background-size: cover;
    border-radius: 5px;
    box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    transition: all 0.5s ease;
    @media (min-width: 795px) {
        flex: 1 1 100%;
        flex-direction: row;
    }

    &:hover {
        box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
        transition: all 0.4s ease;
        transform: translate3D(0, -1px, 0) scale(1.02);
    }
`

export default {
    NoDecorationLink,
    NoDecorationTags,
    PostTextContainer,
    PostCardImageLink,
    PostCardImage,
    Article,
    CardTitle,
}
