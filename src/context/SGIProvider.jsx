import React, { createContext, useContext, useState, useEffect } from "react";

const SgiMarketContext = createContext();

export const useSgiMarketContext = () => useContext(SgiMarketContext);

export const SGIProvider = ({ children }) => {
  //const PORT = process.env.PORT ?? 5500;
  const [rol, setRol] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [seccion, setSeccion] = useState("");
  const [comprasAll, setComprasAll] = useState("");
  const [datos, setDatos] = useState([]);
  const token = localStorage.getItem("token");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = await fetch("http://127.0.0.1:8001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ email, password }),
      })
      const data = await auth.json();
      if (auth.ok) {
        localStorage.setItem("token", data.token);
        setRol(parseInt(data.rol, 10));
        sessionStorage.setItem("rol", data.rol);
        if (data.message !== 'unauthorized') {
          window.location.href = `${data.redirected}`;
          sessionStorage.setItem("rol", data.rol);
        }
      } else if (auth.status === 401) {
        setError(data.mensaje);
        setSeccion(data.mensaje);

      } else if (auth.status === 404) {
        setError(data.mensaje);
        setSeccion(data.mensaje);
      } else if (auth.status === 500) {
        setError(data.mensaje);
        setSeccion(data.mensaje);
      } else {
        throw new Error(auth.status);
      }
    } catch (error) {
      console.error('Error:', error);
      setError("Ocurrió un error al iniciar sesión");
      setSeccion("Ocurrió un error al iniciar sesión");
    }
  }

  useEffect(() => {

    const datosDashboard = async () => {

      const res = await fetch("http://127.0.0.1:8001/api/compras", { method: "GET", headers: { Authorization: `Bearer ${token}`, }, })
      const data1 = await res.json();
      setComprasAll(data1);
      if (res.status === 401) {
        setSeccion(data1?.message);
      }
      const response = await fetch('http://127.0.0.1:8001/api/productosventas', { method: "GET", headers: { Authorization: `Bearer ${token}`, }, });
      const data = await response.json();
      setDatos(data);
      if (response.status === 401) {
        setSeccion(data?.message);
      }
    }

    datosDashboard();
    const intervalId = setInterval(datosDashboard, 1000);
    return () => clearInterval(intervalId);

  }, [token, seccion]);

  const contextValue = {
    seccion,
    setEmail,
    password,
    handleSubmit,
    error,
    setPassword,
    comprasAll,
    email,
    datos,
    rol,
  };

  return (
    <SgiMarketContext.Provider value={contextValue}>
      {children}
    </SgiMarketContext.Provider>
  );
};
