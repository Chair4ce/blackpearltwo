import React, { useState } from "react";
import ResourceCard from "./component/resourceCard/resourceCard";
import classNames from "classnames";
import TimeZoneClock from "./component/timeZoneClock/TimeZoneClock";
import ResourceModel from "./store/ResourceModel";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_RESOURCES } from "./store/site/Queries/FETCH_RESOURCES";
import MenuBtn from "./icons/menuBtn";
import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";
import { EDIT_RESOURCE_CARD } from "./store/site/Mutations/EDIT_RESOURCE_CARD";

export interface ResourceData {
  resources: ResourceModel[]
}

function App() {
  const { loading, error, data } = useQuery<ResourceData>(FETCH_RESOURCES);

  const [dragSource, setDragSource] = useState(-1);


  const [editResourceCard, {loading: loadingEdit}] = useMutation(EDIT_RESOURCE_CARD, {

    refetchQueries: [
      {
        query: FETCH_RESOURCES
      }
    ]
  });

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

      if (logo) {
        logo.classList.add("hidepearlogo");
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
      if (logo) {
        logo.classList.remove("hidepearlogo");
      }
      // Reset the menu state
      showMenu = false;
    }
  }

function dragStart(r: DragStart) {

    if(r) {
    setDragSource(r.source.index)
    }
}

   function dragEnd(r: DropResult) {
    if (r.destination?.droppableId) {

      let newPos = r.destination.index ;
      editResourceCard({ variables: { id: r.draggableId, card: r.destination?.droppableId, pos: newPos + 1 } })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((e: any) => {

        });
      }
     setDragSource(-1)
  }


  return (
    <div data-testid="App" className={classNames("app flex")}>
      <div className="widgetDrawer">
        <MenuBtn className="menu-btn relative float-right top-2 right-2 " />
        {/*<Pearlogo className=""/>*/}
      </div>
      <div className="mainView flex flex-col flex-shrink h-full w-full">
        <div className="header flex flex-row flex-shrink justify-start h-11 w-full">
          <TimeZoneClock />
        </div>


        <div className="resourceTab flex flex-col flex-shrink  w-full block ml-1">
          <div className="resourceTabHeader flex flex-shrink items-start w-full h-8 ml-1">
            <h3 className="text-white ">FMV</h3>
          </div>

          <DragDropContext onDragStart={(r) => dragStart(r)} onDragEnd={(r) => dragEnd(r)}>
            <div className="resourceColumns flex flex-row flex-shrink flex-grow p-1">


              <div
                className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                <ResourceCard title="Main" data={data?.resources}
                              tab={0} card={0} loading={loadingEdit} />
              </div>
              <div
                className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                <ResourceCard title="Situation Awareness"
                              data={data?.resources} tab={0}
                              card={1} loading={loadingEdit} />
              </div>
              <div
                className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                <ResourceCard title="Target Research"
                              data={data?.resources} tab={0}
                              card={2} loading={loadingEdit} />
              </div>


            </div>


          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
