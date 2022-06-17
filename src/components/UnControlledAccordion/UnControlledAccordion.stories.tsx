import React from "react";
import {UnControlledAccordion, UnControlledAccordionPropsType} from "./UnControlledAccordion";
import {Story} from "@storybook/react";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
}

const Template: Story<UnControlledAccordionPropsType> = (args) => <UnControlledAccordion {...args} />

export const MenuUnControlledCollapsedMode = Template.bind({})
MenuUnControlledCollapsedMode.args = {
    titleValue: "Menu",
    defaultMode: false
}

export const MenuUnControlledUnCollapsedMode = Template.bind({})
MenuUnControlledUnCollapsedMode.args = {
    titleValue: "Menu",
    defaultMode: true
}