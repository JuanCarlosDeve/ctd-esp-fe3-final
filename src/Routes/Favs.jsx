import Card from "../Components/Card";
import React, { useEffect, useState } from "react";
import { useContextGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([]);
  const { state } = useContextGlobalStates();

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  const handleRemoveFav = (id) => {
    const updatedFavs = favs.filter((fav) => fav.id !== id);
    setFavs(updatedFavs);
  };

  return (
    <>
      <h1 className={` text-[20px] ${state.theme === "dark" ? "dark" : "light"}`}>Dentistas Favoritos</h1>
      <div className={` p-4 card-grid ${state.theme === "dark" ? "dark" : "light"}`}>
        {favs.length > 0 ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
              isFavorite={true}
              onRemoveFav={handleRemoveFav}
            />
          ))
        ) : (
          <p className="w-full flex justify-center">No tienes dentistas guardados como favoritos.</p>
        )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
      </div>
    </>
  );
};

export default Favs;
