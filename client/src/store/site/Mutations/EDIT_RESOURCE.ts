import { gql } from '@apollo/client'

export const UPDATE_RESOURCE = gql`
  mutation updateResource($id: Int!, $title: String!, $url: String!, $tab: Int!, $card: Int! ) {
    updateResource(id: $id, title: $title, url: $url, tab: $tab, card: $card) {
      id
      title
      url
      status
      tab
      card
        clickies
    }
  }
`
