import { gql } from '@apollo/client'

export const EDIT_RESOURCE_CARD = gql`
  mutation editResourceCard($id: Int!, $card: Int!, $pos: Int! ) {
    editResourceCard(id: $id, card: $card, pos: $pos) {
      id
      title
      url
      status
      tab
      card
      clickies
        pos
    }
  }
`
