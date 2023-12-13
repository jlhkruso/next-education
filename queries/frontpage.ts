import { gql } from "graphql-request";

export const gql_frontpage = gql`
  {
    frontpage(where: { id: "clpwmghgvqol90aw4by7rs4yz" }) {
      hero {
        ... on Hero {
          heroTitle
          heroBodytext {
            html
          }
          heroImage {
            id
          }
        }
      }
    }
  }
`;
