import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { menuContext } from '../../context/MenuContext'
import { gameContext } from '../../context/GameContext'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'

const ResultsContainer = () => {
	const { difficulty, totalQuestions, resetGame } = useContext(menuContext)
	const { hits } = useContext(gameContext)
	const navigate = useNavigate()

	const handlePlayAgain = () => {
		// handlePage(true)
		resetGame()
		navigate('/')
	}

	return (
		<section>
			<Title text='Resultados' />

			<table>
				<tbody>
					<tr>
						<td>Dificultad</td>
						<td>{difficulty}</td>
					</tr>
					<tr>
						<td>Total preguntas</td>
						<td>{totalQuestions}</td>
					</tr>
					<tr>
						<td>Aciertos</td>
						<td>{hits}</td>
					</tr>
					<tr>
						<td>Comodines usados</td>
						<td>pendiente</td>
					</tr>
					<tr>
						<td>Puntaje {Math.trunc((hits / totalQuestions) * 100)}</td>
					</tr>
				</tbody>
			</table>
			<Button text='Volver a jugar' f={handlePlayAgain} />
		</section>
	)
}

export default ResultsContainer
