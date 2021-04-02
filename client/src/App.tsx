import React from 'react'
import ResourceCard from './component/resourceCard/resourceCard'
import classNames from 'classnames'
import Pearlogo from "./icons/Pearl";
import TimeZoneClock from "./component/timeZoneClock/TimeZoneClock";
import DrawerIcon from "./icons/DrawerIcon";
import ResourceModel from "./store/ResourceModel";
import {useQuery} from "@apollo/client";
import {FETCH_RESOURCES} from "./store/site/Queries/FETCH_RESOURCES";


export interface ResourceData {
    resources: ResourceModel[]
}

function App() {
    const { loading, error, data } = useQuery<ResourceData>(FETCH_RESOURCES)

    return (
        <div data-testid="App" className={classNames('app flex')}>
            <div className="widgetDrawer">
                <DrawerIcon className="relative float-right top-2 right-2 "/>
                <Pearlogo/>
            </div>
            <div className="mainView h-full w-full">
                <div className="header flex items-start h-11 w-full">
                    <TimeZoneClock/>
                </div>


                <div className="resourceTab w-full block ml-1">
                    <div className="resourceTabHeader flex items-start w-full h-8 ml-1">
                        <h3 className="text-white ">FMV</h3>
                    </div>
                    <div className="resourceColumns flex items-start p-1">
                        <div className="resourceColumn mr-1">
                            <ResourceCard title="Main" data={data?.resources.filter((m: ResourceModel) => m.card === 0)} tab={0} card={0}/>
                        </div>
                        <div className="resourceColumn mr-1">
                            <ResourceCard title="Situation Awareness" data={data?.resources.filter((m: ResourceModel) => m.card === 1)} tab={0} card={1}/>
                        </div>
                        <div className="resourceColumn mr-1">
                            <ResourceCard title="Target Research" data={data?.resources.filter((m: ResourceModel) => m.card === 2)} tab={0} card={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
