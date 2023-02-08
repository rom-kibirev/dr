import styles from "./Pult.module.css";
import React from "react";

const Nav = (props) => {

    const collapseNavHandler = () => {

        const navState = localStorage.getItem('navState');

        if (navState === "Pult") localStorage.setItem("navState","Pult-collapsed");
        else localStorage.setItem("navState","Pult");

        props.collapseNavState(`${localStorage.getItem('navState')}`);
    }

    return (
        <div className={styles["collapse-nav"]}>
                <span onClick={collapseNavHandler}>
                    <svg className={styles["Pult-collapse"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    <svg className={styles["Pult-expand"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </span>
        </div>
        );
}

export default Nav