import { gql } from "graphql-request";

export const gql_newsList = gql`
  query {
    newsPages(orderBy: createdDate_DESC) {
      createdDate
      slug
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
