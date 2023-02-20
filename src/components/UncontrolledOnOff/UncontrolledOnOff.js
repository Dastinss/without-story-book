import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
    onChange: (on: boolean) => void,
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
    console.log('OnOff rendering')

    // let on = false меняем на useState, чтобы иметь возможность менять значение  on c true на false
    // let [on, setOn] = useState(false); // по умолчанию в useState всегда стоит false
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false); //реагируем на переданное значение defaultOn и считываем его состояние из пропсов: если он есть, то значение = ему, если его нет, то значение фалс


    console.log('on: ' + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicator}></div>
        </div>
    )
}