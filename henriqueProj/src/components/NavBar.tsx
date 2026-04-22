import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar: React.FC = () => {
  const { user, setUser } = useAuth();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderBottom: "1px solid #eee",
      }}
    >
      <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/team">Apresentação da Dupla</Link>
        <Link to="/register">Cadastro</Link>
      </nav>

      <div style={{ marginLeft: "auto" }}>
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {user.picture && (
              <img
                src={user.picture}
                alt="avatar"
                width={36}
                height={36}
                style={{ borderRadius: 18 }}
              />
            )}
            <span>{user.name}</span>
            <button onClick={() => setUser(null)} style={{ marginLeft: 8 }}>
              Logout
            </button>
          </div>
        ) : (
          <span>Não autenticado</span>
        )}
      </div>
    </header>
  );
};

export default NavBar;
