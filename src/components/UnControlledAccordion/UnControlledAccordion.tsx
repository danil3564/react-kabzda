import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
    accordionUnControlled: boolean
    setAccordionUnControlled: (collapsed: boolean) => void
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType ) {

    return (
        <div>
            <UnControlledAccordionTitle
                title={props.titleValue}
                callBack={ () => props.setAccordionUnControlled(!props.accordionUnControlled) }
                collapsed={props.accordionUnControlled}/>
            {!props.accordionUnControlled && <UnControlledAccordionBody/>}
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