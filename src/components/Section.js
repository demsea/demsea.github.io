import React from 'react';

const Section = ({ children }) => {
  return (
    <section className="section">
      <div class="container is-max-desktop">
        {children}
      </div>
    </section>
  );
}

export default Section;
