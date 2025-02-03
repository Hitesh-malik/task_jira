import './App.css'
import MainPage from './Components/MainPage/MainPage'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <MainPage />
    </DndProvider>
  )
}

export default App
