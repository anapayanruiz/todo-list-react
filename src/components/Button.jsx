export function Button({ children, handleClick, className, disabled }) {

    return (
        <button className={className} onClick={handleClick} disabled={disabled}>{children}</button>
    )
}