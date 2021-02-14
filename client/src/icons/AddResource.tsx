import * as React from 'react'
import classNames from 'classnames'

export interface Props {
  className?: string
}

const GlobeIcon: React.FC<Props> = (props) => {
  return (
    <div data-testid="AddIcon" className={classNames(props.className, 'addIcon')}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.50012 4.83179C4.94784 4.83179 4.50012 5.2795 4.50012 5.83179V19.8318C4.50012 20.3841 4.94784 20.8318 5.50012 20.8318H19.5001C20.0524 20.8318 20.5001 20.3841 20.5001 19.8318V5.83179C20.5001 5.2795 20.0524 4.83179 19.5001 4.83179H5.50012ZM2.50012 5.83179C2.50012 4.17493 3.84327 2.83179 5.50012 2.83179H19.5001C21.157 2.83179 22.5001 4.17493 22.5001 5.83179V19.8318C22.5001 21.4886 21.157 22.8318 19.5001 22.8318H5.50012C3.84327 22.8318 2.50012 21.4886 2.50012 19.8318V5.83179Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.25745 12.8318C7.25745 12.2795 7.70516 11.8318 8.25745 11.8318L16.7427 11.8318C17.295 11.8318 17.7427 12.2795 17.7427 12.8318C17.7427 13.384 17.295 13.8318 16.7427 13.8318L8.25745 13.8318C7.70516 13.8318 7.25745 13.384 7.25745 12.8318Z"
          fill="#6C9CD5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5001 7.58911C13.0524 7.58911 13.5001 8.03683 13.5001 8.58911V17.0744C13.5001 17.6267 13.0524 18.0744 12.5001 18.0744C11.9478 18.0744 11.5001 17.6267 11.5001 17.0744V8.58911C11.5001 8.03683 11.9478 7.58911 12.5001 7.58911Z"
          fill="#6C9CD5"
        />
      </svg>
    </div>
  )
}

export default GlobeIcon
