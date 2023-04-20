import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Main from '../views/Main'
import Game from '../views/Game'
import Results from '../views/Results'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>Error</h1>,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/game',
				element: <Game />,
			},
			{
				path: '/results',
				element: <Results />,
			},
		],
	},
])

export default router
