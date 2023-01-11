import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import FeaturedBlog from '../components/FuturedBlog';
import BlogListing from '../components/BlogListing';
import SearchContainer from '../components/SearchContainer';

export default function IndexPage({pageContext, data}) {
  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <h1 className="title">Новые</h1>
      <div className="columns">
        {nodes.slice(0, 2).map(node => (
          <div className="column" key={node.id}>
            <FeaturedBlog blog={node} />
          </div>
        ))}
      </div>

      <div className="p-4">
        <h1 className="title">Поиск</h1>
        <BlogListing 
          blogs={nodes} 
          search={() => <SearchContainer searchIndex={pageContext.searchIndex} />} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 3,
      sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          slug
          subtitle
          author
        }
      }
    }
  }
`;