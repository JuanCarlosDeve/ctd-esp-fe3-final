import React from "react";
import { Link } from "react-router-dom"
import toast from 'react-hot-toast';


const Card = ({ name, username, id, isFavorite, onRemoveFav }) => {

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];

    const isAlreadyFav = favs.some((fav) => fav.id === id);
    if (!isAlreadyFav) {

      const newFavs = [...favs, { name, username, id }];

      localStorage.setItem("favs", JSON.stringify(newFavs));
      toast.success('Dentista añadido a favoritos');
    } else {
      toast.error('Este dentista ya esta agregado')
    }
  };

  const removeFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);

    localStorage.setItem("favs", JSON.stringify(newFavs));
    toast.success("Dentista eliminado de favoritos");

    
    if (onRemoveFav) {
      onRemoveFav(id);
    }
  };

  return (
    <div className="card">
      <picture>
        <img className="img-card" src="/images/doctor.jpg" alt="img-doctor" />
      </picture>
      <h2>{name}</h2>
      <p>{username}</p>
      <p>ID: {id}</p>
      <Link key={id} to={`/detail/${id}`}>Ver Detalles</Link>

      {isFavorite ? (
        <button onClick={removeFav} className="favButton">
          Quitar de favoritos
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Agregar a favoritos
        </button>
      )}
    </div>
  );
};

export default Card;
