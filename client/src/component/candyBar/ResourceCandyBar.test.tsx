import * as React from 'react'
import { render } from '@testing-library/react'
import ResourceCandyBar from './ResourceCandyBar'
import { ApolloProvider } from '@apollo/client'
import client from '../../apolloClient'
import ResourceModel from "../../store/ResourceModel";

function renderMainView() {
  const mockFn = jest.fn()
  return render(
    <ApolloProvider client={client}>
      <ResourceCandyBar
        active={1}
        resource={new ResourceModel(1, "facebook", "https://google.com", 200, 0, 1, 1)}
        index={2}
        tab={0}
        card={1}
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
