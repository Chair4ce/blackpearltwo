import * as React from 'react'
import classNames from 'classnames'
import GlobeIcon from '../../icons/Globe'
import ThreeDotIcon from '../../icons/threedot'

export interface Props {
  status: boolean
  title: String
  url: String
  className?: string
}

const CandyBarInfo: React.FC<Props> = (props) => {
  return (
    <div data-testid="CandyBarInfo" className={classNames(props.className, 'candyBarInfo')}>
      <div className={'candyBarInfoTitle'}>
        <div className={'candyBarInfocon'}>
          <GlobeIcon status={props.status} />
        </div>
        <h2>{props.title}</h2>
      </div>
      <div className="candyBarMenu">
        <ThreeDotIcon />
      </div>
    </div>
  )
}

export default CandyBarInfo
