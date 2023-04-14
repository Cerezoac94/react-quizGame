import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import DifficultyMenu from './components/dificultyMenu/DifficultyMenu'
import TotalQuestionMenu from './components/totalQuestionMenu/TotalQuestionMenu'
import NotesMenu from './components/notes/NotesMenu'

const MainContainer = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState(1)

	const handlePage = () => {
		setPage(page + 1)
	}

	const handleStart = () => {
		// handlePage(true)
		navigate('/game')
	}

	// useEfect => en return llamar handlerReset

	return (
		<section>
			<Title text='QUIZ GAME' />
			{page == 1 && <DifficultyMenu />}
			{page == 2 && <TotalQuestionMenu />}
			{page == 3 && <NotesMenu />}
			<Button
				text={page == 3 ? 'Comenzar' : 'Continuar'}
				f={page == 3 ? handleStart : handlePage}
			/>
		</section>
	)
}
export default MainContainer
