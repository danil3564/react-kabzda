import React, {useState} from "react";
import {UnControlledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
}

export const OnOffChanging = () => <UnControlledAccordion titleValue={"Users"} />