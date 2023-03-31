import React, { useEffect, useState } from "react";

// type PropsType = {
//
// }

const get2digitsStrings = ( num: number ) => num < 10 ? '0' + num : num

export const Clock: React.FC = () => {
    const [date, setDate] = useState( new Date() )

    // const hoursStrings = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    // const minutesStrings = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    // const secondsStrings = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    useEffect( () => { // в useEffect передаем непонятную\"мусорную"\"сайдефектовую" логику, которая выходит за рамки Реакта и компоненты
        const intervalID = setInterval( () => { //  useEffect запускает setInterval чтобы часы обновлялись, для этого передаем пустой массив
            setDate( new Date() ) // внутри setInterval меняем каждую секунду дату
        }, 1000 );

        return clearInterval( intervalID ) // прерываем ф-цию, когда удаляем компоненту (напр. перходим в др окно) иначе, она продолжает "тикать" и жрать память
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