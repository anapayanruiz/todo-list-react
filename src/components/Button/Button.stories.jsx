import { Button } from "./Button";

// eslint-disable-next-line storybook/story-exports
export default {
    title: "components/Button",
    component: Button,
    args: {
        children: "Button",
    },
    // Enables auto-generated documentation for this component and includes all stories in this file
    // tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
    ...Primary.args,
    primary: false,
    type: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
    ...Primary.args,
    primary: false,
    type: "tertiary",
};