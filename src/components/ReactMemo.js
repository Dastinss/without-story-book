import React, { useState } from 'react';

const NewMessagesCounter = ( props: { count: number } ) => {
    return <div>{props.count}</div>
}

const UsersSecret = ( props: { users: Array<string> } ) => {
    console.log('USERS')
    return <div>
        {props.users.map( ( u, i ) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo (UsersSecret); //єто контейнерная компонента которая смотит не делается ли лищних перересовок и потом их не перерисовывает если не было изменений пропсов\данных

export const ReactMemo = () => {
    const [counter, setCounter] = useState( 0 )
    const [users, setUser] = useState( ['Serg', 'Ann', 'Mike'] )

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getDate()]
        setUser(newUsers);
    }

    return <>
        {/*<NewMessagesCounter count={10}/>*/}
        {/*<Users users={['Serg', 'Ann', 'Mike']}/>*/}
        <button onClick={() => {setCounter(counter+1)}}> + </button>
        <button onClick={addUser}> add user </button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
