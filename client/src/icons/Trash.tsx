import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  className?: string
}

const TrashIcon: React.FC<Props> = (props) => {
  return (
    <div data-testid="TrashIcon" className="trashIcon">
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5714 6.66667V17.7778H3.42857V6.66667H12.5714ZM10.8571 0H5.14286L4 1.11111H0V3.33333H16V1.11111H12L10.8571 0ZM14.8571 4.44444H1.14286V17.7778C1.14286 19 2.17143 20 3.42857 20H12.5714C13.8286 20 14.8571 19 14.8571 17.7778V4.44444Z"
          fill="#76ACED"
        />
      </svg>
    </div>
  )
}

export default TrashIcon
