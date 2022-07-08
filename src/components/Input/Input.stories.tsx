import {Story} from "@storybook/react";
import {Input, InputPropsType} from "./Input";

export default {
    title: 'input',
    component: Input
}

const Template: Story<InputPropsType> = (args) => <Input {...args} />

export const InputStory = Template.bind({})
InputStory.args = {
    placeholder: 'Placeholder',
    title: 'Title'
}

