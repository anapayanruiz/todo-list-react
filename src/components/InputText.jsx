
export function InputText({ id, handleInput, valueInput, defaultValue, placeholder, className, disabled }) {

    function handleChange(event) {
        handleInput(event.target.value)
    }

    return (
        <input
            type="text"
            id={id}
            className={className}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={valueInput}
            onChange={handleChange}
            disabled={disabled}
        />
    )
}