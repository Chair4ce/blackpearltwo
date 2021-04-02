import { gql } from '@apollo/client'

export const CREATE_RESOURCE = gql`
  mutation createResource($title: String!, $url: String!, $tab: Int!, $card: Int! ) {
    createResource(title: $title, url: $url, tab: $tab, card: $card) {
      id
      title
      url
      status
      tab
      card
    }
  }
`
