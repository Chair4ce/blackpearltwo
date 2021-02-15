import { gql } from '@apollo/client'

export const FETCH_LINK_PREVIEW = gql`
  query getLinkPreviewInfo($text: String!) {
    linkPreview(url: $text) {
      domain
      url
      title
      desc
      image
      imageAlt
    }
  }
`
