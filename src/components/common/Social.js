import React from 'react'
import PropTypes from 'prop-types'

const Social = ({ site, config }) => {
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    return (
        <>
            { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}

            { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}

            <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
        </>
    )
}

Social.propTypes = {
    site: PropTypes.shape({
        twitter: PropTypes.string.isRequired,
        facebook: PropTypes.string.isRequired,
    }).isRequired,
    config: PropTypes.shape({
        siteUrl: PropTypes.string.isRequired,
    }).isRequired,
}

export default Social
