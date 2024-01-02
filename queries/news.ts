import { gql } from "graphql-request";

export const gql_news = gql`
  query getSingleNews($slug: String!) {
    newsPage(where: { slug: $slug }) {
      createdDate
      meta {
        ... on Meta {
          title
          description
          ogTitle
          ogDescription
          ogImage {
            id
          }
        }
      }
      hero {
        ... on Hero {
          heroTitle
          heroBodytext {
            html
          }
          heroImage {
            ... on Image {
              alt
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`;
