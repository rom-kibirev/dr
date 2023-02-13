import React, { useState, useEffect } from "react";

const CurrentUser = React.createContext({
    userState: [
        {
            type: 'company',
            id: 0,
            list: []
        },
        {
            type: 'project',
            id: 0,
            list: []
        },
        {
            type: 'group',
            id: 0,
            list: []
        },
    ],
    userName: '',
    selectedGroup: '',
    data: {}
});

export const CurrentUserProvider = (props) => {

    const [userInfo,setUserInfo] = useState({});

    useEffect(() => {
        fetch('../XHRResponse/User/current-user.json')
            .then(response => {return response.json();})
            .then(data => {
                setUserInfo(data);
            })
            .catch((e: Error) => {console.log(e.message);});
    },[]);

    if (Object.keys(userInfo).length > 0) {

        return (
            <CurrentUser.Provider value={{
                userState: [
                    {
                        type: 'company',
                        id: +userInfo.company_id,
                        list: userInfo.companies
                    },
                    {
                        type: 'project',
                        id: +userInfo.project_id,
                        list: userInfo.projects.filter(list => list.company_id === +userInfo.company_id)
                    },
                    {
                        type: 'group',
                        id: +userInfo.group_id,
                        list: userInfo.groups.filter(list => list.company_id === +userInfo.company_id)
                    },
                ],
                userName: userInfo.name,
                selectedGroup: userInfo.groups.filter(list => list.id === +userInfo.group_id)[0].type,
                data: userInfo
            }}>
                {props.children}
            </CurrentUser.Provider>
        )
    }
};

export default CurrentUser;