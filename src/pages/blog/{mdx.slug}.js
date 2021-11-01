import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'
import Section from '../../components/section'

const BlogPost = ({ data }) => {
  return (
    <Layout heroContent={
      <>
        <h1 className="title">{data.mdx.frontmatter.title}</h1>
        <p class="subtitle is-6">
          Posted on <time dateTime={data.mdx.frontmatter.date}>{data.mdx.frontmatter.date}</time>
        </p>
      </>
    }>
      <Section>
        <article className="content">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </article>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
