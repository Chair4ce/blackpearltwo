import * as React from 'react'
import classNames from 'classnames'
import ResourceCandyBar from '../candyBar/ResourceCandyBar'
import CandyBarInfo from '../candyBar/CandyBarInfo'
import ResourceModel from '../../store/ResourceModel'
import { ApolloError } from '@apollo/client'
import { useState } from 'react'

export interface Props {
  loading: boolean | null
  errors: ApolloError | undefined
  title: string
  data?: ResourceModel[]
  className?: string
}

const ResourceCard: React.FC<Props> = (props) => {
  const [showAdd, toggleAdd] = useState(false)

  function handleAdd() {
    toggleAdd((prev) => !prev)
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
              <button className={classNames('saveBtn', 'actionResourceBtn')} onClick={handleAdd}>
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
              placeholder="title"
              className="border border-gray-300 p-2 h-8 w-full mb-1  rounded-sm focus:outline-none"
            />
            <textarea
              defaultValue={'https://'}
              placeholder="url"
              className="border app w-full  p-2 h-full max-h-80 focus:outline-none rounded-sm"
            ></textarea>
          </div>
        </div>
      ) : null}
      {props.loading ? (
        <p>Loading... </p>
      ) : props.errors ? (
        <p>Uh oh!</p>
      ) : props.data ? (
        <div>
          {props.data.map((resource: ResourceModel) => (
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
