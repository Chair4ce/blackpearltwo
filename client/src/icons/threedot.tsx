import * as React from 'react'

export interface Props {
  className?: string
}

const ThreeDotIcon: React.FC<Props> = (props) => {
  return (
    <div data-testid="ThreeDotIcon" className="threeDotIcon">
      <svg width="7" height="24" viewBox="0 0 7 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 21C6.5 22.7187 5.1625 24 3.5 24C1.84375 24 0.5 22.7187 0.5 21C0.5 19.275 1.84375 18 3.5 18C5.1625 18 6.5 19.275 6.5 21Z"
          fill="#ABABAB"
        />
        <path
          d="M6.5 12.0001C6.5 13.7189 5.1625 15.0001 3.5 15.0001C1.84375 15.0001 0.5 13.7189 0.5 12.0001C0.5 10.2751 1.84375 9.00011 3.5 9.00011C5.1625 9.00011 6.5 10.2751 6.5 12.0001Z"
          fill="#ABABAB"
        />
        <path
          d="M6.5 3C6.5 4.71875 5.1625 6 3.5 6C1.84375 6 0.5 4.71875 0.5 3C0.5 1.275 1.84375 0 3.5 0C5.1625 0 6.5 1.275 6.5 3Z"
          fill="#ABABAB"
        />
      </svg>
    </div>
  )
}

export default ThreeDotIcon
