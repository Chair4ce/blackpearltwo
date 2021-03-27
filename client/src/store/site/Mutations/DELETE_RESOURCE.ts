import { gql } from '@apollo/client'

export const DELETE_RESOURCE = gql`
  mutation deleteResource($id: Int!) {
    deleteResource(id: $id)
  }
`
