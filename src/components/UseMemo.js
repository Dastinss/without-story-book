import React, { useCallback, useMemo, useState } from "react";

export default {
    title: 'UseMemo'
}

export const UseMemo = () => {
    return <>
        {/*<DifficultCountingExample/>*/}
        {/*<HelpsToReactMemo/>*/}
        <LikeUSeCallBack/>
    </>
}

const DifficultCountingExample = () => { // 1st сценарий когда useMemo пригодится - когда делаем сложные вычисления которые нагружают систему

    const [a, setA] = useState( 5 )
    const [b, setB] = useState( 5 )

    let resultA = 1;
    let resultB = 1;

    // const resultA = useMemo(() = {}, [a]) // [a] - параметр это зависимости, на который useMemo\Реакт будут обращать
    // внимание, чтобы перезапускать ф-цию (первый  параметр) или не перезапускать. т.е. если а останется тот же самый, то ф-ция не будет перезапускаться

    resultA = useMemo( () => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;
    }, [a] )

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={( e ) => setA( Number( e.currentTarget.value ) )}/>
        <input value={b} onChange={( e ) => setB( +e.currentTarget.value )}/>
        {/*// (Number(e.currentTarget.value)) = (+e.currentTarget.value) - привели ф-цию к числовому значению*/}
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

// const HelpsForReactMempExample = () => { // 2nd сценарий когда useMemo пригодится - єто когда нам нужно чтобы ReactMemo работал корректно, т.е они друг друга дополняют и помогают друг другу

const UsersSecret = ( props: { users: Array<string> } ) => {
    console.log( 'USERS SECRET' )
    return <div>
        {props.users.map( ( u, i ) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo( UsersSecret ); //єто контейнерная компонента которая смотит не делается ли лищних перересовок и потом их не перерисовывает если не было изменений пропсов\данных

export const HelpsToReactMemo = () => {
    console.log( 'Example1' )
    const [counter, setCounter] = useState( 0 )
    const [users, setUser] = useState( ['Serg', 'Ann', 'Mike', 'Katya'] )

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getDate()]
        setUser( newUsers );
    }

    const newArray = useMemo( () => {
        const newArray = users.filter( u => u.toLowerCase().indexOf( 'a' ) > -1 )
        return newArray;
    }, [users] )

    return <>
        <button onClick={() => {
            setCounter( counter + 1 )
        }}> +
        </button>
        <button onClick={addUser}> add user</button>
        {counter}
        {/*<Users users={user}/>*/}
        {/*<Users users={user.filter(u => u.toLowerCase().indexOf('a') > -1)}/>*/}
        <Users users={newArray}/>
    </>
}

//<Users users={user.filter(u => u.toLowerCase().indexOf('a') > -1)}/> показіваем только users у которых в имени есть буква "а"

// урок 9: useCallback
export const LikeUSeCallBack = () => {
    console.log( 'LikeUSeCallBack' )
    const [counter, setCounter] = useState( 0 )
    const [books, setBook] = useState( ['React', 'JS', 'CSS', 'HTML'] )

    // ВАРИАНТ 1: отдельно вынесли ф-цию addBook
    // const addBook = () => { // закоментил, т.к. упростили все для
    //     const newUsers = [...books, 'Angular' + new Date().getDate()]
    //     setBook(newUsers);
    // }
    // const memoizedAddBook = useMemo(() => { return addBook }, [books]) // [books] а не [] для того, чтобы дать зависимость то, от чего наша ф-ция зависит, т.е. чтобы книги корректно добавлялись,т.к. иначе ф-ция будет работать со старыми данными из внешней области (это "магия" замыкания)

    // ВАРИАНТ 2: ф-цию addBook включили в useMemo.
    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         const newUsers = [...books, 'Angular' + new Date().getDate()]
    //         setBook(newUsers);
    //     }
    // }, [books]) // пока [books] не изменится, колл бек переданый в useMemo , соот-нно нам не будет возарвщаться новая версия закешированного варианта

    // ВАРИАНТ 3: хук useMemo заменили на useCallback (useCallback єто частный случай useMemo). в useMemo запоминем ф-цию возвращающую ф-цию, а в useCallback - просто запоминаем ф-цию :)
    const memoizedAddBook2 = useCallback( () => {
        console.log( books )
        const newUsers = [...books, 'Angular' + new Date().getDate()]
        setBook( newUsers );
    }, [books] )

    return <>
        <button onClick={() => {
            setCounter( counter + 1 )
        }}>+
        </button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: ()=> void
}

const BooksSecret = ( props: BooksSecretPropsType ) => {
    console.log( 'BooksSecret' )
    return <div>
        <button onClick={() => props.addBook()}> add book</button>
    </div>
}

const Book = React.memo( BooksSecret );

