import * as React from 'react'
import classNames from "classnames";

export interface Props {
    className?: string
}

const MenuBtn: React.FC<Props> = (props) => {

    return (
            <div className={classNames("menu-btn", props.className)}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
    )
}

export default MenuBtn
