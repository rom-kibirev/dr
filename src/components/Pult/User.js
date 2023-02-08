// import React, { useEffect } from 'react';
import React from 'react';
import styles from './User.module.css';
import UserSelect from './UserSelect';
import currentUser from '../DataFromBD/current-user';

const User = (props) => {

    const userList = [
        {
            name: 'Компания',
            valueData: currentUser.company_id,
            optionsData: currentUser.companies,
        },
        {
            name: 'Проект',
            valueData: currentUser.project_id,
            optionsData: currentUser.projects,
        },
        {
            name: 'Сотрудник',
            valueData: currentUser.group_id,
            optionsData: currentUser.groups,
        },
    ];

    return (
        <nav className={styles['navigation']}>
            <form>
                <input type="submit" />
            </form>
            {userList.map((option) => <UserSelect key={option.name} title={option.name} currentValue={option.valueData} list={option.optionsData}/>)}
        </nav>
    );
}

export default User;