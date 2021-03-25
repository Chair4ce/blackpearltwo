import * as React from 'react'
import classNames from 'classnames'
import ResourceCandyBar from '../candyBar/ResourceCandyBar'
import CandyBarInfo from '../candyBar/CandyBarInfo'
import ResourceModel from '../../store/ResourceModel'
import { ApolloError, useMutation, useQuery } from '@apollo/client'
import { ChangeEvent, useReducer, useState } from 'react'
import { CREATE_RESOURCE } from '../../store/site/Mutations/CREATE_RESOURCE'
import { gql } from '@apollo/client/core'
import { FETCH_RESOURCES } from '../../store/site/Queries/FETCH_RESOURCES'
import { ResourceData } from '../../App'

export interface Props {
  title: string
  className?: string
}

const ResourceCard: React.FC<Props> = (props) => {
  const { loading, error, data } = useQuery<ResourceData>(FETCH_RESOURCES)

  const [showAdd, toggleAdd] = useState(false)
  const [resource, setResource] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      title: '',
      url: '',
    }
  )

  const [createResource, { error: mutationError }] = useMutation(CREATE_RESOURCE, {
    update(cache, { data: { createResource } }) {
      {
        cache.modify({
          fields: {
            resources(existingResources = []) {
              const newResourceRef = cache.writeFragment({
                data: createResource,
                fragment: gql`
                  fragment NewResource on Resource {
                    id
                    title
                    url
                  }
                `,
              })
              return [...existingResources, newResourceRef]
            },
          },
        })
      }
    },
  })

  function handleAdd() {
    toggleAdd((prev) => !prev)
  }

  const handleSubmit = () => {
    createResource({ variables: { title: resource.title, url: resource.url } })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })

    toggleAdd((prev) => !prev)
  }

  const handleChangeValue = (event: ChangeEvent<any>) => {
    const { name, value } = event.target
    setResource({ [name]: value })
  }

  return (
    <div data-testid="ResourceCard" className={classNames(props.className, '')}>
      <div className={'resourceColumnHeader'}>
        <h2>{props.title}</h2>
        <div className={'cardActions'}>
          {showAdd && (
            <>
              <button className={classNames('cancelBtn', 'actionResourceBtn')} onClick={handleAdd}>
                <a>Cancel</a>
              </button>
              <button className={classNames('saveBtn', 'actionResourceBtn')} onClick={handleSubmit}>
                <a>Save</a>
              </button>
            </>
          )}

          {!showAdd ? (
            <button className={'addResourceBtn'} onClick={handleAdd}>
              <a>Add Link</a>
            </button>
          ) : null}
        </div>
      </div>
      {showAdd ? (
        <div className={'addResource'}>
          <div className={'addResourceForm'}>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={resource.name}
              onChange={(e) => handleChangeValue(e)}
              className="border border-gray-300 p-2 h-8 w-full mb-1  rounded-sm focus:outline-none"
            />
            <textarea
              value={resource.url}
              name="url"
              placeholder="url"
              onChange={(e) => handleChangeValue(e)}
              className="border app w-full  p-2 h-full max-h-80 focus:outline-none rounded-sm"
            ></textarea>
          </div>
        </div>
      ) : null}
      {loading ? (
        <p>Loading... </p>
      ) : error ? (
        <p>Uh oh!</p>
      ) : data ? (
        <div>
          {data.resources.map((resource: ResourceModel) => (
            <ResourceCandyBar
              key={resource.id}
              active={showAdd}
              url={resource.url}
              name={resource.title}
            >
              <CandyBarInfo status={true} title={resource.title} url={resource.url} />
            </ResourceCandyBar>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ResourceCard
