import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  status: boolean
  className?: string
}

const GlobeIcon: React.FC<Props> = (props) => {
  return (
    <div data-testid="GlobeIcon" className={classNames(props.className, '')}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM10.8 21.516C6.06 20.928 2.4 16.896 2.4 12C2.4 11.256 2.496 10.548 2.652 9.852L8.4 15.6V16.8C8.4 18.12 9.48 19.2 10.8 19.2V21.516ZM19.08 18.468C18.768 17.496 17.88 16.8 16.8 16.8H15.6V13.2C15.6 12.54 15.06 12 14.4 12H7.2V9.6H9.6C10.26 9.6 10.8 9.06 10.8 8.4V6H13.2C14.52 6 15.6 4.92 15.6 3.6V3.108C19.116 4.536 21.6 7.98 21.6 12C21.6 14.496 20.64 16.764 19.08 18.468Z"
          fill="#C4C4C4"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM10.8 21.516C6.06 20.928 2.4 16.896 2.4 12C2.4 11.256 2.496 10.548 2.652 9.852L8.4 15.6V16.8C8.4 18.12 9.48 19.2 10.8 19.2V21.516ZM19.08 18.468C18.768 17.496 17.88 16.8 16.8 16.8H15.6V13.2C15.6 12.54 15.06 12 14.4 12H7.2V9.6H9.6C10.26 9.6 10.8 9.06 10.8 8.4V6H13.2C14.52 6 15.6 4.92 15.6 3.6V3.108C19.116 4.536 21.6 7.98 21.6 12C21.6 14.496 20.64 16.764 19.08 18.468Z"
            fill="#76ACED"
          />
        </mask>
        <g mask="url(#mask0)">
          {props.status ? (
            <rect x="0.00012207" width="24" height="24" fill="#6C9CD5" />
          ) : (
            <rect x="0.00012207" width="24" height="24" fill="#EB5757" />
          )}
        </g>
      </svg>
    </div>
  )
}

export default GlobeIcon
