import React, { createContext, useContext, useState, useEffect } from "react";

const SgiMarketContext = createContext();

export const useSgiMarketContext = () => useContext(SgiMarketContext);

export const SGIProvider = ({ children }) => {
  //const PORT = process.env.PORT ?? 5500;
  const [rol, setRol] = useState(null);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [seccion, setSeccion] = useState("");
  const [comprasAll, setComprasAll] = useState("");
  const token = localStorage.getItem("token");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/backend/login", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ correo, contrasena }), })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            if (res.status === 401) {
              throw new Error(data.passIncorrecto);
            }
            if (res.status === 404) {
              throw new Error(data.userInvalido);
            }
            throw new Error("Ocurrió un error al iniciar sesión");
          });
        }
      })
      .then((data) => {
        setSeccion(data.error);
        setError(data.error);
        localStorage.setItem("token", data.token);
        setRol(parseInt(data?.rol, 10));
        sessionStorage.setItem("rol", data.rol);
        if (data.error !== 'Sin Autorización') {
          window.location.href = `/dashboard`; //http://127.0.0.1:5500:${PORT}
          sessionStorage.setItem("rol", data.rol);
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {

    const datosDashboard = async () => {

      const res = await fetch("http://127.0.0.1:8001/api/compras", { method: "GET" })
      const data1 = await res.json();
      //sessionStorage.setItem("rol", 1)
      setComprasAll(data1);
    }

    //datosDashboard();

    const intervalId = setInterval(datosDashboard, 1000);
    return () => clearInterval(intervalId);

  }, [token, seccion]);

  const contextValue = {
    seccion,
    setCorreo,
    contrasena,
    handleSubmit,
    error,
    setContrasena,
    comprasAll,
    correo,
    rol,
  };

  return (
    <SgiMarketContext.Provider value={contextValue}>
      {children}
    </SgiMarketContext.Provider>
  );
};
