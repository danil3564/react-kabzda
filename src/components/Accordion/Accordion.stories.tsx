import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("Accordion mode change event fired")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: "Menu",
    accordionControlled: true,
    changeCollapsed: callback
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    titleValue: "Users",
    accordionControlled: false,
    changeCollapsed: callback
}

export const OnOffChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={"Users"} accordionControlled={value} changeCollapsed={() => setValue(!value)} />
}