import React, { useEffect, useState } from 'react';
import styles from './User.module.css';
import UserSelect from './UserSelect';

const User = (props) => {

    const [items, setItems] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch('../XHRResponse/User/current-user.json')
            .then(response => {return response.json();})
            .then(data => {
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
            setUserInfo(data);
            // const currentGrpup = data.groups.filter(list => list.id === +data.group_id)
            //     props.currentGroup(currentGrpup[0].type);
        })
            .catch((e: Error) => {console.log(e.message);});
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

    // console.log('\n userInfo', userInfo);

    return (
        <div className={styles.navigation}>

            <form className={styles['current-user']} onSubmit={(event) => event.preventDefault()}>
                <label>{userInfo.name}</label>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"/></svg>
                </button>
            </form>
            <form onChange={userSelectHandler} onSubmit={(event) => event.preventDefault()}>
                {items.map((option) => <UserSelect key={option.name} title={option.title} name={option.name} currentValue={option.valueData} list={option.optionsData} userInfo={userInfo}/>)}
            </form>
        </div>
    );
}

export default User;