export default function CustomerData ({children, onSelectUser}) {
    return (
        <li>
            <button onClick = {onSelectUser}>{children}</button>
        </li>
    );
}