import React, { useEffect, useState } from 'react';

export const UseEffect = () => {
    return <>
        <div>
            {/*<SimpleExample/>*/}
        </div>
        <div>
            {/*<SetTimeoutExample/>*/}
        </div>
        <div>
            {/*<SetClock/>*/}
        </div>
    </>
}

export const SimpleExample = () => {
    const [fake, setFake] = useState( 1 )
    const [counter, setCounter] = useState( 1 )

    console.log( 'SimpleExample' )

    useEffect( () => {
        console.log( 'useEffect every render' )
        document.title = counter.toString()
        // api.getUsers().then( '' )
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User';
    }, ) //можно: 1. не передавать зависимость }) и тогда будем перезапускаться каждый раз при каждом рендере компонеты, 2. можно передать ее }, []) и тогда мы положим в нее от чего мы зависим },[counter] ) и тогда useEffect запускается первый раз, а потом при смене каунтера 3. если передали пустой массив, то useEffect сработает один раз при вмонтировании компоненты, и при изменении компоненты он срабатывать не будет

    useEffect( () => {
        console.log( 'useEffect only first render (componentDidMount)' )
        document.title = counter.toString()
    }, [] )

    useEffect( () => {
        console.log( 'useEffect only first render and every counter change' )
        document.title = counter.toString()
    }, [counter] )

    return <>
        Hello, {counter}
        <button onClick={() => setFake( fake + 1 )}> fake +</button>
        <button onClick={() => setCounter( counter + 1 )}> counter +</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState( 1 )
    const [counter, setCounter] = useState( 1 )

    console.log( 'SetTimeoutExample' )

    useEffect( () => {

        //     setTimeout( () => { // обновляем/запускаем коллбек через секунду. Если без [counter], то будет вызываться и setFake, в т.ч. Если же с [counter], то только setCounter
        //         console.log( 'SetTimeout' )
        //         document.title = counter.toString()
        //     }, 1000 )
        // }, [counter] )

        setInterval( () => { // обновляем инфо через каждую секунду.
            console.log( 'tick: ' + counter )
            setCounter( state => state + 1 ); //ставим ф-цию-преобразователь, т.к. если же поставить просто counter+1, то счетчик "замрет" на 2 , т.к.setInterval берет постоянно значение из замыкания этого counter, а ему нужно свежее значение
        }, 1000 )
    }, [] )

//     return <>
//         Hello, {counter}
//         <button onClick={() => setFake( fake + 1 )}> fake+</button>
//         <button onClick={() => setCounter( counter + 1 )}> counter+</button>
//     </>
// }

    return <>
        Hello, counter: {counter} - fake {fake}
    </>
}

// Это моя реализация часов
export const SetClock = () => {

    function clock() {
        const date = new Date(),
            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return hours + ':' + minutes + ':' + seconds
    }

    const [time, setTime] = useState( clock )

    console.log( 'SetTimeoutExample' )

    useEffect( () => {
            setInterval( () => {
                console.log( 'time: ' )
                setTime( clock() )
            }, 1000 )
        }, []
    )

    return <>
        This is a current time: {time}
    </>
}