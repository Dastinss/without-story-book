import React, {useState} from 'react';


type OnOffPropsType = {
    on: boolean,
    onChange: (on: boolean) => void
}

export function OnOff (props: OnOffPropsType) {
    console.log('OnOff rendering')

    // let on = false меняем на useState, чтобы иметь возможность менять значение  on c true на false
    // let [on,setOn]= useState(false); // по умолчанию в useState всегда стоит false

    console.log('on: ' + props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid pink',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius:'5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicator}></div>
        </div>)

// МОЁЁ ))
// if (props.svitchValue === true) {
// )
// }else {<Off/>
// return (
//     <div>
//         <button>On</button>
//         <button className={b.colorRed}>Off</button>
//         <button className={b.roundFigRed}></button>
//     </div>
// )
// }
}