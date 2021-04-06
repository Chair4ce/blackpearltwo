import { gql } from '@apollo/client'

export const EDIT_RESOURCE_CARD = gql`
  mutation editResourceCard($id: Int!, $card: Int! ) {
    editResourceCard(id: $id, card: $card) {
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
