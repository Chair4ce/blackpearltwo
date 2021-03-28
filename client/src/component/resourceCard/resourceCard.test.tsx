import * as React from 'react'
import { render } from '@testing-library/react'
import { ApolloProvider } from '@apollo/client'
import ResourceCard from './resourceCard'
import client from '../../apolloClient'

function renderMainView() {
  return render(
    <ApolloProvider client={client}>
      <ResourceCard title={'facebook'} />
    </ApolloProvider>
  )
}
test('renders resourceCard', async () => {
  const { findByTestId } = renderMainView()
  const component = await findByTestId('ResourceCard')
  expect(component).toBeTruthy()
})
