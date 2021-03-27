import * as React from 'react'
import GlobeIcon from '../../icons/Globe'
import ClickAwayListener from 'react-click-away-listener'
import clsx from 'clsx'
import { Transition } from '@headlessui/react'

export interface Props {
  active: boolean
  id: number
  url: string
  title: string
  showMenu: boolean
  callback: (index: number, reset?: boolean, action?: string) => void
  className?: string
}

const ResourceCandyBar: React.FC<Props> = (props) => {
  function handleClick(id: number, action?: string) {
    if (!props.showMenu) {
      props.callback(id)
    } else {
      if (action) {
        props.callback(props.id, true, action)
      }
      props.callback(-1, true)
    }
  }

  const handleClickAway = () => {
    props.callback(-1, true)
  }

  return (
    <div
      data-testid="CandyBarWrapper"
      className="candyBarWrapper block w-full rounded-sm  mt-1 mr-0 mb-1 ml-0 h-8"
    >
      <div className="flex items-center justify-center h-full w-full pr-0.5">
        <div data-testid="CandyBarInfo" className="candyBarInfo block rounded-sm   ">
          <a
            className="candyBarTargetLink flex items-center justify-start w-full h-full space-x-1"
            href={props.url}
            target={'_blank'}
            title={props.title}
            onClick={() => props.callback(-1, true)}
          >
            <div className="candyBarInfocon ">
              <GlobeIcon status={props.active} />
            </div>
            <h2>{props.title}</h2>
          </a>
        </div>

        <div className="candyBarMenu flex items-center">
          {/*<button className="candyBarMenuButton flex justify-center items-center border-0 outline-none bg-transparent w-12 h-full">*/}
          {/*  <ThreeDotIcon />*/}
          {/*</button>*/}

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="candyBarMenuBtn focus:outline-none flex items-center justify-center rounded-md"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => handleClick(props.id)}
              >
                <svg
                  className=" h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <Transition
              show={props.showMenu}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {(ref) => (
                <ClickAwayListener onClickAway={handleClickAway}>
                  <div
                    ref={ref}
                    className="origin-left shadow-sm absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => handleClick(props.id, 'edit')}
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => handleClick(props.id, 'delete')}
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </ClickAwayListener>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCandyBar
