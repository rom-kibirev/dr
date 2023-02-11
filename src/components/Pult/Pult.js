import styles from './Pult.module.css';
import React, {useState} from "react";
import Burger from "./Burger";
import User from "./User";

const Pult = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const changePultCollapseHandler = (state) => {
        if (state) setIsCollapsed(true);
        else setIsCollapsed(false);
    };

    return (
        <React.Fragment>
            <div className={`${styles.expanded} ${(isCollapsed) ? styles.collapsed : ""}`}>
                <Burger collapseNavState={changePultCollapseHandler}/>
                <User/>
                <div>ProjectControl</div>
            </div>
        </React.Fragment>
    );
}

export default Pult;