import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

import styled from 'styled-components'

const Section = styled.section`
  text-align: center;
`
const ErrorCode = styled.h1`
    margin: 0;
    font-size: 12vw;
    line-height: 1em;
    letter-spacing: -5px;
    opacity: .3;
`
const Description = styled.p`
    margin: 0;
    color: #738a94;
    font-size: 3rem;
    line-height: 1.3em;
    font-weight: 400;
}
`

const NotFoundPage = () => (
    <Layout>
        <Section>
            <ErrorCode>404</ErrorCode>
            <Description>Page not found</Description>
            <Link to="/">Go to the front page →</Link>
        </Section>
    </Layout>
)

export default NotFoundPage
