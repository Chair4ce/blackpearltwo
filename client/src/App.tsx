import React, { useEffect, useState } from "react";
import ResourceCard from "./component/resourceCard/resourceCard";
import classNames from "classnames";
import TimeZoneClock from "./component/timeZoneClock/TimeZoneClock";
import ResourceModel from "./store/ResourceModel";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_RESOURCES } from "./store/site/Queries/FETCH_RESOURCES";
import MenuBtn from "./icons/menuBtn";
import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";
import { EDIT_RESOURCE_CARD } from "./store/site/Mutations/EDIT_RESOURCE_CARD";
import Pearlogo from "./icons/Pearl";
import { Transition } from "@headlessui/react";
import SmallPearlogo from "./icons/SmallPearl";
import RedFiveLogo from "./icons/redFiveLogo";
import { Scrollbar } from "react-scrollbars-custom";
import ClickAwayListener from "react-click-away-listener";

export interface ResourceData {
  resources: ResourceModel[]
}

export interface WorkCenter {
  id: number,
  title: string
}

function App() {
  const { loading: isLoading, error, data } = useQuery<ResourceData>(FETCH_RESOURCES);

  const [resources, setResources] = useState([] as ResourceModel[] | undefined);

  const [selectedWC, setSelectedWC] = useState({ id: 0, title: "FMV" } as WorkCenter);

  const [showDrawer, toggleDrawer] = useState(false);

  const [showWCMenu, toggleWCMenu] = useState(false);


  useEffect(() => {
    !isLoading && setResources(data?.resources);
  }, [data]);

  const [editResourceCard, { loading: loadingEdit }] = useMutation(EDIT_RESOURCE_CARD, {
    refetchQueries: [
      {
        query: FETCH_RESOURCES
      }
    ]
  });

  function dragEnd(r: DropResult) {
    if (r.destination?.droppableId) {

      let newPos = r.destination.index;
      editResourceCard({ variables: { id: r.draggableId, card: r.destination?.droppableId, pos: newPos + 1 } })
        .then(({ data }) => {

        })
        .catch((e: any) => {

        });
    }
  }

  function toggleMenu() {
    toggleDrawer(prev => !prev);
  }


  function handleWCMenuClick(selected: WorkCenter) {
    toggleWCMenu(prev => !prev);
    setSelectedWC(selected);
  }

  return (
    <div data-testid="App" className={classNames("app flex")}>
      <div className={classNames("widgetDrawer block", !showDrawer ? "" : "widgetOpened")}>
        <MenuBtn callback={toggleMenu}
                 className={classNames("menu-btn relative float-right top-2 right-2", !showDrawer ? "" : "close")} />

        <Transition
          show={!showDrawer}
          enter="transition delay-500 ease-in duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-20"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {(ref) => (
            <SmallPearlogo className="relative top-14 " />
          )}
        </Transition>


        <Transition
          show={showDrawer}
          enter="transition delay-500 ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {(ref) => (
            <>
              <Pearlogo className={classNames("justify-center items-center w-full top-0 flex")} />
              <div className=" relative widgetContainer block w-full h-full top-0 p-3">
                <div className="widgetElement flex w-full h-36 rounded-sm p-2 mt-3 shadow-lg">

                </div>
                <div className="widgetElement flex w-full h-36 rounded-sm p-2 mt-3 shadow-lg">

                </div>
                <div className="widgetElement flex w-full h-36  rounded-sm p-2 mt-3 shadow-lg">

                </div>
                <div className="widgetElement flex w-full h-36  rounded-sm p-2 mt-3 shadow-lg">

                </div>
                <div className=" flex w-full h-full bg-black rounded-sm p-2 mt-3 shadow-lg">
                  <RedFiveLogo className="" />
                </div>
              </div>
            </>
          )}
        </Transition>
      </div>
      <div className="mainView flex flex-col flex-shrink h-full w-full">
        <div className="header flex flex-row flex-shrink justify-start items-center h-20 w-full ml-2">
          <div className="w-max z-20 ml-2">
            {/*<label id="listbox-label" className="block text-sm font-medium text-gray-700">*/}
            {/*  Team*/}
            {/*</label>*/}
            <div className="mt-1 relative">
              <button type="button"
                      onClick={() => toggleWCMenu(prev => !prev)}
                      className="relative cursor-pointer w-40 bg-gray-700  rounded-sm shadow-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                <span className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <span className="ml-3 block truncate text-white">
                  {selectedWC.title}
                  </span>

                  </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd" />
                    </svg>
                </span>
              </button>

              <Transition
                show={showWCMenu}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                {(ref) => (
                  <ClickAwayListener onClickAway={() => toggleWCMenu(prev => !prev)}>
                    <ul
                      className="wCmenuItems absolute z-30 mt-1 w-max shadow-lg overflow-hidden max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm"
                      tabIndex={-1} role="listbox" aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-option-3">
                      <Scrollbar translateContentSizeXToHolder={true} style={{ height: 160 }}>


                        <li className=" text-gray-900 w-min cursor-default select-none relative py-2 pl-3 pr-9"
                            id="listbox-option-0"
                            onClick={() => handleWCMenuClick({ id: 0, title: "FMV" })}
                            role="option">
                          <div className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />

                            <span className="font-normal ml-3 block truncate text-white">
                    FMV
                    </span>
                          </div>

                          {/*Only show for selected item*/}
                          {/*<span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">*/}
                          {/*  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"*/}
                          {/*       fill="currentColor" aria-hidden="true">*/}
                          {/*  <path fill-rule="evenodd"*/}
                          {/*        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"*/}
                          {/*        clip-rule="evenodd" />*/}
                          {/*</svg>*/}
                          {/*  </span>*/}
                        </li>
                        <li className=" cursor-default select-none relative py-2 pl-3 pr-9"
                            id="listbox-option-0"
                            onClick={() => handleWCMenuClick({ id: 1, title: "High Alt" })}
                            role="option">
                          <div className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />

                            <span className="font-normal ml-3 block truncate text-white">
                    High Alt
                    </span>
                          </div>

                          {/*Only show for selected item*/}
                          {/*<span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">*/}
                          {/*  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"*/}
                          {/*       fill="currentColor" aria-hidden="true">*/}
                          {/*  <path fill-rule="evenodd"*/}
                          {/*        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"*/}
                          {/*        clip-rule="evenodd" />*/}
                          {/*</svg>*/}
                          {/*  </span>*/}
                        </li>
                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                            id="listbox-option-0"
                            onClick={() => handleWCMenuClick({ id: 2, title: "Sigint" })}
                            role="option">
                          <div className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />

                            <span className="font-normal ml-3 block truncate text-white">
                    Sigint
                    </span>
                          </div>

                          {/*Only show for selected item*/}
                          {/*<span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">*/}
                          {/*  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"*/}
                          {/*       fill="currentColor" aria-hidden="true">*/}
                          {/*  <path fill-rule="evenodd"*/}
                          {/*        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"*/}
                          {/*        clip-rule="evenodd" />*/}
                          {/*</svg>*/}
                          {/*  </span>*/}
                        </li>
                        <li className=" cursor-default select-none relative py-2 pl-3 pr-9"
                            id="listbox-option-0"
                            onClick={() => handleWCMenuClick({ id: 3, title: "Fusion" })}
                            role="option">
                          <div className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />

                            <span className="font-normal ml-3 block truncate text-white">
                    Fusion
                    </span>
                          </div>

                          {/*Only show for selected item*/}
                          {/*<span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">*/}
                          {/*  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"*/}
                          {/*       fill="currentColor" aria-hidden="true">*/}
                          {/*  <path fill-rule="evenodd"*/}
                          {/*        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"*/}
                          {/*        clip-rule="evenodd" />*/}
                          {/*</svg>*/}
                          {/*  </span>*/}
                        </li>
                      </Scrollbar>
                    </ul>
                  </ClickAwayListener>
                )}
              </Transition>
            </div>
          </div>
          <TimeZoneClock />
        </div>

        <div className="resourceTab flex flex-col flex-shrink  w-full ml-2">
          <div className="resourceTabRow flex flex-row justify-start items-start flex-shrink w-full h-1">

            {/*<div*/}
            {/*  className="resourceTabHeader hover:bg-gray-500 rounded-t-md bg-gray-600 flex flex-row flex-shrink w-min justify-between items-center h-8 ml-1 cursor-pointer">*/}
            {/*  <h3 className="text-white whitespace-nowrap ml-2">FMV kjasdf;ljasdflkjhasfldkjhasdflkjahsdks</h3>*/}
            {/*  <button*/}
            {/*    // disabled={props.active}*/}
            {/*    type="button"*/}
            {/*    className="candyBarMenuBtn focus:outline-none flex items-center justify-center rounded-md"*/}
            {/*    id="options-menu"*/}
            {/*    aria-expanded="true"*/}
            {/*    aria-haspopup="true"*/}
            {/*  >*/}
            {/*    <svg*/}
            {/*      className=" h-5 w-5"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*      viewBox="0 0 20 20"*/}
            {/*      fill="currentColor"*/}
            {/*      aria-hidden="true"*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        fillRule="evenodd"*/}
            {/*        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
            {/*        clipRule="evenodd"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  </button>*/}
            {/*</div>*/}


            {/*<div className="resourceTabHeader hover:bg-gray-500 rounded-t-md bg-gray-600 flex flex-shrink w-28 justify-center items-center h-8 ml-1 cursor-pointer">*/}
            {/*  <h3 className="text-white ">High Alt</h3>*/}
            {/*</div>*/}
            {/*<div className="resourceTabHeader hover:bg-gray-500 rounded-t-md bg-gray-600 flex flex-shrink  w-28 justify-center items-center h-8 ml-1 cursor-pointer">*/}
            {/*  <h3 className="text-white ">Fusion</h3>*/}
            {/*</div>*/}
            {/*<div className="resourceTabHeader hover:bg-black rounded-t-md bg-transparent flex flex-shrink w-28 justify-center items-center h-8 ml-1 cursor-pointer">*/}
            {/*  <h3 className="text-white ">Add +</h3>*/}
            {/*</div>*/}

          </div>

          <DragDropContext onDragEnd={(r) => dragEnd(r)}>
            <div className="resourceColumns flex flex-row flex-shrink flex-grow p-1">
              <div
                className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                <ResourceCard title="Main" data={resources?.filter((r: ResourceModel) => {
                  return (
                    (r.tab === selectedWC.id) && (r.card === 0)
                  );
                }).slice()
                  .sort((a, b) => {
                    return a.pos - b.pos;
                  })}
                              tab={selectedWC.id} card={0} loading={loadingEdit} />
              </div>
              <div
                className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                <ResourceCard title="Situation Awareness"
                              data={resources?.filter((r: ResourceModel) => {
                                return (r.tab === selectedWC.id) && (r.card === 1);
                              }).slice()
                                .sort((a, b) => {
                                  return a.pos - b.pos;
                                })} tab={selectedWC.id}
                              card={1} loading={loadingEdit} />
              </div>
              <div
                className="resourceColumn flex flex-col flex-shrink flex-grow justify-start cursor-pointer rounded-sm overflow-y-hidden mr-1 p-0.5">
                <ResourceCard title="Target Research"
                              data={resources?.filter((r: ResourceModel) => {
                                return (r.tab === selectedWC.id) && (r.card === 2);
                              }).slice()
                                .sort((a, b) => {
                                  return a.pos - b.pos;
                                })} tab={selectedWC.id}
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
