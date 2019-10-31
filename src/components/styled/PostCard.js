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
    margin: 0 0 .5em;
    font-size: 2rem;
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
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const PostCardImageLink = styled(NoDecorationLink)`
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
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
`
export const Article = styled.article`
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 20px 40px;
    min-height: 300px;
    background: #fff center center;
    background-size: cover;
    border-radius: 5px;
    box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    transition: all 0.5s ease;

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
