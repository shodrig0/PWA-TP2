const Input = ({ className, value, onChange, placeholder }) => {

    return (
        <input
            type="text"
            className={className}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            autoFocus />
    )
}

export default Input