import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const scriptId = "google-identity";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.id = scriptId;
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
      s.onload = initGSI;
    } else {
      initGSI();
    }

    function initGSI() {
      // @ts-ignore
      if (!window.google || !window.google.accounts) return;
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";
      if (!clientId) return;
      // @ts-ignore
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
      // @ts-ignore
      window.google.accounts.id.renderButton(
        document.getElementById("g_signin")!,
        { theme: "outline", size: "large" },
      );
    }

    function handleCredentialResponse(resp: any) {
      try {
        const jwt = resp.credential as string;
        const payload = JSON.parse(atob(jwt.split(".")[1]));
        const u = {
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
        };
        setUser(u);
      } catch (e) {
        console.error("Failed to decode credential", e);
      }
    }
  }, [setUser]);

  return (
    <div>
      <h1>Home</h1>
      <p>Bem-vindo! Faça login com sua conta Google para começar.</p>

      {!user && <div id="g_signin" />}

      {user && (
        <div>
          <h3>Usuário autenticado</h3>
          <p>Nome: {user.name}</p>
          <p>E-mail: {user.email}</p>
          {user.picture && (
            <img src={user.picture} alt="avatar" width={80} height={80} />
          )}
          <div style={{ marginTop: 12 }}>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            <button onClick={() => navigate("/team")} style={{ marginLeft: 8 }}>
              Apresentação da Dupla
            </button>
          </div>
        </div>
      )}
      {!import.meta.env.VITE_GOOGLE_CLIENT_ID && (
        <p style={{ marginTop: 12, color: "orange" }}>
          Observação: configure `VITE_GOOGLE_CLIENT_ID` em um arquivo `.env` na
          raiz para ativar o login com Google.
        </p>
      )}
    </div>
  );
};

export default Home;
