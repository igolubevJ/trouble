import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export default function About({data}) {
  return (
    <Layout>
      <h1>About page</h1>
      <h3>{data.site.siteMetadata.body.content}</h3>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        body {
          content
        }
      }
    }
  }
`;
