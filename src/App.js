import './App.css'
import { CreateTodo } from './components/CreateTodo/CreateTodo'
import { SidePanel } from './components/SidePanel/SidePanel'

function App() {
	return (
		<div className='App'>
			<CreateTodo />
			<SidePanel />
		</div>
	)
}

export default App
