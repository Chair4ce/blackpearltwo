import * as React from 'react'
import classNames from "classnames";

export interface Props {
  className?: string
}

const SmallPearlogo: React.FC<Props> = (props) => {
  return (
    <div data-testid="SmallPearlogo" className={classNames("smallPearlogo", props.className)}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26802 21.732 0 14 0C6.26801 0 0 6.26802 0 14ZM15.28 24.48C8.69675 24.48 3.36 19.1432 3.36 12.56C3.36 9.6728 4.38648 7.02535 6.09441 4.96269C3.63105 7.16036 2.07999 10.359 2.07999 13.92C2.07999 20.5474 7.45257 25.92 14.08 25.92C18.182 25.92 21.8033 23.8618 23.9675 20.7218C21.7932 23.0352 18.7053 24.48 15.28 24.48Z" fill="url(#paint0_radial)"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-8.75 83.125) rotate(-73.5707) scale(106.733 146.099)">
            <stop stopColor="#3B3442"/>
            <stop offset="0.0418637" stopColor="#222B55"/>
            <stop offset="0.389897" stopColor="#3C5A50"/>
            <stop offset="0.466502" stopColor="#6E6180" stopOpacity="0.75"/>
            <stop offset="0.547321" stopColor="#7F6B92"/>
            <stop offset="0.621401" stopColor="#5D5069" stopOpacity="0.83"/>
            <stop offset="0.696734" stopColor="#336B9F" stopOpacity="0.85"/>
            <stop offset="0.753901" stopColor="#244564"/>
            <stop offset="0.800688" stopColor="#181B1E"/>
            <stop offset="0.83669" stopColor="#1A1D1B"/>
            <stop offset="0.950776" stopColor="#252727"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default SmallPearlogo
