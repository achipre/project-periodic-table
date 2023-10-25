import datos from './mock/elements.json'
import './App.css'
// import { useEffect } from 'react'
export const App = () => {
  // useEffect(() => {
  //   const datafetch = async datos
  //   const res = await res.json()
  //   const data = await data
  // .then(res => res.json())
  // .then(data => console.log(data))
  // }, [])
  return (
    <main className="tab-periodic">
      {datos.elements.map(dato => (
        <article className={dato.name} key={dato.name}>
          <p>{dato.number}</p>
          <p>{dato.symbol}</p>
          <p>{dato.name}</p>
        </article>
      ))}
    </main>
  )
}
