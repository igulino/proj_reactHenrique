import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Register: React.FC = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [other, setOther] = useState("");
  const [result, setResult] = useState<any | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const obj = {
      name,
      email,
      phone: phone || undefined,
      other: other || undefined,
    };
    console.log("Usuário cadastrado:", obj);
    setResult(obj);
  }

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 480 }}
      >
        <label>
          Nome
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          E-mail
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone (opcional)
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Outros dados
          <input value={other} onChange={(e) => setOther(e.target.value)} />
        </label>
        <div>
          <button type="submit">Finalizar cadastro</button>
        </div>
      </form>

      {result && (
        <div style={{ marginTop: 12 }}>
          <h3>JSON gerado</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Register;
