import * as React from "react";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import ResourceCandyBar from "../candyBar/ResourceCandyBar";
import ResourceModel from "../../store/ResourceModel";
import { useMutation } from "@apollo/client";
import { CREATE_RESOURCE } from "../../store/site/Mutations/CREATE_RESOURCE";
import { FETCH_RESOURCES } from "../../store/site/Queries/FETCH_RESOURCES";
import AddResourceIcon from "../../icons/AddResource";
import { Transition } from "@headlessui/react";
import { DELETE_RESOURCE } from "../../store/site/Mutations/DELETE_RESOURCE";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export interface Props {
  title: string
  tab: number
  card: number
  data: ResourceModel[] | undefined
  className?: string
}

const ResourceCard: React.FC<Props> = (props) => {
  let textInput: { focus: () => void } | null = null;
  const [showAdd, toggleAdd] = useState(false);

  const [showMenu, setMenuVisibility] = useState(-1);

  const handleMenuClick = (index: number, reset?: boolean, action?: string) => {
    if (!reset) {
      setMenuVisibility(index);
    } else {
      if (action) {
        switch (action) {
          case "edit":
            console.log("editing");
            break;
          case "delete":
            console.log("attempting to delete " + index);
            deleteResource({ variables: { id: index } })
              .then(({ data }) => {
                console.log(data);
              })
              .catch((e) => {
                console.log(e);
              });
            break;
          default:
        }
      }
      setMenuVisibility(-1);
    }
  };

  function handleAdd() {
    toggleAdd((prev) => !prev);
  }

  const [resource, setResource] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      title: "",
      url: ""
    }
  );

  const [createResource] = useMutation(CREATE_RESOURCE, {
    refetchQueries: [
      {
        query: FETCH_RESOURCES
      }
    ]
  });

  const [deleteResource] = useMutation(DELETE_RESOURCE, {
    refetchQueries: [
      {
        query: FETCH_RESOURCES
      }
    ]
  });

  useEffect(() => {
    setResource(null);
  }, [createResource]);

  useEffect(() => {
    setTimeout(() => {
      let element = document.getElementById("resourceTitleInput");

      if (element instanceof HTMLInputElement) {
        element.focus();
      }
    }, 100);

    return function cleanup() {

    };
  }, [showAdd]);

  const handleSubmit = () => {
    if (resource.url.startsWith("http")) {
      createResource({ variables: { title: resource.title, url: resource.url, tab: props.tab, card: props.card } })
        .then(({ data }) => {
          // console.log(data)
        })
        .catch((e) => {
          console.log(e);
        });
      setResource("");
      toggleAdd((prev) => !prev);
    }
  };
  const handleChangeValue = (event: ChangeEvent<any>) => {
    const { name, value } = event.target;
    setResource({ [name]: value });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  function drop() {
    console.log("dropped");
  }

  return (
    <div data-testid="ResourceCard" className="resourceCard flex flex-col flex-shrink flex-grow flex-grow h-screen ">
      <div className="resourceColumnHeader flex flex-row w-full sticky h-10 rounded-sm">
        <h2
          className="font-bold text-left min-w-0 truncate text-xl w-full h-full ml-4 leading-10 text-white">{props.title}</h2>
        <div className="cardActions flex justify-center items-center w-20 h-10">
          <button
            className="addResourceBtn flex hover:bg-gray-700 border-none outline-none cursor-pointer w-20 h-8 mr-1 rounded-sm justify-evenly items-center bg-transparent"
            onClick={handleAdd}>
            <a>Add</a>
            <AddResourceIcon />
          </button>
        </div>
      </div>

      <Transition
        show={showAdd}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div className="resourceForm addResource flex flex-col flex-shrink rounded-sm p-0.5 ">
            <div id={"addForm"} className={"addResourceForm"}>
              <input
                id="resourceTitleInput"
                type="text"
                name="title"
                placeholder="title"
                value={resource.name}
                onChange={(e) => handleChangeValue(e)}
                className="textInput border border-gray-300 p-2 h-8 w-full mb-1 rounded-sm focus:outline-none"
              />
              <textarea
                name="url"
                placeholder="url"
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => handleChangeValue(e)}
                className="textInput border app w-full  p-2 h-full max-h-80 focus:outline-none rounded-sm"
              ></textarea>
            </div>
            <div className="resourceFormBtn flex w-full items-center h-10 mt-1">
              <button className="cancelBtn actionResourceBtn" onClick={handleAdd}>
                <a>CANCEL</a>
              </button>
              <button className="saveBtn actionResourceBtn" onClick={handleSubmit}>
                <a>SAVE</a>
              </button>
            </div>
          </div>
        )}
      </Transition>

      {/*<Scrollbar className="w-full h-full">*/}


      <DragDropContext onDragEnd={drop}>
        <Droppable droppableId={props.card.toString()} >
          {(provided) =>
            {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}
                 className="flex flex-col flex-shrink flex-grow h-screen w-full resources pl-0.3">
              {props.data
                ? props.data
                  // .slice()
                  // .sort((a, b) => {
                  //   return b.id - a.id;
                  // })
                  .map((resource: ResourceModel, index: number) =>
                    <Draggable key={resource.id} draggableId={resource.id.toString()} index={index}>
                      {(provided) => {
                        return (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <ResourceCandyBar
                              key={resource.id}
                              resource={resource}
                              index={index}
                              tab={props.tab}
                              card={props.card}
                              active={showMenu}
                              showMenu={showMenu == resource.id}
                              callback={handleMenuClick}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  )
                : null}
                {provided.placeholder}
            </div>
            )}
          }
        </Droppable>
      </DragDropContext>
      {/*</Scrollbar>*/}
    </div>
  );
};

export default ResourceCard;
