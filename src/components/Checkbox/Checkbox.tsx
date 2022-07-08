import React, {useState} from 'react';

export type CheckboxPropsType = {
    onChangeChecked?: (checked: boolean) => void
    title?: string
}

export const Checkbox = (props: CheckboxPropsType) => {
    const [checked, setChecked] = useState<boolean>(true)
    const onChangeHandler = (checked: boolean) => {
        setChecked(checked)
        props.onChangeChecked && props.onChangeChecked(checked)
    }
    return (
        <input
            type={"checkbox"}
            checked={checked}
            title={props.title && props.title}
            onChange={(e) => onChangeHandler(e.currentTarget.checked)}/>
    );
};