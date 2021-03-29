import * as React from 'react'
import { ChangeEvent, useEffect, useReducer, useState } from 'react'
import classNames from 'classnames'
import ResourceCandyBar from '../candyBar/ResourceCandyBar'
import ResourceModel from '../../store/ResourceModel'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_RESOURCE } from '../../store/site/Mutations/CREATE_RESOURCE'
import { FETCH_RESOURCES } from '../../store/site/Queries/FETCH_RESOURCES'
import AddResourceIcon from '../../icons/AddResource'
import { Transition } from '@headlessui/react'
import { Scrollbar } from 'react-scrollbars-custom'
import { DELETE_RESOURCE } from '../../store/site/Mutations/DELETE_RESOURCE'

export interface Props {
  title: string
  className?: string
}

export interface ResourceData {
  resources: ResourceModel[]
}

const ResourceCard: React.FC<Props> = (props) => {
  const [showAdd, toggleAdd] = useState(false)

  const { loading, error, data } = useQuery<ResourceData>(FETCH_RESOURCES)

  const [showMenu, setMenuVisibility] = useState(-1)

  const handleMenuClick = (index: number, reset?: boolean, action?: string) => {
    if (!reset) {
      setMenuVisibility(index)
    } else {
      if (action) {
        switch (action) {
          case 'edit':
            console.log('editing')
            break
          case 'delete':
            console.log('attempting to delete ' + index)
            deleteResource({ variables: { id: index } })
              .then(({ data }) => {
                console.log(data)
              })
              .catch((e) => {
                console.log(e)
              })
            break
          default:
        }
      }
      setMenuVisibility(-1)
    }
  }

  function handleAdd() {
    toggleAdd((prev) => !prev)
  }

  const [resource, setResource] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      title: '',
      url: '',
    }
  )

  const [createResource] = useMutation(CREATE_RESOURCE, {
    refetchQueries: [
      {
        query: FETCH_RESOURCES,
      },
    ],
  })

  const [deleteResource] = useMutation(DELETE_RESOURCE, {
    refetchQueries: [
      {
        query: FETCH_RESOURCES,
      },
    ],
  })

  useEffect(() => {
    setResource(null)
  }, [createResource])

  const handleSubmit = () => {
    if (resource.url.startsWith('http')) {
      createResource({ variables: { title: resource.title, url: resource.url } })
        .then(({ data }) => {
          // console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
      setResource('')
      toggleAdd((prev) => !prev)
    }
  }
  const handleChangeValue = (event: ChangeEvent<any>) => {
    const { name, value } = event.target
    setResource({ [name]: value })
  }

  return (
    <div data-testid="ResourceCard" className={classNames(props.className, 'h-full')}>
      <div className={'resourceColumnHeader'}>
        <h2>{props.title}</h2>
        <div className={'cardActions'}>
          <button className={'addResourceBtn'} onClick={handleAdd}>
            <a>Add</a>
            <AddResourceIcon />
          </button>
        </div>
      </div>

      <Transition
        show={showAdd}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className={'addResource mb-2'}>
            <div className={'addResourceForm'}>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={resource.name}
                onChange={(e) => handleChangeValue(e)}
                className="textInput border border-gray-300 p-2 h-8 w-full mb-1  rounded-sm focus:outline-none"
              />
              <textarea
                name="url"
                placeholder="url"
                onChange={(e) => handleChangeValue(e)}
                className="textInput border app w-full  p-2 h-full max-h-80 focus:outline-none rounded-sm"
              ></textarea>
            </div>
            {showAdd && (
              <div className="flex w-full justify-center mt-1 ">
                <button
                  className={classNames('cancelBtn', 'actionResourceBtn')}
                  onClick={handleAdd}
                >
                  <a>CANCEL</a>
                </button>
                <button
                  className={classNames('saveBtn', 'actionResourceBtn', 'ml-1')}
                  onClick={handleSubmit}
                >
                  <a>SAVE</a>
                </button>
              </div>
            )}
          </div>
        )}
      </Transition>

      <Scrollbar style={{ width: 312, height: 706 }}>
        <div className={'h-full'}>
          {data
            ? data.resources
                .slice()
                .sort((a, b) => {
                  return b.id - a.id
                })
                .map((resource: ResourceModel) => (
                  <ResourceCandyBar
                    key={resource.id}
                    id={resource.id}
                    active={showAdd}
                    url={resource.url}
                    title={resource.title}
                    showMenu={showMenu == resource.id}
                    callback={handleMenuClick}
                  />
                ))
            : null}
        </div>
      </Scrollbar>
    </div>
  )
}

export default ResourceCard
