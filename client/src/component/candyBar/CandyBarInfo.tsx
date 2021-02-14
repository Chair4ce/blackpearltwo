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
      <div className={'candyBarInfocon'}>
        <GlobeIcon status={props.status} />
      </div>
      <h2>{props.title}</h2>
    </div>
  )
}

export default CandyBarInfo
