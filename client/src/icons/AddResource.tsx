import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  className?: string
}

const AddResourceIcon: React.FC<Props> = (props) => {
  return (
    <div data-testid="AddIcon" className={classNames(props.className, 'addIcon')}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2H3ZM0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.75732 9.99996C4.75732 9.44768 5.20504 8.99996 5.75732 8.99996L14.2426 8.99997C14.7949 8.99996 15.2426 9.44768 15.2426 9.99996C15.2426 10.5522 14.7949 11 14.2426 11L5.75732 11C5.20504 11 4.75732 10.5522 4.75732 9.99996Z"
          fill="#6C9CD5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99996 4.75732C10.5522 4.75732 11 5.20504 11 5.75732V14.2426C11 14.7949 10.5522 15.2426 9.99996 15.2426C9.44768 15.2426 8.99996 14.7949 8.99997 14.2426V5.75732C8.99996 5.20504 9.44768 4.75732 9.99996 4.75732Z"
          fill="#6C9CD5"
        />
      </svg>
    </div>
  )
}

export default AddResourceIcon
