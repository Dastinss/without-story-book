import React, { useState, KeyboardEvent, useEffect } from "react";
import styles from './Select.module.css'

type ItemType = {
    value?: any,
    title: string
}

type SelectPropsType = {
    value: any,
    onChange: ( value: any ) => void,
    items: ItemType [],
    // onClick: (value: any) => void
}

export function Select( props: SelectPropsType ) {
    const [active, setActive] = useState( true ) // сетаем табличку со списком городов (то скрываем, то отображаем)
    const [hoveredElementValue, setHoveredElementValue] = useState( props.value ) // подсвечиваем выбранный элемент. сначала ставим єлемент который нам пришел извне( props.value )
    const selectedItem = props.items.find( i => i.value === props.value ); // исп-ем filter или find. нужно отобразить текущее value, для этого нужно пробежаться по всем items , найти тот items, где совпадает с велью и отобразить нужный тайтл нужного айтемса
    const hoveredEItem = props.items.find( i => i.value === hoveredElementValue ); // исп-ем filter или find. нужно отобразить текущее value, для этого нужно пробежаться по всем items , найти тот items, где совпадает с велью и отобразить нужный тайтл нужного айтемса

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive( !active ) // открываем и скрываем список из трех городов ниже h3
    const onItemClick = ( value: any ) => {
        props.onChange( value )
        toggleItems();
    }

    const onKeyUp = ( e: KeyboardEvent<HTMLDivElement> ) => {
        // console.log('press')
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[ i ].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items [i - 1]

                    if (pretendentElement) {
                        props.onChange( pretendentElement.value )
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value )
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive( false )
        }
    }

    return (
        // если нашли через filter нужный items, то отбражаем его title в h3
        // styles.select + '' + styles.active значит, что список появляется когда он активный. Мы реализовали ниже скрытие списка не через CSS, а через JS условие
        <>

            {/*// <select>*/}
            {/*//     <option value="">Minsk</option>*/}
            {/*//     <option value="">Moscow</option>*/}
            {/*//     <option value="">Kiev</option>*/}
            {/*// </select>*/}

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active && // рисует дивку только если active. т.е. скрываем список не через css (разметку display: block), а через jsx
                    <div className={styles.items}>
                        {props.items.map( i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue( i.value )
                            }}
                            className={styles.item + ' ' + (hoveredEItem === i ? styles.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick( i.value )
                            }} //когда кликнули, то стрелочная ф-ция ,которая ничего не принимает, достучалась до i.value. не віносим ф-цию наружу, делаем замыкание, нам нужно на 20 айтемсов создать 20 стрелочных ф-ций и у каждой i будет свое value. toggleItems закрывает список, когда выбор сделан
                        >{i.title}
                        </div> )}
                    </div>
                }
            </div>
        </>
    )
}
