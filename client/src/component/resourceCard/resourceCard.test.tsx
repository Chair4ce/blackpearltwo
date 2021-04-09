import * as React from 'react'
import { render } from '@testing-library/react'
import { ApolloProvider } from '@apollo/client'
import ResourceCard from './resourceCard'
import client from '../../apolloClient'
import ResourceModel from "../../store/ResourceModel";
import { DragDropContext } from "react-beautiful-dnd";

function renderMainView() {
  const mockFn = jest.fn()
  return render(
    <ApolloProvider client={client}>
      <DragDropContext onDragEnd={(r) => mockFn}>
      <ResourceCard
      title={"Main"}
      tab={0}
      card={1}
      data={[new ResourceModel(1, "facebook", "https://google.com", 200, 0, 1, 1), new ResourceModel(2, "facebook", "https://google.com", 200, 0, 1, 1)]}
      loading={false}
      />
</DragDropContext>
    </ApolloProvider>
  )
}
test('renders resourceCard', async () => {
  const { findByTestId } = renderMainView()
  const component = await findByTestId('ResourceCard')
  expect(component).toBeTruthy()
})
