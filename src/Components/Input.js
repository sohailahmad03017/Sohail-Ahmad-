function Input({label, value, onChange}){
    return (
        <input placeholder={label} value={value} onChange={onChange} />
    )
}

export default Input;