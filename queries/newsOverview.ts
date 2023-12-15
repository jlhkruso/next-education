import { gql } from "graphql-request";

export const gql_newsOverview = gql`
  {
    newsOverview(where: { id: "clq6ds5h3jqby0bw89k58h222" }) {
      hero {
        ... on Hero {
          heroTitle
          heroBodytext {
            html
          }
          heroImage {
            ... on Image {
              image {
                url
              }
              alt
            }
          }
        }
      }
    }
  }
`;
