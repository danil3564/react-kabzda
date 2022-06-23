import {useRef, useState} from "react";
import {Story} from "@storybook/react";

// export default {
//     title: 'input',
// }

// const TemplateTrackValue: Story = () => {
//     const [value, setValue] = useState('')
//     const onChangeHandler = (value: string) => {
//         setValue(value)
//     }
//     return(
//         <>
//             <input onChange={(e) => onChangeHandler(e.currentTarget.value)}/>
//             {value}
//         </>
//     )
// }
// const TemplateBtnPress: Story = () => {
//     const [value, setValue] = useState('')
//     const inputRef = useRef<HTMLInputElement>(null)
//
//     const onClickHandler = () => {
//         const el = inputRef.current as HTMLInputElement
//         setValue(el.value)
//     }
//     return(
//         <>
//             <input ref={inputRef} />
//             <button onClick={onClickHandler}>save</button> {value}
//         </>
//     )
// }
//
// const TemplateControlledInput: Story = () => {
//     const [inpValue, setInpValue] = useState('')
//     const onChangeHandler = (value: string) => setInpValue(value)
//
//     return <input
//         value={inpValue}
//         onChange={(e) => onChangeHandler(e.currentTarget.value)}/>
// }
// const TemplateControlledCheckbox: Story = () => {
//     const [inpChecked, setInpChecked] = useState(true)
//     const onChangeHandler = (checked: boolean) => setInpChecked(checked)
//
//     return <input
//         type={"checkbox"}
//         checked={inpChecked}
//         onChange={(e) => onChangeHandler(e.currentTarget.checked)}/>
// }
// const TemplateControlledSelect: Story = () => {
//     const [chooseOption, setChooseOption] = useState<string | undefined>("1")
//     const onChangeHandler = (value: string) => {
//         setChooseOption(value)
//     }
//
//     return <select
//         value={chooseOption}
//         onChange={(e) => onChangeHandler(e.currentTarget.value)}>
//         <option>none</option>
//         <option value="1">first</option>
//         <option value="2">second</option>
//         <option value="3">third</option>
//     </select>
// }
//
// export const TrackValueUnControlledInput = TemplateTrackValue.bind({})
// export const GetValueUnControlledInputBtnPress = TemplateBtnPress.bind({})
// export const GetValueControlledInput = TemplateControlledInput.bind({})
// export const GetValueControlledCheckbox = TemplateControlledCheckbox.bind({})
// export const GetOptionControlledSelect = TemplateControlledSelect.bind({})