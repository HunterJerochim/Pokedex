import React from "react"
import './search.css';

export default function Search(props) {
	const [value, setValue] = React.useState("")

	function handleInput(event) {
		setValue(event.target.value)
	}

    return (
	  <div className="container--search">
			<label>Search for stuff</label>
			<input value={value} onChange={handleInput} id="search" type="search" placeholder="Search..." autoFocus required />
			<button  onClick={() => props.handleSubmit(value)}>Go</button>
	  </div> 
    )
}