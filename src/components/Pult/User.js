// import React, { useEffect, useState } from 'react';
import React from 'react';
import styles from './User.module.css';
import UserSelect from './UserSelect';
// import currentUser from '../DataFromBD/current-user';

const User = (props) => {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch("./DataFromDB/User/current-user.json")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems({
    //                     list: [
    {/*                        {*/}
    //                             name: 'Компания',
    //                             valueData: result.company_id,
    //                             optionsData: result.companies,
    //                         },
    {/*                        {*/}
    {/*                            name: 'Проект',*/}
    //                             valueData: result.project_id,
    //                             optionsData: result.projects.filter(list => list.company_id === result.company_id),
    //                         },
    //                         {
    //                             name: 'Сотрудник',
    //                             valueData: result.group_id,
    //                             optionsData: result.groups.filter(list => list.company_id === result.company_id),
    //                         },
    //                     ]
    //                 });
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, []);

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     return (
    //         <nav className={styles['navigation']}>
    //             <form>
    //                 <input type="submit" />
    //             </form>
    //             {items.list.map((option) => <UserSelect key={option.name} title={option.name} currentValue={option.valueData} list={option.optionsData}/>)}
    //         </nav>
    //     );
    // }

    return (
        <nav className={styles['navigation']}>
            <form>
                <input type="submit" />
            </form>
            {/*{items.list.map((option) => <UserSelect key={option.name} title={option.name} currentValue={option.valueData} list={option.optionsData}/>)}*/}
        </nav>
    );
}

export default User;