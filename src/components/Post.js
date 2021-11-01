import * as React from 'react';
import { Link } from 'gatsby'

export default ({ node }) => {
  return (
    <article className="box">
      <h3 className="title is-4">
        <Link to={`/blog/${node.slug}`}>
          {node.frontmatter.title}
        </Link>
      </h3>
      <p>{node.excerpt}</p>
      <small className="is-size-7 has-text-grey-dark">Posted on <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></small>
    </article>
  );
}
