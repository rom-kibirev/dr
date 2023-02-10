import styles from "./Burger.module.css";
import React, {useState} from "react";
import { Fade as Hamburger } from 'hamburger-react'

const Burger = (props) => {

    const [isOpen, setOpen] = useState(true);

    const stateChangeHandler = () => {
        props.collapseNavState(isOpen);
        if (isOpen) localStorage.setItem('isCollapsed','1');
        else localStorage.setItem('isCollapsed','');
    }

    return (
        <React.Fragment>
            <div className={`${styles.expanded} ${isOpen ? styles.collapsed : ""}`} onClick={stateChangeHandler}>
                <Hamburger size={26} toggled={isOpen} toggle={setOpen}/>
            </div>
        </React.Fragment>
    );
}

export default Burger