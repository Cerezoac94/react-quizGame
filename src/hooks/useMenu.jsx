import { useState } from 'react'

export const useMenu = () => {
	const [page, setPage] = useState(1)

	const handlePage = () => {
		setPage(page + 1)
	}

	// handleReset
	return {
		page,
		handlePage,
	}
}
