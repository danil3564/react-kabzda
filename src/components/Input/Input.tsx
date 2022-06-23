import React, {useState} from 'react';

export type InputPropsType = {
    onChangeInput?: (value: string) => void
    placeholder?: string
    title?: string
}

export const Input = (props: InputPropsType) => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (value: string) => {
        setValue(value)
        props.onChangeInput && props.onChangeInput(value)
    }
    return (
        <input
            value={value}
            placeholder={props.placeholder && props.placeholder}
            title={props.title && props.title}
            onChange={(e) => onChangeHandler(e.currentTarget.value)}/>
    );
};