import * as React from 'react'
import { render } from '@testing-library/react'
import ResourceCandyBar from './ResourceCandyBar'
import { ApolloProvider } from '@apollo/client'
import client from '../../apolloClient'

function renderMainView() {
  const mockFn = jest.fn()
  return render(
    <ApolloProvider client={client}>
      <ResourceCandyBar
        active={true}
        id={1}
        title={'facebook'}
        url={'facebook.com'}
        callback={mockFn}
        showMenu={true}
      />
    </ApolloProvider>
  )
}
test('renders ResourceCandyBar', async () => {
  const { findByTestId } = renderMainView()
  const component = await findByTestId('CandyBarWrapper')
  expect(component).toBeTruthy()
})
