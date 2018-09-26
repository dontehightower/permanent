import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { css} from 'react-emotion';

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  const pageStyles = css`
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={pageStyles}>
          {children}
        </div>
      </>
    )}
  />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
