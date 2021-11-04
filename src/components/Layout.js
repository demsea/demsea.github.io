import * as React from 'react';
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';

export default function Layout({ children, heroContent }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
      </Helmet>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/projects" className="navbar-item">Projects</Link>
            <Link to="/blog" className="navbar-item">Blog</Link>
            <Link to="/cv" className="navbar-item">CV</Link>
          </div>
        </div>
      </nav>

      <section className="hero is-medium main-banner">
        <div className="main-banner-shade" />
        <div className="hero-body">
          <div class="container is-max-desktop">
            {heroContent}
          </div>
        </div>
      </section>

      {children}

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Maryna Demchenko&apos;s</strong> website. I use this website
            to share my experience of becoming a data analyst.
          </p>
          <p>
            The website content is licensed <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
          <p>
            This website is buils using <a target="_blank" href="https://www.gatsbyjs.com/">GatsbyJS</a> and <a target="_blank" href="https://bulma.io/">Bulma</a>
          </p>
        </div>
      </footer>
    </>
  )
}
