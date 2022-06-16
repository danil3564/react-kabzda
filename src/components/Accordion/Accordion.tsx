import React from "react";

export type AccordionPropsType = {
    /**
     * комментарий для пропса под ним, отображается в документации
     */
    titleValue: string,
    accordionControlled: boolean
    changeCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} changeCollapsed={props.changeCollapsed}/>
        {!props.accordionControlled ? <AccordionBody/> : ''}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.changeCollapsed}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}