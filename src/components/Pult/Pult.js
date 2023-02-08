import styles from './Pult.module.css';
import React, { useState } from "react";
import Burger from "./Burger";
import User from "./User";

const Pult = (props) => {

    const [collapseNavClass,setCollapseNavClass] = useState(`${localStorage.getItem('navState')}`);
    if (localStorage.getItem('navState') === null) localStorage.setItem("navState","Pult");

    return <div className={styles[collapseNavClass]}>
        <Burger collapseNavState={setCollapseNavClass}/>
        <User />
        <div>ProjectControl</div>
    </div>;
}

export default Pult;