import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import '../../templates/blog.scss';

export default function Blog({data}) {
  const {html, frontmatter} = data.markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
