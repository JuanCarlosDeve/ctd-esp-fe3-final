import React from 'react'
import Card from '../Components/Card'
import {useContextGlobalStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {state} = useContextGlobalStates();

  return (
    <main className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((dentista) =>( 
          <Card 
          name={dentista.name} 
          username={dentista.username}
          id={dentista.id}
          key={dentista.id}
          />

        ))}
      </div>
    </main>
  )
}

export default Home