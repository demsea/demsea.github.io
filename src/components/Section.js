import * as React from 'react';

export default ({ children }) => {
  return (
    <section className="section">
      <div class="container is-max-desktop">
        {children}
      </div>
    </section>
  );
}
