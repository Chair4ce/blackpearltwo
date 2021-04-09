import * as React from 'react'
import classNames from "classnames";

export interface Props {
  callback: () => void
    className?: string
}

const MenuBtn: React.FC<Props> = (props) => {

  function handleClick() {
    props.callback();
  }

    return (
            <div className={classNames( props.className)}>
              <button className="drawerToggleBtn focus:outline-none " onClick={() => handleClick()}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
              </button>
            </div>
    )
}

export default MenuBtn
