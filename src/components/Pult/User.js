// import React, { useEffect } from 'react';
import React from 'react';
import styles from './User.modules.css';
import currentUser from '../DataFromBD/current-user';

const User = (props) => {

    // console.log('\n currentUser', currentUser.companies);
    
    console.log('\n ', styles);

    return (
        <nav className={styles['User-navigation']}>
            <form>
                <input type="submit" />
            </form>
            <select className="px-5">
                {currentUser.companies.map((company) => (
                    <option value={company.id} key={company.id}>{company.name}</option>
                ))}
            </select>
        </nav>
    );
}

export default User;