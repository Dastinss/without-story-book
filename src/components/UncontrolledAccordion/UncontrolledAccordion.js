import React, { useReducer, useState } from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

type ActionType = {
    type: string // action это объект у которого обязателно должно быть св=во тип (надпись "удалить", "уволить", "выучить")
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED' // выносим в отдельную контстанту то, что используется >2 раз и больше, чтобі избежать опечатки

const reducer = ( state: boolean, action: ActionType ) => { // ф=ция в которую поступает state (переключалка) и action (инструкция, у которой должен біть тип\заголовок, что должен сделать редюсер) и которая по каким то правилам меняет стейт и его в конечном итоге выплевывает изменнній стейт
    switch (action.type) { //чаще всего используется несколько action и чтобі не делать много раз if\else исп-ем switch для разных сценариев
        case  TOGGLE_CONSTANT:
            return !state;
        default :
           throw new Error('Bad action type')
    }

    // if (action.type === TOGGLE_CONSTANT){ // закоментили когда ввели switch для показания множественных сценариев
    // return !state;
    // }
    return state;
}

export function UncontrolledAccordion( props: AccordionPropsType ) {
    console.log( 'UnAccordion rendering' )

    // const collapsed = true;
    // let [collapsed, setCollapsed]=useState(false) // закоментили в уроке 16 ,когда ввели useReducer
    let [collapsed, dispatch] = useReducer( reducer, false ) //говорим -пользуйся reducer_ом, параметрои dispatch передаем инструкцию в мир реакта, при этом  начальное значение (false). Реакт эту инструкцию примет, с помощью этого засунет предыдущий стейт в этот reducer/ф-цию/ и засунет задиспатченый action, выполнит преобразовние и после этого преобразования зафиксирует этот стейт и перересует нашу новую компоненту уже с єтим новім стейтом которій зайдет в collapsed

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed( !collapsed )}}/>  закоментили в уроке 16 (гл.образом setCollapsed),когда ввели useReducer*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch( { type: TOGGLE_CONSTANT } )
        }}/> {/*/при нажатии на Accordion мы dispatch-им инструкцию, т.е. отправляем инструкцию/action кудато в Реакт. dispatch это ф-ция которая вылезла из useReducer-а c помощью которго реакт позволяет отправлять в него команды/action-ы чтобы можно было преобразовать стейт стартовое значение которого в нашем случае false с помощью reducer-а*/}
        {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitle( props: AccordionTitlePropsType ) {
    console.log( 'AccordionTitle rendering' )
    // return <h3>Menu</h3> // вариант №1 до испоользования второго title и props
    return <h3 onClick={() => {
        props.onClick()
    }}>---{props.title}---</h3>
}

function AccordionBody() {
    console.log( 'AccordionBody rendering' )
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
