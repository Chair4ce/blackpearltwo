import * as React from 'react'
import classNames from 'classnames'
import GlobeIcon from '../../icons/Globe'

export interface Props {
  status: boolean
  title: String
  url: String
  className?: string
}

const CandyBarInfo: React.FC<Props> = (props) => {
  return (
    <div data-testid="CandyBarInfo" className={classNames(props.className, 'candyBarInfo')}>
      <div data-testid="Info-row" className={classNames('info-Row')}>
        <GlobeIcon status={props.status} />
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default CandyBarInfo
