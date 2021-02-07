import { gql } from '@apollo/client'

export const FETCH_RESOURCES = gql`
  query getResources {
    resources {
      id
      title
      url
    }
  }
`
