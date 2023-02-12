import styles from './Pult.module.css';
import React, {useState} from "react";
import Burger from "./Burger";
import User from "./User";

const Pult = (props) => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const changePultCollapseHandler = (state) => {
        setIsCollapsed(state);
    };

    return (
        <React.Fragment>
            <div className={`${styles.expanded} ${(!isCollapsed) ? styles.collapsed : ""}`}>
                <Burger collapseState={changePultCollapseHandler} state={isCollapsed}/>
                <User />
                <div>ProjectControl</div>
            </div>
        </React.Fragment>
    );
}

export default Pult;