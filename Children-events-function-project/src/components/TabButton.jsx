export default function TabButton({children,onSelect}) {

    return(
        <li>
            <button className="speacialButton"  onClick={onSelect}>{children}</button>
        </li>
    )
}