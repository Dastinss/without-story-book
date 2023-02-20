import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5; // добавили после переноса в storyBook урок 11

type RatingPropsType = {
    // value: number //универсальный вариант
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: RatingValueType,// добавили после переноса в storyBook урок 11
    onChange: (value: RatingValueType) => void
}

export function UnconrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    // let [value, setValue] = useState(0); // убрали после переноса в storyBook урок 11
    let [value, setValue] = useState(props.defaultValue ? props.defaultValue: 0); // добавили после переноса в storyBook урок 11. Нужно добавить <RatingValueType>, чтобы по ошибке не выбрать какое то другое значение, типа "7", но ругается система (((

    return (
        <div>
            {/*<Star selected={ value > 0}/><button onClick={ () => { setValue(1) } }>1</button>*/}
            {/*<Star selected={ value > 1}/><button onClick={ () => { setValue(2) } }>2</button>*/}
            {/*<Star selected={ value > 2}/><button onClick={ () => { setValue(3) } }>3</button>*/}
            {/*<Star selected={ value > 3}/><button onClick={ () => { setValue(4) } }>4</button>*/}
            {/*<Star selected={ value > 4}/><button onClick={ () => { setValue(5) } }>5</button>*/}

            {/*<Star selected={value > 0} setValue={setValue} value={1}/>*/}
            {/*<Star selected={value > 1} setValue={setValue} value={2}/>*/}
            {/*<Star selected={value > 2} setValue={setValue} value={3}/>*/}
            {/*<Star selected={value > 3} setValue={setValue} value={4}/>*/}
            {/*<Star selected={value > 4} setValue={setValue} value={5}/>*/}

            <Star selected={value > 0} setValue={() => {setValue (1); props.onChange(1); } }/>
            <Star selected={value > 1} setValue={() => {setValue (2); props.onChange(2); } }/>
            <Star selected={value > 2} setValue={() => {setValue (3); props.onChange(3); } }/>
            <Star selected={value > 3} setValue={() => {setValue (4); props.onChange(4); } }/>
            <Star selected={value > 4} setValue={() => {setValue (5); props.onChange(5); } }/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    // value: 1 | 2 | 3 | 4 | 5,
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {    //Star ждет (должно жестко соответсвовать) props которые являются конкретного типа: в нашем случе с свойством селектед с значением тру или фалс
    // debugger;
    console.log('Star rendering')
    // return (props.selected === true) ? <span><b>star </b></span> : <span>star </span>
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>}

    // return props.selected ? <span><b>star </b></span> : <span>star </span>
    return <span onClick={() => {props.setValue(props.value)}}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}

