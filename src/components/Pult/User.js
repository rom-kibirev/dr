import React, { useEffect, useState } from 'react';
import styles from './User.module.css';
import UserSelect from './UserSelect';

const User = (props) => {

    const [items, setItems] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('../XHRResponse/User/current-user.json')
            .then(response => {return response.json();}).then(data => {
            setItems([
                {
                    title: 'Компания',
                    name: 'company',
                    valueData: +data.company_id,
                    optionsData: data.companies,
                },
                {
                    title: 'Проект',
                    name: 'project',
                    valueData: +data.project_id,
                    optionsData: data.projects.filter(list => list.company_id === +data.company_id),
                },
                {
                    title: 'Сотрудник',
                    name: 'group',
                    valueData: +data.group_id,
                    optionsData: data.groups.filter(list => list.company_id === +data.company_id),
                },
            ]);
            setUserInfo(data)
        }).catch((e: Error) => {console.log(e.message);});
    },[]);

    const userSelectHandler = (event) => {
        event.preventDefault();

        let saveData = userInfo;

        saveData.company_id = event.target.parentNode.parentNode.querySelector('[name="company"]').value;
        saveData.project_id = event.target.parentNode.parentNode.querySelector('[name="project"]').value;
        saveData.group_id = event.target.parentNode.parentNode.querySelector('[name="group"]').value;

        fetch('http://localhost:8000/save.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
            body: new URLSearchParams({
                'place': 'USER/current-user.json',
                'data': JSON.stringify(saveData)
            }),
        }).then(data => {
            if (data.ok) {console.log('\n data', data);}
        });
    }

    return (
        <div className={styles['navigation']}>
            <form>
                <input type="submit" />
            </form>
            <form onChange={userSelectHandler} >
                {items.map((option) => <UserSelect key={option.name} title={option.title} name={option.name} currentValue={option.valueData} list={option.optionsData} userInfo={userInfo}/>)}
            </form>
        </div>
    );
}

export default User;