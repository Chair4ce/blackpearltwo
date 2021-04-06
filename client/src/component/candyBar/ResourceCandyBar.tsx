import * as React from 'react'
import {ChangeEvent, useEffect, useReducer, useState} from 'react'
import GlobeIcon from '../../icons/Globe'
import ClickAwayListener from 'react-click-away-listener'
import {Transition} from '@headlessui/react'
import {useMutation} from '@apollo/client'
import {FETCH_RESOURCES} from '../../store/site/Queries/FETCH_RESOURCES'
import {UPDATE_RESOURCE} from '../../store/site/Mutations/EDIT_RESOURCE'
import ResourceModel from "../../store/ResourceModel";

export interface Props {
  active: number
  resource: ResourceModel
  index: number
  tab: number
  card: number
  showMenu: boolean
  callback: (index: number, reset?: boolean, action?: string) => void
  className?: string
}

const ResourceCandyBar: React.FC<Props> = (props) => {
  const [showEdit, toggleEdit] = useState(false)

  const [updateResource] = useMutation(UPDATE_RESOURCE, {
    refetchQueries: [
      {
        query: FETCH_RESOURCES,
      },
    ],
  })

  const [resource, setResource] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      title: '',
      url: '',
    }
  )

  const handleChangeValue = (event: ChangeEvent<any>) => {
    const { name, value } = event.target
    setResource({ [name]: value })
  }

  function handleClick(id: number, action?: string) {
    if (!props.showMenu) {
      props.callback(id)
    } else {
      if (action) {
        props.callback(props.resource.id, true, action)
      }
      props.callback(-1, true)
    }
  }

  const handleSubmit = () => {
    console.log('submitting')
    if (resource.url.startsWith('http')) {
      updateResource({ variables: { id: props.resource.id, title: resource.title, url: resource.url, tab: props.tab, card: props.card } })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((e: any) => {
          console.log(e)
        })
      toggleEdit((prev) => !prev)
      setResource('')
    }
  }

  function handleCancel() {
    toggleEdit((prev) => !prev)
    setResource('')
  }
  function handleEdit() {
    props.callback(-1, true)
    toggleEdit((prev) => !prev)
    setResource({ ['title']: props.resource.title })
    setResource({ ['url']: props.resource.url })
  }

  const handleClickAway = () => {
    props.callback(-1, true)
  }


  useEffect(() => {



    setTimeout(() => {
      let parent = document.getElementById('editResourceForm')
      let element = document.getElementById('resourceTitleInput')

      if (element instanceof HTMLInputElement) {
        if(props.index > 18) {
          parent!.scrollIntoView()
        }

        element.focus()
      }
    }, 25)



    return function cleanup() {

    };
  }, [showEdit])

  useEffect(() => {

    if (props.resource.id > 20) {
    setTimeout(() => {
      let element = document.getElementById('resourceActionMenu')

      if (element instanceof HTMLInputElement) {
        if(props.index > 18) {
          element!.scrollIntoView()
        }

      }
    }, 905)
    }

    return function cleanup() {

    };
  }, [props.showMenu])



  return (
    <React.Fragment>
        <div
          data-testid="CandyBarWrapper "
          className="candyBarWrapper flex flex-row flex-shrink h-8 w-full rounded-sm mt-1 mr-0 mb-1 ml-0"
        >
          <div className="flex items-center justify-between h-full w-full pr-0.5">
            <div data-testid="CandyBarInfo" className="candyBarInfo flex h-9 m-0.5 items-center min-w-0 rounded-sm flex-grow">
              <a
                className="candyBarTargetLink  flex min-w-0 rounded-sm items-center h-5"
                href={props.resource.url}
                target={'_blank'}
                title={props.resource.title}
              >
                <div className="candyBarInfocon flex justify-center items-center min-w-min h-5 mr-1.5 ml-1">
                  <GlobeIcon status={props.resource.status === 200} />
                </div>
                <h2 className="truncate text-white font-bold w-56">{props.resource.title}</h2>
              </a>
            </div>

            <div className="candyBarMenu rounded-sm flex items-cent er flex-grow-0 flex-shrink-0">
              <div className="relative inline-block text-left">
                <div>
                  <button
                      // disabled={props.active}
                    type="button"
                    className="candyBarMenuBtn focus:outline-none flex items-center justify-center rounded-md"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => handleClick(props.resource.id)}
                  >
                    <svg
                      className=" h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <Transition
                  show={props.showMenu}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                >
                  {(ref) => (
                    <ClickAwayListener onClickAway={handleClickAway}>
                      <div
                        id={'resourceActionMenu'}
                        className="resourceActionMenu origin-left absolute z-50 right-0 mt-2 w-18 rounded-sm shadow-lg bg-black ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="menuItem block px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => handleEdit()}
                          >
                            Edit
                          </a>
                          <a
                            href="#"
                            className="menuItem block px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => handleClick(props.resource.id, 'delete')}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </ClickAwayListener>
                  )}
                </Transition>
              </div>
            </div>
          </div>
        </div>
      {showEdit &&
            <div id={'editResourceForm'} className="rounded-sm editResource w-full mb-2 mt-0 p-1">
              <div className={'editResourceForm'}>
                <input
                    id="resourceTitleInput"
                    type="text"
                    name="title"
                    placeholder="title"
                    value={resource.title}
                    onChange={(e) => handleChangeValue(e)}
                    className="textInput border rounded-sm border-gray-300 p-2 h-8 w-full mb-1 focus:outline-none"
                />
                <textarea
                    name="url"
                    placeholder="url"
                    value={resource.url}
                    onChange={(e) => handleChangeValue(e)}
                    className="textInput border app w-full p-2 max-h-60 focus:outline-none rounded-sm"
                />
              </div>
              <div className="resourceFormBtn flex w-full h-10 mt-1">
                <button className={'cancelBtn actionResourceBtn'} onClick={() => handleCancel()}>
                  <a>CANCEL</a>
                </button>
                <button className={'saveBtn actionResourceBtn ml-1'} onClick={() => handleSubmit()}>
                  <a>SAVE</a>
                </button>
              </div>
            </div>
        }

    </React.Fragment>
  )
}

export default ResourceCandyBar
