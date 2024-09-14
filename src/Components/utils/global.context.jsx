import { createContext, useContext, useEffect, useReducer, useCallback } from "react";


const getLocalStorageFavs = () => JSON.parse(localStorage.getItem("favs")) || [];
const setLocalStorageFavs = (favs) => localStorage.setItem("favs", JSON.stringify(favs));

export const initialState = {
  theme: "light", 
  data: [],
  dentist: {},
  favs: getLocalStorageFavs(),
  loading: false,
  error: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_DENTISTS_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "GET_DENTISTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "GET_DENTIST":
      return { ...state, dentist: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      return { ...state, favs: filteredFavs };
    default:
      throw new Error("Acción no existente");
  }
};

const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  const fetchData = useCallback(async () => {
    dispatch({ type: "GET_DENTISTS_REQUEST" });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Error en la petición");
      const data = await response.json();
      dispatch({ type: "GET_DENTISTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_DENTISTS_FAILURE", payload: error.message });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  
  useEffect(() => {
    setLocalStorageFavs(state.favs);
  }, [state.favs]);

 
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};


export const useContextGlobalStates = () => useContext(ContextGlobal);
