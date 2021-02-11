import * as React from 'react'
import { render } from '@testing-library/react'
import CandyBarInfo from './CandyBarInfo'
import { ApolloProvider } from '@apollo/client'
import client from '../../apolloClient'

function renderMainView() {
  return render(
    <ApolloProvider client={client}>
      <CandyBarInfo status={true} title={'facebook'} url={'facebook.com'} />
    </ApolloProvider>
  )
}
test('renders CandyBarInfo', async () => {
  const { findByTestId } = renderMainView()
  const component = await findByTestId('CandyBarInfo')
  expect(component).toBeTruthy()
})
