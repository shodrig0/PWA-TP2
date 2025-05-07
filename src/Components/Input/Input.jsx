const Input = ({ className, value, onChange, placeholder }) => {

    return (
        <input
            type="text"
            className={className}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder} />
    )
}

export default Input