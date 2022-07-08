import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {Rating} from "./components/Rating/Rating";
import {v1} from "uuid";
import {SelectCustom} from "./components/SelectCustom/SelectCustom";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [accordionControlled, setAccordionControlled] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<number>(0)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    const items = [
        {id: v1(), title: "first", value: 1},
        {id: v1(), title: "second", value: 2},
        {id: v1(), title: "third", value: 3},
    ]

    const selectItems = [
        {id: v1(), value: "1"},
        {id: v1(), value: "2"},
        {id: v1(), value: "3"},
        {id: v1(), value: "4"},
        {id: v1(), value: "5"},
    ]

    const onClickItem = (value: any) => {

    }

    const switchOnHandler = () => {
        setSwitchOn(!switchOn)
    }

    return (
        <div className={"App"}>
            <Accordion
                titleValue={"Menu1"}
                accordionControlled={accordionControlled}
                changeCollapsed={() => setAccordionControlled(!accordionControlled)}
                items={items}
                onClick={onClickItem}/>
            <UnControlledAccordion
                titleValue={"Menu2"}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UnControlledRating defaultRating={0}/>
            <OnOff
                switchOn={switchOn}
                setSwitchOn={switchOnHandler}/>
            <UnControlledOnOff/>
            <SelectCustom
                selectedItem={4}
                items={selectItems}/>
        </div>
    );
}

export default App;
