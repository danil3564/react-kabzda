import {Story} from "@storybook/react";
import {Checkbox, CheckboxPropsType} from "./Checkbox";

export default {
    title: 'Checkbox',
    component: Checkbox
}

const Template: Story<CheckboxPropsType> = (args) => <Checkbox {...args} />

export const CheckboxStory = Template.bind({})
CheckboxStory.args = {
    title: 'Title'
}

