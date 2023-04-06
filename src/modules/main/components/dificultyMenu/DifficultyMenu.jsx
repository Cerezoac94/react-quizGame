import Button from '../../../../components/button/Button'
import { useMenu } from '../../../../../hooks/useMenu'

const DifficultyMenu = () => {
	const { handleDifficulty } = useMenu()
	return (
		<section>
			<h2>Selecciona la dificultad</h2>
			<section>
				<Button f={() => handleDifficulty('fácil')} text='Fácil' />
				<Button f={() => handleDifficulty('medio')} text='Medio' />
				<Button f={() => handleDifficulty('difícil')} text='Difícil' />
				<Button
					f={() => handleDifficulty('extra difícil')}
					text='Extra difícil'
				/>
			</section>
		</section>
	)
}
export default DifficultyMenu
