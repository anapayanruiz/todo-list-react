import "./Button.css";

const getStyles = (...arg) => ["button", ...arg].filter(Boolean).join(" ");

export function Button({ children, handleClick, disabled, type }) {

    return (
        <button 
            className={getStyles(type)} 
            onClick={handleClick} 
            disabled={disabled}
        >
            {children}
        </button>
    )
}