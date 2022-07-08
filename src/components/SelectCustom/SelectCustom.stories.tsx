import {Story} from "@storybook/react";
import {SelectCustom, SelectCustomPropsType} from "./SelectCustom";
import {v1} from "uuid";

export default {
    title: 'SelectCustom',
    component: SelectCustom
}

const Template: Story<SelectCustomPropsType> = (args) => <SelectCustom {...args} />

export const SelectCustomStory = Template.bind({})
SelectCustomStory.args = {
    items: [
        {id: v1(), value: "1"},
        {id: v1(), value: "2"},
        {id: v1(), value: "3"},
        {id: v1(), value: "4"},
        {id: v1(), value: "5"},
    ],
    onChange(value) {
        console.log(value)
    }
}