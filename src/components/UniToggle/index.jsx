import { useState } from 'react';

import './UniToggle.css'

export default function UniToggle() {

	const [checked, setChecked] = useState(false)

	const handleToggle = () => {
		setChecked(!checked)
		const title = document.querySelector("h1")
		title.classList.toggle("myViolet")

		const subTitle = document.getElementById("subTitle")
		subTitle.classList.toggle("rainbow_text_animated")

		const collapse1 = document.querySelector("#collapse_0 p")
		collapse1.classList.toggle("rainbow_text_animated")

		const collapse2 = document.querySelector("#collapse_1 p")
		collapse2.classList.toggle("rainbow_text_animated")

	}

	return (
	<div>
		<span>
			<label className="switch">
				<input id="myCheckBox" type="checkbox" checked={checked} onChange={ handleToggle } />
				<span className="slider round"></span>
				<span className='myDisplay'>LABEL SLIDER</span>
			</label>
		</span>
	</div>
)}