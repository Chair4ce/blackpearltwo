import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  url: string
  name: string
  className?: string
}

const ResourceCandyBar: React.FC<Props> = (props) => {
  return (
    <div data-testid="CandyBarWrapper" className={classNames(props.className, 'candyBarWrapper')}>
      <a className={'resourceLink'} href={props.url} target={'_blank'} title={props.name}>
        {props.children}
      </a>
    </div>
  )
}

export default ResourceCandyBar
