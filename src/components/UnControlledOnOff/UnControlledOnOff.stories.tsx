import React, {useState} from "react";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

const callback = action("on or off clicked")

export const OnMode = () => <UnControlledOnOff defaultOn={true} />
export const OffMode = () => <UnControlledOnOff defaultOn={false} />