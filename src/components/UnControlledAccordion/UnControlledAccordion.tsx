import React, {useState} from "react";

export type UnControlledAccordionPropsType = {
    titleValue: string
    defaultMode?: boolean
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType ) {

    const [accordionMode, setAccordionMode] = useState<boolean>(props.defaultMode ? props.defaultMode : false)

    return (
        <div>
            <UnControlledAccordionTitle
                title={props.titleValue}
                callBack={ () => setAccordionMode(!accordionMode) }
                collapsed={accordionMode}/>
            {!accordionMode && <UnControlledAccordionBody/>}
        </div>
    )
}

type UnControlledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
    callBack: () => void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
    return <h3 onClick={props.callBack}>{props.title}</h3>
}

function UnControlledAccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}