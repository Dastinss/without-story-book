import React, { useMemo, useState } from 'react';
import { Select } from "./Select/Select";

const items = [
    { value: 1, title: 'Kiev', country: 'UA', population: 1400000 },
    { value: 2, title: 'Kharkiv', country: 'UA', population: 2900000 },
    { value: 3, title: 'Minsk', country: 'BY', population: 2000000 },
    { value: 4, title: 'Gomel', country: 'BY', population: 500000 },
    { value: 5, title: 'Moscov', country: 'RUS', population: 12000000 },
    { value: 6, title: 'Piters', country: 'RUS', population: 4500000 },
]

export const CityFilterMemo = () => {
    const [counter, setCounter] = useState( 0 )
    const [value, setValue] = useState( '2' )

    const newArray1 = useMemo( () => {
        const newArray1 = items.filter( i => i.title.indexOf( 'M' ) > -1 )
        return newArray1
    }, [items] )

    const newArray2 = useMemo( () => {
        const newArray2 = items.filter( i => i.country === 'UA' )
        return newArray2
    }, [items] )

    return <>
        <div>
            <hr/>
            <Select onChange={setValue}
                    value={value}
                    items={items}
            />
            <button onClick={() => {
                setCounter( counter + 1 )
            }}>+
            </button>
            {counter}
        </div>
        <div>
            <hr/>
            <Select onChange={setValue}
                    value={value}
                    items={newArray1}
            />
        </div>
        <div>
            <hr/>
            <Select onChange={setValue}
                    value={value}
                    items={newArray2}
            />
        </div>
    </>
};