import { gql } from "graphql-request";

export const gql_newsList = gql`
  {
    newsPages(first: 2) {
      createdDate
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
