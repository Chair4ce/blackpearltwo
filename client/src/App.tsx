import React from 'react'
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
  return (
    <div data-testid="App" className={classNames(props.className, 'app')}>
      <div className={'resourceColumn'}>
        <ResourceCard title={'Main'} />
      </div>
    </div>
  )
}

export default App
