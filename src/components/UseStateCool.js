import React, { useMemo, useState } from 'react';

function generateData () {
    console.log('generateData')
    return 123123123
}

export const UseStateCool = () => {
    console.log('Example1');

    // const initialValue = useMemo(generateData,[]) // чтобы не делать тяжелые вычисления, подключили useMemo (зависимостей нет - []), которая подхватывает единожды вычисленное значение generateData
    // const [counter, setCounter] = useState( initialValue )
    const [counter, setCounter] = useState( generateData ) // 1ая особенность useState: если подставить ф-цию в начальное значение, то эффект будет как от useMemo, т.е. каждый раз НЕ будет повторного вычисления тяжелой ф-ции

// 2ая особенность useState: ф-ция вместо простой операции\значения в setXxx , может принимать ф-цию\ченджер, который по каким то правилам изменяет стейт
    return <>
        <button onClick={() => {setCounter(state => state + 1)}}> + </button>
        {counter}
    </>
}
