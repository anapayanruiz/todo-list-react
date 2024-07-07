
export function Task({ children, className }) {

    return (
        <li className={className}>
            {children}
        </li>
    )
}