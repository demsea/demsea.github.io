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
      <div className="container is-max-desktop">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/projects" className="navbar-item">Projects</Link>
                <Link to="/blog" className="navbar-item">Blog</Link>
                <Link to="/cv" className="navbar-item">CV</Link>
            </div>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-body">
            {heroContent}
          </div>
        </section>

        {children}

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Maryna Demchenko&apos;s</strong> website. I share my data analyst journey here.
              <br />
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
