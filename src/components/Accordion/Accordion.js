import React from "react";

type ItemType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    /**
     * Callback that ... даллее примечение, которое можно увидеть через Сtrl +Q в storybooke
     */
    onChange: ()=> void,  //мое
    /**
     * Optional color of header text
     */
    color? : string, //добавили работая над сторибуком
    // items: items[] // массив стрингов, альтернатива Array<string>
    items: ItemType[], // зименили items[] на более подробную типизацию
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
                        color = {props.color}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

// замениили <AccordionTitle title={props.titleValue}/>
//         { !props.collapsed && <AccordionBody/>} на все выражение ниже :
//
// if (props.collapsed === true) {
//     return <AccordionTitle title={props.titleValue}/>
// } else {
//     return <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//     </div>
// }

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onChange: (collapsed: boolean) => void,
    color? : string, //добавили работая над сторибуком
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    // return <h3>Menu</h3> // вариант №1 до испоользования второго title и props
    return <h3
        style={{color: props.color ? props.color : 'black'}}//добавили работая над сторибуком, теперь можно менять цвет в закладке Сontrols в сторибук
        onClick={(e) => props.onChange()}>---{props.title}---</h3>
}

export type AccordionBodyPropsType = {
    // items: string[] // массив стрингов, альтернатива Array<string>
    items: ItemType[], // заменили  items: string[]
    onClick: (value: any) => void //говорим ,что AccordionBody принимает он клик с которая = чему угодно
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {/*<li>1</li>*/}
        {/*<li>2</li>*/}
        {/*<li>3</li>*/}
        {/*{props.items.map( i=> <li>{i}</li>)}*/}
        {/*{props.items.map( (i, index)=> <li key={index}>{i}</li>)}*/}
        {props.items.map( (i, index)=> <li onClick={() =>{ props.onClick(i.value) }} key={index}>{i.title}</li>)}
    </ul>
    //добавили уникальный key в строку с <li>, поэтому в качестве ключа даем порядковый номер (НО ЭТО ДЕЛАЕМ -присваиваем index только если состав массива не меняется), который принимаем в себя ф-ция мар
    // добавили к i еще и title после расширения типизации с string на ItemType
}