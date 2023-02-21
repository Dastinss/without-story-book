import React, { useReducer } from "react";
import { reducer, TOGGLE_CONSTANT } from "./Reducer";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UncontrolledAccordion( props: AccordionPropsType ) {
    console.log( 'UnAccordion rendering' )

    // const collapsed = true;
    // let [collapsed, setCollapsed]=useState(false) // закоментили в уроке 16 ,когда ввели useReducer
    let [state, dispatch] = useReducer( reducer, {collapsed: false} ); //говорим -пользуйся reducer_ом, параметрои dispatch передаем инструкцию в мир реакта, при этом  начальное значение (false). Реакт эту инструкцию примет, с помощью этого засунет предыдущий стейт в этот reducer/ф-цию/ и засунет задиспатченый action, выполнит преобразовние и после этого преобразования зафиксирует этот стейт и перересует нашу новую компоненту уже с єтим новім стейтом которій зайдет в collapsed

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed( !collapsed )}}/>  закоментили в уроке 16 (гл.образом setCollapsed),когда ввели useReducer*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch( { type: TOGGLE_CONSTANT } )
        }}/> {/*/при нажатии на Accordion мы dispatch-им инструкцию, т.е. отправляем инструкцию/action кудато в Реакт. dispatch это ф-ция которая вылезла из useReducer-а c помощью которго реакт позволяет отправлять в него команды/action-ы чтобы можно было преобразовать стейт стартовое значение которого в нашем случае false с помощью reducer-а*/}
        {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        {!state.collapsed && <AccordionBody/>}
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
