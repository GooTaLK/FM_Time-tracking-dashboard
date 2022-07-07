import { createRoot } from 'react-dom/client'
import App from './app'

import './styles/global.css'
import './styles/colors.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
