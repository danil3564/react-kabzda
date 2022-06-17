import React, {useState} from "react";
import {OnOffType, UnControlledOnOff} from "./UnControlledOnOff";
import {Story} from "@storybook/react";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

const Template: Story<OnOffType> = (args) => {
    return <UnControlledOnOff {...args} />
}

export const OnMode = Template.bind({})
OnMode.args = {
    defaultOn: true
}

export const OffMode = Template.bind({})
OffMode.args = {
    defaultOn: false
}