const Input = ({ onChange, value }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value)
    }

    return (
        <input className={``} value={value} onChange={handleChange} />
    )
}

export default Input