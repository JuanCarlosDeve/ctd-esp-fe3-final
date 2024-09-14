import React from 'react'
import { routes } from './utils/routers'
import { Link } from 'react-router-dom'
import {useContextGlobalStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobalStates();
  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'TOGGLE_THEME', payload: newTheme });
  };

  return (
    <nav className={`flex gap-8 p-4 w-full ${state.theme === 'dark' ? 'dark' : 'light'}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home} className="hover:underline ">Home</Link>
      <Link to={routes.contact} className="hover:underline">Contacto</Link>
      <Link to={routes.favs} className="hover:underline">Favoritos</Link>

      <button 
        onClick={toggleTheme} 
        className={`ml-auto px-4 py-2 rounded-lg transition-colors ${
          state.theme === 'dark' ? 'bg-yellow-500 text-gray-800' : 'bg-gray-800 text-white'
        } hover:opacity-80`}
      >
        {state.theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </nav>
  )
}

export default Navbar