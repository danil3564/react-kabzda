import {Story} from "@storybook/react";
import {SelectStandard, SelectPropsType} from "./SelectStandard";

export default {
    title: 'SelectStandard',
    component: SelectStandard
}

const Template: Story<SelectPropsType> = (args) => <SelectStandard {...args} />

export const SelectStandardStory = Template.bind({})
SelectStandardStory.args = {
    value: "1",
    items: [
        {item: "Krasnoyarsk", value: "1"},
        {item: "Moscow", value: "2"},
        {item: "Spb", value: "3"}
    ]
}
