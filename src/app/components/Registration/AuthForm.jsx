// src/app/components/Registration/AuthForm.jsx
"use client";

import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup" style={{ display: isLogin ? "none" : "block" }}>
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Registrarse
          </label>
          <input type="text" name="txt" placeholder="Tú Nombre" required />
          <input type="email" name="email" placeholder="Correo" required />
          <input
            type="password"
            name="pswd"
            placeholder="Contraseña"
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div className="login" style={{ display: isLogin ? "block" : "none" }}>
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Inicio
          </label>
          <input type="email" name="email" placeholder="Correo" required />
          <input
            type="password"
            name="pswd"
            placeholder="Contraseña"
            required
          />
          <button type="submit">Iniciar</button>
        </form>
      </div>
      <button onClick={toggleForm} className="toggle-button">
        {isLogin ? "Go to Sign Up" : "Go to Log In"}
      </button>
    </div>
  );
};

export default AuthForm;
