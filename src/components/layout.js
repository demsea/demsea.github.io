import * as React from 'react';

export default function Layout({ children, heroContent }) {
  return (
    <div className="container is-max-desktop">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
              <a href="/" className="navbar-item">Home</a>

              <a href="/projects" className="navbar-item">Projects</a>

              <a href="/cv" className="navbar-item">CV</a>
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
  )
}
