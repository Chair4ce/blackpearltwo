import * as React from 'react'
import { render } from '@testing-library/react'
import ResourceCandyBar from './ResourceCandyBar'
import { ApolloProvider } from '@apollo/client'
import client from '../../apolloClient'

function renderMainView() {
  return render(
    <ApolloProvider client={client}>
      <ResourceCandyBar />
    </ApolloProvider>
  )
}
test('renders ResourceCandyBar', async () => {
  const { findByTestId } = renderMainView()
  const component = await findByTestId('CandyBarWrapper')
  expect(component).toBeTruthy()
})
