import datos from './mock/elements.json'
import './App.css'
import { useState } from 'react'

export const App = () => {
  const [elemento, setElemento] = useState('Hidrogeno')
  const element = (dato) => {
    const nombre = dato || 'Helio'
    return setElemento(nombre)
  }

  return (
    <>
      <main className="tab-periodic">
        {datos.elements.map(dato => (
          <article
            onMouseOver={() => element(dato)}
            className={`${dato.name} ${dato.category}`}
            key={dato.name}
          >
            <p className="atomic-number">{dato.number}</p>
            <p className="atomic-symbol">{dato.symbol}</p>
            <p className="atomic-name">{dato.name}</p>
          </article>
        ))}
        <p className="asteric">*</p>
        <p className="asteric asteric2">**</p>
        <p className="asteric-info">* Lantánidos</p>
        <p className="asteric-info asteric-info2">** Actínidos</p>
        <div className="principal-element">
          <p className="info-element atomic-masa_name">
            masa atómica <span className="atomic-masa_arrow"></span>
          </p>
          <p className="info-element atomic-energy_el">
            1º energía de ionización <span className="atomic-masa_arrow"></span>
          </p>
          <p className="info-element atomic-symbol_el">
            Simbolo quimico <span className="atomic-masa_arrow"></span>
          </p>
          <p className="info-element atomic-name_el">
            nombre <span className="atomic-masa_arrow"></span>
          </p>
          <p className="info-element atomic-config_el">
            config eléctronica <span className="atomic-masa_arrow"></span>
          </p>
          <p className="info-element atomic-numero_el">
            <span className="atomic-masa_arrow"></span> numero atómico
          </p>
          <p className="info-element atomic-electronic_el">
            <span className="atomic-masa_arrow"></span> electronegatividad
          </p>
          <div className={`card-element ${elemento.category || 'diatomic'}`}>
            <div className="seccion-one">
              <div className="atomic_masa">
                <p className="atomic-masa_info">{elemento.atomic_mass?.toFixed(4) || 1.0080}</p>
                <div className="electon_energy">
                  <p>{elemento.ionization_energies?.at() || 1312}</p>
                  <p>{elemento.electronegativity_pauling || 2.2}</p>
                </div>
              </div>
              <p className="atomic_number">{elemento.number || 1}</p>
            </div>
            <div className="seccion-two">
              <div className="principal-char">
                <p className="principal_symbol">{elemento.symbol || 'H'}</p>
                <p className="principal_name">{elemento.name || 'Hydrogen'}</p>
                <p className="principal_electron">{elemento.electron_configuration_semantic || '1s1'}</p>
              </div>
              <p>{elemento.oxydation_state}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
