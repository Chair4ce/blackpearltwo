import React from 'react'
import { FETCH_RESOURCES } from './store/site/Queries/FETCH_RESOURCES'
import { useQuery } from '@apollo/client'
import ResourceModel from './store/ResourceModel'
import ResourceCard from './component/resourceCard/resourceCard'
import classNames from 'classnames'

export interface Props {
  className?: string
}

export interface ResourceData {
  resources: ResourceModel[]
}

const App: React.FC<Props> = (props) => {
  const { loading, error, data } = useQuery<ResourceData>(FETCH_RESOURCES)

  return (
    <div data-testid="App" className={classNames(props.className, 'app')}>
      <div className={'resourceColumn'}>
        <ResourceCard title={'Main'} loading={loading} data={data?.resources} errors={error} />
      </div>
    </div>
  )
}

export default App
