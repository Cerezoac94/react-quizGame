import { useState } from 'react'

export const useActive = initialState => {
	const [active, setActive] = useState(initialState)
	const handleActive = refBtn => {
		setActive(refBtn)
	}
	return { active, handleActive }
}
