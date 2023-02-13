import React from "react";
import styles from "./UserSelect.module.css";
import {ReactComponent as IconCompany} from "../Icons/Pult/company.svg";
import {ReactComponent as IconProject} from "../Icons/Pult/project.svg";
import {ReactComponent as IconEmployee} from "../Icons/Pult/employee.svg";

const UserSelect = (props) => {

    const isCollapsed = props.isCollapsed;
    
    const changeUserSelect = (event) => {

        const getValue = event.target.value;
        const getName = event.target.name;

        if (getName === 'company') props.getSelected({
                "company_id": +getValue,
                "project_id": props.userInfo.projects.filter(list => list.company_id === +getValue)[0].id,
                "group_id": props.userInfo.groups.filter(list => list.company_id === +getValue)[0].id
         });
        else if (getName === 'project') props.getSelected({"project_id": +getValue});
        else if (getName === 'group') props.getSelected({"group_id": +getValue});
    }

    return (
        <div className={`${styles['user-select']} ${isCollapsed ? '' : styles['user-select-collapsed']}`}>
            {props.type === 'company' ? <IconCompany /> : props.type === 'project' ? <IconProject /> : props.type === 'group' ? <IconEmployee /> : ''}
            <label>{props.label}</label>
            <select
                defaultValue={props.currentValue}
                name={props.type}
                onChange={changeUserSelect}
            >
                {props.list.map((item) => (<option value={item.id} key={item.id}>{item.name}</option>))}
            </select>
        </div>
    );
}
export default UserSelect