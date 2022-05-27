import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingControlled, setRatingControlled] = useState<RatingValueType>(0)
    const [accordionControlled, setAccordionControlled] = useState<boolean>(false)
    const [accordionUnControlled, setAccordionUnControlled] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Accordion
                titleValue={"Menu1"}
                accordionControlled={accordionControlled}
                changeCollapsed={() => setAccordionControlled(!accordionControlled)}/>
            <UnControlledAccordion
                titleValue={"Menu2"}
                accordionUnControlled={accordionUnControlled}
                setAccordionUnControlled={setAccordionUnControlled}/>
            <UnControlledRating
                ratingControlled={ratingControlled}
                setRatingControlled={setRatingControlled}/>
            <OnOff
                switchOn={switchOn}
                setSwitchOn={() => setSwitchOn(!switchOn)}/>
            <UnControlledOnOff
                on={on}
                setOn={setOn}/>
            <p>{on ? "true" : "false"}</p>

            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<Rating value={0}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
