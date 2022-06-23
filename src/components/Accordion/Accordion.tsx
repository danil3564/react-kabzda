import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type itemType = {
    id: string
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * комментарий для пропса под ним, отображается в документации
     */
    titleValue: string,
    accordionControlled: boolean
    changeCollapsed: () => void
    items: itemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} changeCollapsed={props.changeCollapsed} />
        {!props.accordionControlled
            ? <AccordionBody items={props.items} onClick={props.onClick}/>
            : ''}
    </div>

}