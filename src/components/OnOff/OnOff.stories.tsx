import React, {useState} from "react";
import {OnOff, OnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'OnOff',
    component: OnOff,
}

export const Template: Story<OnOffType> = (args) => {
    return <OnOff {...args} />
}

const callback = action("on or off clicked")

export const OnMode = () => <OnOff switchOn={true} setSwitchOn={callback} />
export const OffMode = () => <OnOff switchOn={false} setSwitchOn={callback} />

export const OnOffChanging = () => {
    const [value, setValue] = useState(true)
    return <OnOff switchOn={value} setSwitchOn={() => setValue(!value)} />
}