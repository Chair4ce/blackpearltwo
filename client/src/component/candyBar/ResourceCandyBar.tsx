import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  active: boolean
  url: string
  name: string
  className?: string
}

const ResourceCandyBar: React.FC<Props> = (props) => {
  return (
    <div data-testid="CandyBarWrapper" className={classNames(props.className, 'candyBarWrapper')}>
      <a className={'resourceLink'} href={props.url} target={'_blank'} title={props.name}>
        <div className={'resourceLinkFrame'}></div>
      </a>
      {props.children}
    </div>
  )
}

export default ResourceCandyBar
