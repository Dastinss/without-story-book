import React, { useEffect, useState } from "react";
import styles from './Analog.Clock.module.css'

type PropsType = {
    mode?: 'digital' | 'analog'
}

const get2digitsStrings = ( num: number ) => num < 10 ? '0' + num : num

export const Clock = () => {

    return <>
        <div>
            <BaseAnalogExample/>
        </div>
        <div>
            <BaseDigitalExample/>
        </div>
    </>
}

export const BaseAnalogExample: React.FC = () => {

    const [date, setDate] = useState( new Date() )

    useEffect( () => { // в useEffect передаем непонятную\"мусорную"\"сайдефектовую" логику, которая выходит за рамки Реакта и компоненты
        const intervalID = setInterval( () => { //  useEffect запускает setInterval чтобы часы обновлялись, для этого передаем пустой массив
            setDate( new Date() ) // внутри setInterval меняем каждую секунду дату
        }, 1000 );

        return () => {
            // clearInterval( intervalID )
        } // прерываем ф-цию, когда удаляем компоненту (напр. перходим в др окно) иначе, она продолжает "тикать" и жрать память
    }, [] );


    //Копировали вот отсюда : https://medium.com/@guyrashko/how-to-create-an-analog-clock-using-react-2e2e382367c3
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div>
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
            </div>
        </div>
    </div>
}

export const BaseDigitalExample: React.FC = () => {
    const [date, setDate] = useState( new Date() )

    // const hoursStrings = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    // const minutesStrings = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    // const secondsStrings = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    useEffect( () => { // в useEffect передаем непонятную\"мусорную"\"сайдефектовую" логику, которая выходит за рамки Реакта и компоненты
        const intervalID = setInterval( () => { //  useEffect запускает setInterval чтобы часы обновлялись, для этого передаем пустой массив
            setDate( new Date() ) // внутри setInterval меняем каждую секунду дату
        }, 1000 );

        return () => {
            // clearInterval( intervalID )
        } // прерываем ф-цию, когда удаляем компоненту (напр. перходим в др окно) иначе, она продолжает "тикать" и жрать память
    }, [] );

    return <div>
        {/*<span>{hoursStrings}</span>*/}
        {/*:*/}
        {/*<span>{minutesStrings}</span>*/}
        {/*:*/}
        {/*<span>{secondsStrings}</span>*/}

        <span>{get2digitsStrings( date.getHours() )}</span>
        :
        <span>{get2digitsStrings( date.getMinutes() )}</span>
        :
        <span>{get2digitsStrings( date.getSeconds() )}</span>
    </div>
}