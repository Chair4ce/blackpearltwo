import React from 'react'
import ResourceCard from './component/resourceCard/resourceCard'
import classNames from 'classnames'
import Pearlogo from "./icons/Pearl";
import TimeZoneClock from "./component/timeZoneClock/TimeZoneClock";

function App() {
    return (
        <div data-testid="App" className={classNames('app flex')}>
            <div className="widgetDrawer">
                <Pearlogo/>
            </div>
            <div className="mainView h-full w-full">
                <div className="header h-20 w-full">
                    <TimeZoneClock/>
                </div>
                <div className="resourceColumn ml-1">
                    <ResourceCard title="Main"/>
                </div>
            </div>
        </div>
    )
}

export default App
