import React from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {v1} from "uuid";

export default {
    title: 'Accordion',
    component: Accordion,
}

const Template: Story<AccordionPropsType> = (args) => {
    return <Accordion {...args} />
}

const callback = action("Accordion mode change event fired")
const callbackItem = action("Some item was clicked")
const callbackItemById = (id: number) => {alert(`User with id: ${id} `)}
const items = [
    {id: v1(), title: "first", value: 1},
    {id: v1(), title: "second", value: 2},
    {id: v1(), title: "third", value: 3},
]

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: "Menu",
    accordionControlled: true,
    changeCollapsed: callback,
    items: items,
    onClick: callbackItem
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    titleValue: "Users",
    accordionControlled: false,
    changeCollapsed: callback,
    items: items,
    onClick: callbackItem
}

export const CollapsedChangingMode = Template.bind({})
CollapsedChangingMode.args = {
    titleValue: "Users",
    accordionControlled: false,
    changeCollapsed: callback,
    items: items,
    onClick: callbackItemById
}

