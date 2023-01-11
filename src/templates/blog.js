import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import './blog.scss';

export default function Blog({data}) {
  const {html, frontmatter} = data.markdownRemark;
  return (
    <Layout>
      <h1 className="title">{frontmatter.title}</h1>
      <div className="blog-content">
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;