import styles from "./Burger.module.css";
import React, {useEffect, useState} from "react";
import { Fade as Hamburger } from 'hamburger-react'

const Burger = (props) => {

    const [isOpen, setOpen] = useState(true);

    useEffect(() => {
        props.collapseState(isOpen);

        const localCollapseState = localStorage.getItem('collapseState');

        if (localCollapseState === "1") setOpen(false);
        else setOpen(true);
    },[props,isOpen]);

    const changeCollapseState = () => {

        if (isOpen) localStorage.setItem('collapseState','1');
        else localStorage.setItem('collapseState','');
    }

    return (
        <React.Fragment>
            <div className={`${styles.expanded} ${!isOpen ? styles.collapsed : ""}`} onClick={changeCollapseState}>
                <Hamburger size={26} toggled={isOpen} toggle={setOpen}/>
            </div>
        </React.Fragment>
    );
}

export default Burger