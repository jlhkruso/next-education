import { gql } from "graphql-request";

export const gql_header = gql`
  {
    setting(where: { id: "clq6djvgyjhvo0aw4kpzklpe7" }) {
      logo {
        url
      }
      navigation {
        ... on Frontpage {
          slug
          slugTitle
        }
        ... on NewsOverview {
          slug
          slugTitle
        }
      }
    }
  }
`;
