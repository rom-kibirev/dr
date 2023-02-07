import styles from './Pult.module.css';
import React, { useState } from "react";
import User from "./User";

const Pult = (props) => {

    const [collapseNavClass,setCollapseNavClass] = useState(`${localStorage.getItem('navState')}`);

    if (localStorage.getItem('navState') === null) localStorage.setItem("navState","pult");

    const collapseNavHandler = () => {

        const navState = localStorage.getItem('navState');

        if (navState === "pult") localStorage.setItem("navState","pult-collapsed");
        else localStorage.setItem("navState","pult");

        setCollapseNavClass(`${localStorage.getItem('navState')}`);
    }

    return <nav className={styles[collapseNavClass]}>
        <div className={styles["collapse-nav"]}>
                <span onClick={collapseNavHandler}>
                    <svg className={styles["pult-collapse"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <svg className={styles["pult-expand"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </span>
        </div>
        <User />
        <div>ProjectControl</div>
    </nav>;
}

export default Pult;