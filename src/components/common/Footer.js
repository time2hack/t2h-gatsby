import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Navigation } from '.'

const Footer = ({ site }) => {
    return (
        <footer className="site-foot">
            <div className="site-foot-nav container">
                <div className="site-foot-nav-left">
                    <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                </div>
                <div className="site-foot-nav-right">
                    <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    site: PropTypes.shape({
        title: PropTypes.string.isRequired,
        navigation: PropTypes.array.isRequired,
    }).isRequired,
}

export default Footer
