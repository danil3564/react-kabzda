import React from 'react';

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.changeCollapsed}>{props.title}</h3>
    );
};