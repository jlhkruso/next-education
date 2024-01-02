import { gql } from "graphql-request";

export const gql_newsList = gql`
  query ($skip: Int!) {
    newsPages(first: 2, orderBy: createdDate_DESC, skip: $skip) {
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
