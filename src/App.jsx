import datos from './mock/elements.json'
import './App.css'
export const App = () => {
  return (
    <h1>
      {datos.forEach(dato => <h1>Hola</h1>)}
    </h1>
  )
}
