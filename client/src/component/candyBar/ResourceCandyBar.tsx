import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  className?: string
}

const ResourceCandyBar: React.FC<Props> = (props) => {
  return (
    <div data-testid="CandyBarWrapper" className={classNames(props.className, 'candyBarWrapper')}>
      {props.children}
    </div>
  )
}

export default ResourceCandyBar
