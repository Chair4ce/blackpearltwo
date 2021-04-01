import { gql } from '@apollo/client'

export const CREATE_RESOURCE = gql`
  mutation createResource($title: String!, $url: String!) {
    createResource(title: $title, url: $url) {
      id
      title
      url
      status
    }
  }
`
