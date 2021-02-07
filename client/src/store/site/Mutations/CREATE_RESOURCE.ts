import { gql } from '@apollo/client'

export const CREATE_RESOURCE = gql`
  mutation createResource($text: String!, $text: String!) {
    createResource(title: $text, url: $text) {
      title
      url
    }
  }
`
