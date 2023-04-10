import Button from '../../../../components/button/Button'
import { useContext } from 'react'
import { menuContext } from '../../../../context/MenuContext'

const DifficultyMenu = () => {
	const { handleDifficulty } = useContext(menuContext)
	return (
		<section>
			<h2>Selecciona la dificultad</h2>
			<section>
				<Button f={() => handleDifficulty('Fácil')} text='Fácil' />
				<Button f={() => handleDifficulty('Medio')} text='Medio' />
				<Button f={() => handleDifficulty('Difícil')} text='Difícil' />
				<Button
					f={() => handleDifficulty('Extra difícil')}
					text='Extra difícil'
				/>
			</section>
		</section>
	)
}
export default DifficultyMenu
