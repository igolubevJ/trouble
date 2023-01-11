import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import BlogListing from '../components/BlogListing';

export default function BlogsPaginated({pageContext, data}) {
  const { limit, currentPage, numberOfPages } = pageContext;
  const { nodes } = data.allMarkdownRemark;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString(); 

  return (
    <Layout>
      <BlogListing blogs={nodes} />
      <Link 
        disabled={isFirst}
        className="button is-small" 
        to={`/blogs/${prevPage}`} 
        rel="prev">
        Назад
      </Link>
      {' '}  
      <Link 
        disabled={isLast}
        className="button is-small" 
        to={`/blogs/${nextPage}`} 
        rel="next">
        Вперед
      </Link>
    </Layout>
  );
}

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}},
      limit: $limit, 
      skip: $skip) {
      nodes {
        id
        frontmatter {
          title
          slug
          subtitle
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`;
