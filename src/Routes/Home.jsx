import React from 'react'
import Card from '../Components/Card'
import {useContextGlobalStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {state} = useContextGlobalStates();

  return (
    <main className={`p-4 ${state.theme === 'dark' ? 'dark' : 'light'}`}>
      <h1 className='text-[blue] pb-3 text-[20px]'>Home</h1>
      <div className='card-grid'>
        {state.data.map((dentista) =>( 
          <Card 
          name={dentista.name} 
          username={dentista.username}
          id={dentista.id}
          key={dentista.id}
          isFavorite={false}
          />

        ))}
      </div>
    </main>
  )
}

export default Home