import React from 'react'
import ResourceCard from './component/resourceCard/resourceCard'
import classNames from 'classnames'
import Pearlogo from "./icons/Pearl";
import TimeZoneClock from "./component/timeZoneClock/TimeZoneClock";
import DrawerIcon from "./icons/DrawerIcon";
import ResourceModel from "./store/ResourceModel";
import {useQuery} from "@apollo/client";
import {FETCH_RESOURCES} from "./store/site/Queries/FETCH_RESOURCES";
import MenuBtn from "./icons/menuBtn";


export interface ResourceData {
    resources: ResourceModel[]
}

function App() {
    const {loading, error, data} = useQuery<ResourceData>(FETCH_RESOURCES)

    const menuBtn =
        document.querySelector(".menu-btn");
    const widgetDrawer =
        document.querySelector(".widgetDrawer");
    const logo =
        document.querySelector(".pearlogo");


    // Set the initial state of the menu
    let showMenu = false;
    if (menuBtn) {
        menuBtn.addEventListener("click", toggleMenu);
    }

    function toggleMenu() {
        if (!showMenu) {
            if (menuBtn) {

                menuBtn.classList.add("close");
            }
            if (widgetDrawer) {
                widgetDrawer.classList.add("widgetOpened");
            }

            if(logo) {
                logo.classList.add("hidepearlogo")
            }

            // Reset the menu state
            showMenu = true;
        } else {
            if (menuBtn) {
                menuBtn.classList.remove("close");
            }
            if (widgetDrawer) {
                widgetDrawer.classList.remove("widgetOpened");
            }
            if(logo) {
                logo.classList.remove("hidepearlogo")
            }
            // Reset the menu state
            showMenu = false;
        }
    }

    return (
        <div data-testid="App" className={classNames('app flex')}>
            <div className="widgetDrawer">
                <MenuBtn className="menu-btn relative float-right top-2 right-2 "/>
                {/*<Pearlogo className=""/>*/}
            </div>
            <div className="mainView flex flex-col flex-shrink h-full w-full">
                <div className="header flex flex-row flex-shrink justify-start h-11 w-full">
                    <TimeZoneClock/>
                </div>


                <div className="resourceTab flex flex-col flex-shrink  w-full block ml-1">
                    <div className="resourceTabHeader flex flex-shrink items-start w-full h-8 ml-1">
                        <h3 className="text-white ">FMV</h3>
                    </div>
                    <div className="resourceColumns flex flex-row flex-shrink flex-grow p-1">
                        <div
                            className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                            <ResourceCard title="Main" data={data?.resources.filter((m: ResourceModel) => m.card === 0)}
                                          tab={0} card={0}/>
                        </div>
                        <div
                            className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                            <ResourceCard title="Situation Awareness"
                                          data={data?.resources.filter((m: ResourceModel) => m.card === 1)} tab={0}
                                          card={1}/>
                        </div>
                        <div
                            className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                            <ResourceCard title="Target Research"
                                          data={data?.resources.filter((m: ResourceModel) => m.card === 2)} tab={0}
                                          card={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
