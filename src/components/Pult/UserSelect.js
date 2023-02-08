import React from "react";
import styles from "./UserSelect.module.css";
import {ReactComponent as IconCompany} from "../Icons/Pult/company.svg";
import {ReactComponent as IconProject} from "../Icons/Pult/project.svg";
import {ReactComponent as IconEmployee} from "../Icons/Pult/employee.svg";

const UserSelect = (props) => {

    let icon;

    if (props.title === 'Компания') icon = <IconCompany />;
    else if (props.title === 'Проект') icon = <IconProject />;
    else if (props.title === 'Сотрудник') icon = <IconEmployee />;

    return (
        <React.Fragment>
            <div className={styles['item-title']}>{props.title}</div>
            <div className={styles['item']}>
                {icon}
                <select defaultValue={props.currentValue}>
                    {props.list.map((company) => (
                        <option value={company.id} key={company.id}>{company.name}</option>
                    ))}
                </select>
            </div>
        </React.Fragment>
    );
}
export default UserSelect