import React from 'react';

type itemType = {
    id: string
    title: string
    value: any
}

type AccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any) => void
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((i, index) => {
                return <li key={i.id} onClick={ () => props.onClick(i.value) }>
                        {i.title}
                    </li>
            })}
        </ul>
    );
};