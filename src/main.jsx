import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import MenuContext from './context/MenuContext'
import GameContext from './context/GameContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MenuContext>
			<GameContext>
				<RouterProvider router={router} />
			</GameContext>
		</MenuContext>
	</React.StrictMode>
)
