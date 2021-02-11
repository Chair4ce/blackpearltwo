import React from 'react'
import './App.css'
import ResourceModel from './store/site/ResourceModel'
import client from './apolloClient'
import { FETCH_RESOURCES } from './store/site/Queries/FETCH_RESOURCES'
import ResourceCandyBar from './component/candyBar/ResourceCandyBar'
import CandyBarInfo from './component/candyBar/CandyBarInfo'

class App extends React.Component {
  state = { data: [] as ResourceModel[], loading: null, errors: null }

  componentDidMount() {
    client
      .query({
        query: FETCH_RESOURCES,
      })
      .then((response) =>
        this.setState({
          data: response.data.resources,
          loading: response.data.loading,
          errors: response.data.errors,
        })
      )
  }
  render() {
    return (
      <div data-testid="app" className="App">
        {this.state.loading ? (
          <p>Loading... </p>
        ) : this.state.errors ? (
          <p>Uh oh!</p>
        ) : this.state.data && this.state.data !== undefined ? (
          <div>
            {this.state.data.map((resource: any) => (
              <ResourceCandyBar>
                <CandyBarInfo status={false} title={resource.title} url={resource.url} />
              </ResourceCandyBar>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
