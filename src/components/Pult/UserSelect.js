import React from "react";
import styles from "./UserSelect.module.css";
import {ReactComponent as IconCompany} from "../Icons/Pult/company.svg";
import {ReactComponent as IconProject} from "../Icons/Pult/project.svg";
import {ReactComponent as IconEmployee} from "../Icons/Pult/employee.svg";

const UserSelect = (props) => {

    let icon;

    if (props.name === 'company') icon = <IconCompany />;
    else if (props.name === 'project') icon = <IconProject />;
    else if (props.name === 'group') icon = <IconEmployee />;

    return (
        <React.Fragment>
            <label className={styles['item-title']}>{props.title}</label>
            <div className={styles['item']}>
                {icon}
                <select defaultValue={props.currentValue} name={props.name}>
                    {props.list.map((item) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
        </React.Fragment>
    );
}
export default UserSelect