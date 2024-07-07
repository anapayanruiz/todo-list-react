import { useState } from 'react'

export function InputCheckbox({ id, valueInput, handleInput, className }) {    
    const [localChecked, setLocalChecked] = useState(valueInput)

    function handleChange(event) {
        handleInput(event.target.checked)
        setLocalChecked(event.target.checked)
    }

    return (
        <input
            id={id}
            type="checkbox"
            className={className}
            onChange={handleChange}
            checked={localChecked}
        />
    )
}