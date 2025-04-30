const Button = ({ nombre, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>{nombre}</button>
    )
}

export default Button