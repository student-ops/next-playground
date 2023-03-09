import React, { useState } from "react"

interface Props {
    onButtonClick: (value: string) => void
}

const InputForm = ({ onButtonClick }: Props) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onButtonClick(inputValue)
        setInputValue("")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

const DisplayValue = ({ value }: { value: string }) => {
    return (
        <div>
            <p>Value: {value}</p>
        </div>
    )
}

const ParentComponent = () => {
    const [displayValue, setDisplayValue] = useState("")

    const handleButtonClick = (value: string) => {
        console.log("Button clicked with value:", value)
        setDisplayValue(value)
    }

    return (
        <div>
            <InputForm onButtonClick={handleButtonClick} />
            <DisplayValue value={displayValue} />
        </div>
    )
}

export default ParentComponent
