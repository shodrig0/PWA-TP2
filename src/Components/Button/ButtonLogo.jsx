const ButtonLogo = ({ onClick, className, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonLogo