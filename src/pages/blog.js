import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Post from '../components/Post'

const BlogPage = ({ data }) => {
  return (
    <Layout heroContent={<p className="title">My Blog Posts</p>}>
      <Section>
        {
          data.allMdx.nodes.map((node) => (
            <Post key={node.id} node={node} />
          ))
        }
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        excerpt
        id
        slug
      }
    }
  }
`
export default BlogPage
