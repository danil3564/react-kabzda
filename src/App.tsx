import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {Rating} from "./components/Rating/Rating";
import {OnMode, Template} from "./components/OnOff/OnOff.stories";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [accordionControlled, setAccordionControlled] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<number>(0)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    const switchOnHandler = () => {
        setSwitchOn(!switchOn)
    }

    return (
        <div className={"App"}>
            <Accordion
                titleValue={"Menu1"}
                accordionControlled={accordionControlled}
                changeCollapsed={() => setAccordionControlled(!accordionControlled)}/>
            <UnControlledAccordion
                titleValue={"Menu2"}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UnControlledRating defaultRating={0}/>
            <OnOff
                switchOn={switchOn}
                setSwitchOn={switchOnHandler}/>
            <UnControlledOnOff />
        </div>
    );
}

export default App;
