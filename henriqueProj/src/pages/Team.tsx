import React from "react";

const Team: React.FC = () => {
  return (
    <div>
      <h1>Apresentação da Dupla</h1>
      <div style={{ display: "grid", gap: 16 }}>
        <section style={{ border: "1px solid #ddd", padding: 12 }}>
          <h2>Igor</h2>
          <p>
            formação: médio e tecnico em informática para web.
          </p>
        </section>

        <section style={{ border: "1px solid #ddd", padding: 12 }}>
          <h2>Rafael</h2>
          <p>
            formação: médio e tecnico em informática para web.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Team;
