export function Icon({ children, className, iconStyles, handleIcon }) {

    return (
        <i className={className} style={iconStyles} onClick={handleIcon}>
            {children}
        </i>
    )
}