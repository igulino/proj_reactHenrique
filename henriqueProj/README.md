Aplicação de Exemplo — Login Google e Cadastro

**Descrição**

Aplicação web em React que demonstra autenticação com conta Google, apresentação dos desenvolvedores e um formulário de cadastro de usuário com campos pré-preenchidos a partir dos dados do login. Ao finalizar o cadastro, a aplicação gera e exibe o objeto JSON com os dados do usuário.

**Tecnologias utilizadas**

- React (componentes funcionais)
- TypeScript
- Vite (dev server/build)
- React Router (navegação)
- Google Identity Services (login com Google)

**Integrantes da dupla**

- Igor — back-end e front
- Rafael — Back-end e front 

**Instruções para execução local**

1. Clonar o repositório e entrar na pasta do projeto:

```bash
git clone <repo-url>
cd henriqueProj
```

2. Criar um arquivo `.env` na raiz com a variável de ambiente do Google (obtenha a Client ID no Google Cloud Console):

```env
VITE_GOOGLE_CLIENT_ID=seu_client_id.apps.googleusercontent.com
```

3. Certifique-se de registrar a origem do dev server (ex.: `http://localhost:5174`) nas configurações do OAuth 2.0 Client (Google Cloud Console) em _Authorized JavaScript origins_.

4. Instalar dependências e iniciar o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

5. Abrir no navegador: `http://localhost:5174/` (ou a porta mostrada pelo Vite).

**Observações**

- Se ocorrer `origin_mismatch` ao tentar autenticar com Google, verifique se a origem do seu servidor local está listada em _Authorized JavaScript origins_ no OAuth Client do Google Cloud.
- Os campos de nome e e-mail do formulário de cadastro são pré-preenchidos com os dados obtidos no login Google.

**Link da aplicação em produção**

Coloque aqui a URL da aplicação em produção quando disponível (ex: `https://seu-app.vercel.app`).

---

Se quiser, eu posso: adicionar um arquivo `.env.example`, gerar um `README` em inglês, ou configurar deploy para Vercel/Netlify.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
