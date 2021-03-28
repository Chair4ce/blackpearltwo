import { gql } from '@apollo/client'

export const UPDATE_RESOURCE = gql`
  mutation updateResource($id: Int!, $title: String!, $url: String!) {
    updateResource(id: $id, title: $title, url: $url) {
      id
      title
      url
    }
  }
`
