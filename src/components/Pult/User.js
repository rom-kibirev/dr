import React, {useContext, useState} from 'react';
import styles from './User.module.css';
import UserSelect from './UserSelect';
import CurrentUser from '../../operativeInformation/pult-context';
import {ReactComponent as IconExit} from "../Icons/Pult/exit.svg";

const User = (props) => {

    const userInfo = useContext(CurrentUser);
    const contextNames = {"company":"Компания", "project":"Проект", "group":"Сотрудник"};
    const isCollapsed = props.isCollapsed;
    const [userChoise,setUserChoise] = useState();

    if (userChoise !== undefined) {
        const urlSave = 'http://localhost:8000/save.php';
        let saveData = userInfo.data;

       for (const id in userChoise) {saveData[id] = userChoise[id];}

        fetch(urlSave, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body: new URLSearchParams({
                'place': 'USER/current-user.json',
                'data': JSON.stringify(saveData)
            }),
        }).then(res => {
            console.log('\n res', res);
            if (res.ok) setUserChoise(saveData);
        }).catch(err => {
            // some error handling
        });
    }

    return (
        <div className={`${styles.navigation} ${isCollapsed ? '' : styles['navigation-collapsed']}`}>

            <form className={isCollapsed ? styles['current-user'] : styles['current-user-collapsed']} onSubmit={event => event.preventDefault()}>
                <label>{userInfo.userName}</label>
                <button type="submit" title="Выйти из учетной записи">{isCollapsed ? 'Выйти' : <IconExit />}</button>
            </form>
            {userInfo.userState.map((option) => <UserSelect
                key={option.type}
                type={option.type}
                label={contextNames[option.type]}
                currentValue={option.id}
                list={option.list}
                isCollapsed={isCollapsed}
                userInfo={userInfo.data}
                getSelected={setUserChoise}
            />)}
        </div>
    );
}

export default User;