import './App.css';
// import {Accordion} from "./components/Accordion/Accordion";
// import {Rating} from "./Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UnconrolledRating } from "./UncontrolledRating/UncontrolledRating";
import { useState } from "react";
// import type {RatingValueType} from "./Rating/Rating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { ReactMemo } from "./components/ReactMemo";
import { UseMemo } from "./components/UseMemo";
import { CityFilterMemo } from "./components/CityFilterMemo";
import { UseStateCool } from "./components/UseStateCool";
import { UseEffect } from "./components/UseEffect";
import { Clock } from "./components/Clock/Clock";
// import {Select} from "./components/Select/Select";

// function hello() {
//     alert('Hi, my dear!')
// }

// hello();

function App( props: any ) {
    console.log( 'App rendering' )

    // let [ratingValue, setRatingValue] = useState(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState( false )
    let [switchOn, setSwitchOn] = useState( false );

    return (
        <div className={'App'}>
            {/*<Select />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<PageTitle title={'This is App component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue = {'Menu'} collapsed = {accordionCollapsed}*/}
            {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<Accordion titleValue = {'User'} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledOnOff/ /// ниже улучшение, где компонента нас будет уведомлять true/false />*/}
            {/*<CityFilterMemo/>*/}

            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'User'}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UnconrolledRating/>*/}
            {/*<ReactMemo/>*/}
            {/*<UseMemo/>*/}
            {/*<UseStateCool/>*/}
            <UseEffect/>
            <Clock/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle( props: PageTitlePropsType ) {
    console.log( 'PageTitle rendering' )
    // return <h1>This is App component</h1> // так два раза прпищется один и тот же текст, который тут прописан, несмотря на то, что в татл во втором вызове стоит "'My friends'", к примеру
    return <h1>{props.title}</h1>
}

export default App;
