import React from 'react'
import ResourceCard from './component/resourceCard/resourceCard'
import classNames from 'classnames'

function App() {
  return (
    <div data-testid="App" className={classNames('app')}>
      <div className="header h-20 w-full"></div>
      <div className={'resourceColumn'}>
        <ResourceCard title={'Main'} />
      </div>
    </div>
  )
}

export default App
