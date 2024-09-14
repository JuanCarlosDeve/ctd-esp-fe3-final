import React from 'react'
import Form from '../Components/Form'
import { useContextGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContextGlobalStates();

  return (
    <div className={`flex flex-col w-full items-center pb-14 ${state.theme === "dark" ? "dark" : "light"}`}>
      <h2>¿Quieres saber más?</h2>
      <p>
      Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact