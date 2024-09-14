import React, { useEffect } from 'react';
import { useContextGlobalStates } from "../Components/utils/global.context";
import { useParams } from 'react-router-dom';


const Detail = () => {
  const { state, dispatch } = useContextGlobalStates();
  const { id } = useParams(); 

  
  useEffect(() => {
    const fetchDentistDetail = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("Error en la petición");
        const data = await response.json();
        dispatch({ type: "GET_DENTIST", payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchDentistDetail();
  }, [id, dispatch]);

  const { dentist, theme } = state;

  return (
    <div className={`min-h-screen p-6 flex justify-center items-center ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="  shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Detalle del Dentista
        </h1>
        {dentist.name ? (
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {dentist.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {dentist.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Phone:</span> {dentist.phone}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Website:</span>
              <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
                {dentist.website}
              </a>
            </p>
          </div>
        ) : (
          <p className="text-center">Cargando la info del Dentista...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
