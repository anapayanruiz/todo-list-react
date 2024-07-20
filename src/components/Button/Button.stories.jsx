import { Button } from "./Button";


export default {
    title: "Design System/Atoms/Button",
    component: Button,
    argTypes: {
        type: {
          options: ['primary', 'secondary', 'tertiary'],
          control: { type: 'radio' },
        }
    },
};

export function Default({ type, disabled, label }) {
    return <Button type={type} disabled={disabled}>{label}</Button>;
}

Default.args = {
    label: "Button",
    type: "primary",
    disabled: false,
}; // Default args for the button